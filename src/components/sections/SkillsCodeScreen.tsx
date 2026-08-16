import * as React from "react";
import { fernandoStack } from "@/content/fernandoStack";
import { cn } from "@/lib/utils";

const keyCls = "text-[var(--color-accent-green-darker)]";

const strCls = "text-amber-200/90";

const punctCls = "text-white/45";

const punctDimCls = "text-white/35";

function isPlainObject(v: unknown): v is Record<string, unknown> {
  return typeof v === "object" && v !== null && !Array.isArray(v);
}

/** lg+ → wide horizontal layout; small screens stay compact / scroll-friendly */
function useWideLayout() {
  return React.useSyncExternalStore(
    (onChange) => {
      const mq = window.matchMedia("(min-width: 1024px)");
      mq.addEventListener("change", onChange);
      return () => mq.removeEventListener("change", onChange);
    },
    () => window.matchMedia("(min-width: 1024px)").matches,
    () => false,
  );
}

function CodeValue({
  value,
  depth,
  wideLayout,
  fieldKey,
}: {
  value: unknown;
  depth: number;
  wideLayout: boolean;
  /** Only set for root-level properties (e.g. currentFocus). */
  fieldKey?: string;
}): React.ReactNode {
  const indent = wideLayout ? 16 + depth * 20 : 10 + depth * 12;

  if (value === null) {
    return <span className="text-white/45">null</span>;
  }

  if (typeof value === "string") {
    if (fieldKey === "currentFocus") {
      return (
        <span className={cn(strCls, "break-words [overflow-wrap:anywhere]")}>
          &quot;{value}&quot;
        </span>
      );
    }
    return (
      <span className={cn("break-words", strCls)}>&quot;{value}&quot;</span>
    );
  }

  if (typeof value === "number" || typeof value === "boolean") {
    return <span className="text-orange-300">{String(value)}</span>;
  }

  if (Array.isArray(value)) {
    if (value.length === 0) {
      return <span className={punctCls}>[]</span>;
    }

    const allPrimitive = value.every(
      (x) => typeof x === "string" || typeof x === "number" || typeof x === "boolean",
    );

    const estimatedInlineChars =
      allPrimitive && value.length > 0
        ? value.reduce((acc, item) => acc + String(item).length + 4, 2)
        : 9999;

    /** Mobile: few short items per line. Desktop: long horizontal lines, less height. */
    const useCompactLine = wideLayout
      ? allPrimitive &&
        value.length <= 8 &&
        estimatedInlineChars < 220
      : allPrimitive &&
        value.length <= 3 &&
        estimatedInlineChars < 48;

    if (useCompactLine) {
      return (
        <span className="inline leading-relaxed">
          <span className={punctCls}>[</span>
          {value.map((item, i) => (
            <React.Fragment key={i}>
              {typeof item === "string" ? (
                <span className={strCls}>&quot;{item}&quot;</span>
              ) : (
                <span className="text-orange-300">{String(item)}</span>
              )}
              {i < value.length - 1 ? (
                <span className={punctDimCls}>, </span>
              ) : null}
            </React.Fragment>
          ))}
          <span className={punctCls}>]</span>
        </span>
      );
    }

    return (
      <span className="block">
        <span className={punctCls}>[</span>
        {value.map((item, i) => (
          <div key={i} style={{ paddingLeft: indent }}>
            <CodeValue
              value={item}
              depth={depth + 1}
              wideLayout={wideLayout}
            />
            {i < value.length - 1 ? (
              <span className={punctDimCls}>,</span>
            ) : null}
          </div>
        ))}
        <span className={punctCls}>]</span>
      </span>
    );
  }

  if (isPlainObject(value)) {
    const keys = Object.keys(value);
    return (
      <span className="block">
        <span className={punctCls}>{"{"}</span>
        {keys.map((k, i) => (
          <div key={k} style={{ paddingLeft: indent }}>
            <span className={keyCls}>{k}</span>
            <span className="text-white/40">
              :{" "}
            </span>
            <CodeValue
              value={value[k]}
              depth={depth + 1}
              wideLayout={wideLayout}
            />
            {i < keys.length - 1 ? <span className={punctDimCls}>,</span> : null}
          </div>
        ))}
        <span className={punctCls}>{"}"}</span>
      </span>
    );
  }

  return null;
}

export function SkillsCodeScreen() {
  const wideLayout = useWideLayout();

  return (
    <div className="mt-12 w-full min-w-0 max-w-full sm:mt-16">
      <p className="mb-4 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-white/40 sm:mb-5 sm:text-xs">
        Stack snapshot
      </p>

      <div
        className={cn(
          "relative min-w-0 max-w-full overflow-hidden rounded-2xl border border-white/10",
          "bg-[#06080c] shadow-[0_24px_80px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.04)]",
        )}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.35) 2px, rgba(0,0,0,0.35) 4px)",
          }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[var(--color-accent-green-darker)]/5 via-transparent to-transparent" />

        <div className="relative flex items-center gap-2 border-b border-white/10 bg-black/40 px-4 py-2.5 backdrop-blur-sm lg:px-5 lg:py-3">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          </div>
          <span className="ml-2 font-mono text-[11px] text-white/45 sm:text-xs lg:text-sm">
            fernando.ts
          </span>
        </div>

        <div
          className={cn(
            "relative min-w-0 w-full overflow-y-visible overscroll-x-contain [-webkit-overflow-scrolling:touch]",
            "touch-pan-x px-2 py-5 sm:px-6 sm:py-7 md:px-8 md:py-9",
            "lg:overflow-x-auto lg:touch-auto lg:px-10 lg:py-8 xl:px-12 xl:py-9",
            "max-lg:overflow-x-auto",
          )}
        >
          <pre
            className={cn(
              "pr-1 font-mono text-white/90",
              /* mobile/tablet: fill container so long lines (currentFocus) can wrap */
              "max-lg:block max-lg:w-full max-lg:min-w-0 max-lg:max-w-full text-[8.5px] leading-[1.55]",
              "sm:text-[10px] sm:leading-relaxed md:text-xs md:leading-[1.7]",
              /* wide code block + horizontal pan when lines stay long */
              "lg:inline-block lg:min-w-max lg:w-max lg:max-w-none lg:text-sm lg:leading-[1.75]",
              "xl:text-[15px] xl:leading-[1.8] 2xl:text-[16px]",
            )}
          >
            <code
              className={cn(
                "block",
                /* default: preserve formatting */
                "whitespace-pre",
                /* < lg: allow wrapping for long strings; keeps \\n from JSX */
                "max-lg:whitespace-pre-wrap max-lg:break-words",
              )}
            >
              <span className="text-violet-400">
                const
              </span>{" "}
              <span className="text-sky-400">
                fernando
              </span>
              <span className="text-white/40">
                {" "}
                ={" "}
              </span>
              <span className={punctCls}>{"{"}</span>
              {"\n"}

              {Object.entries(fernandoStack).map(([key, val], i, arr) => (
                <div
                  key={key}
                  className="block min-w-0 max-w-full pl-3 sm:pl-4 lg:pl-7 xl:pl-8"
                >
                  <span className={keyCls}>{key}</span>
                  <span className="text-white/40">
                    :{" "}
                  </span>
                  <CodeValue
                    value={val}
                    depth={1}
                    wideLayout={wideLayout}
                    fieldKey={key}
                  />
                  {i < arr.length - 1 ? (
                    <span className={punctDimCls}>,</span>
                  ) : null}
                </div>
              ))}

              <span className={punctCls}>{"}"}</span>
              <span className="text-white/40">
                ;
              </span>
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
}
