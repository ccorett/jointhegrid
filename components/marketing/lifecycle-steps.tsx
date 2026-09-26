import { cn } from "@/lib/utils";

type Step = {
  label: string;
  description?: string;
};

type LifecycleStepsProps = {
  steps: Step[];
  className?: string;
  dark?: boolean;
  /** Full-width evenly distributed lifecycle (Deployment page). */
  layout?: "inline" | "spread";
};

function stepLabelClass(dark: boolean) {
  return cn(
    "font-bold uppercase tracking-[0.12em]",
    dark ? "text-secondary-blue" : "text-infrastructure-blue"
  );
}

function StepNode({ dark }: { dark: boolean }) {
  return (
    <div
      className={cn(
        "relative z-10 size-[22px] shrink-0 border-2",
        dark
          ? "border-secondary-blue bg-primary-navy"
          : "border-infrastructure-blue bg-white"
      )}
      aria-hidden
    />
  );
}

function SpreadLifecycleSteps({
  steps,
  className,
  dark = false,
}: Omit<LifecycleStepsProps, "layout">) {
  const labelClass = stepLabelClass(dark);
  const connector = dark ? "bg-secondary-blue/35" : "bg-infrastructure-blue/35";

  return (
    <div className={cn("w-full", className)}>
      {/* Mobile: vertical progression */}
      <ol className="flex flex-col md:hidden">
        {steps.map((step, i) => (
          <li key={step.label} className="flex gap-4">
            <div className="flex w-[22px] flex-col items-center">
              <StepNode dark={dark} />
              {i < steps.length - 1 && (
                <span
                  className={cn("my-1 w-px min-h-[2.25rem] flex-1", connector)}
                  aria-hidden
                />
              )}
            </div>
            <div className="pb-8 pt-0.5">
              <span className={cn(labelClass, "text-base")}>{step.label}</span>
              {step.description && (
                <p
                  className={cn(
                    "mt-1 text-[15px] leading-snug",
                    dark ? "text-white/60" : "text-secondary-text"
                  )}
                >
                  {step.description}
                </p>
              )}
            </div>
          </li>
        ))}
      </ol>

      {/* Tablet: 3 × 2 */}
      <div className="hidden md:block lg:hidden">
        <ol className="grid grid-cols-3 gap-x-2">
          {steps.slice(0, 3).map((step, i) => (
            <li
              key={step.label}
              className="relative flex flex-col items-center px-1 text-center"
            >
              {i > 0 && (
                <span
                  className={cn(
                    "pointer-events-none absolute right-1/2 top-[10px] h-px w-full",
                    connector
                  )}
                  aria-hidden
                />
              )}
              {i < 2 && (
                <span
                  className={cn(
                    "pointer-events-none absolute left-1/2 top-[10px] h-px w-full",
                    connector
                  )}
                  aria-hidden
                />
              )}
              <StepNode dark={dark} />
              <span className={cn(labelClass, "mt-4 text-[15px] sm:text-base")}>
                {step.label}
              </span>
              {step.description && (
                <p
                  className={cn(
                    "mt-1 max-w-[12rem] text-[14px] leading-snug",
                    dark ? "text-white/60" : "text-secondary-text"
                  )}
                >
                  {step.description}
                </p>
              )}
            </li>
          ))}
        </ol>
        <div className="relative h-12 w-full" aria-hidden>
          <span
            className={cn(
              "absolute left-[83.333%] top-0 h-1/2 w-px -translate-x-1/2",
              connector
            )}
          />
          <span className={cn("absolute left-[16.667%] top-1/2 h-px w-[66.667%]", connector)} />
          <span
            className={cn(
              "absolute left-[16.667%] top-1/2 h-1/2 w-px -translate-x-1/2",
              connector
            )}
          />
        </div>
        <ol className="grid grid-cols-3 gap-x-2">
          {steps.slice(3, 6).map((step, i) => (
            <li
              key={step.label}
              className="relative flex flex-col items-center px-1 text-center"
            >
              {i > 0 && (
                <span
                  className={cn(
                    "pointer-events-none absolute right-1/2 top-[10px] h-px w-full",
                    connector
                  )}
                  aria-hidden
                />
              )}
              {i < 2 && (
                <span
                  className={cn(
                    "pointer-events-none absolute left-1/2 top-[10px] h-px w-full",
                    connector
                  )}
                  aria-hidden
                />
              )}
              <StepNode dark={dark} />
              <span className={cn(labelClass, "mt-4 text-[15px] sm:text-base")}>
                {step.label}
              </span>
              {step.description && (
                <p
                  className={cn(
                    "mt-1 max-w-[12rem] text-[14px] leading-snug",
                    dark ? "text-white/60" : "text-secondary-text"
                  )}
                >
                  {step.description}
                </p>
              )}
            </li>
          ))}
        </ol>
      </div>

      {/* Desktop: six stages across full width */}
      <ol className="hidden lg:grid lg:grid-cols-6 lg:gap-0">
        {steps.map((step, i) => (
          <li
            key={step.label}
            className="relative flex flex-col items-center px-2 text-center xl:px-3"
          >
            {i > 0 && (
              <span
                className={cn(
                  "pointer-events-none absolute right-1/2 top-[10px] h-px w-full",
                  connector
                )}
                aria-hidden
              />
            )}
            {i < steps.length - 1 && (
              <span
                className={cn(
                  "pointer-events-none absolute left-1/2 top-[10px] h-px w-full",
                  connector
                )}
                aria-hidden
              />
            )}
            <StepNode dark={dark} />
            <span className={cn(labelClass, "mt-5 text-base lg:text-[17px] xl:text-lg")}>
              {step.label}
            </span>
            {step.description && (
              <p
                className={cn(
                  "mt-1.5 max-w-[9.5rem] text-[15px] leading-snug",
                  dark ? "text-white/60" : "text-secondary-text"
                )}
              >
                {step.description}
              </p>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}

export function LifecycleSteps({
  steps,
  className,
  dark = false,
  layout = "inline",
}: LifecycleStepsProps) {
  if (layout === "spread") {
    return <SpreadLifecycleSteps steps={steps} className={className} dark={dark} />;
  }

  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-x-2 gap-y-3 md:flex-nowrap md:gap-0",
        className
      )}
    >
      {steps.map((step, i) => (
        <div key={step.label} className="flex items-center">
          <div className="flex flex-col">
            <span className={cn(stepLabelClass(dark), "text-[15px] md:text-base")}>
              {step.label}
            </span>
            {step.description && (
              <span
                className={cn(
                  "mt-0.5 hidden text-[13px] md:block",
                  dark ? "text-white/55" : "text-secondary-text"
                )}
              >
                {step.description}
              </span>
            )}
          </div>
          {i < steps.length - 1 && (
            <span
              className={cn(
                "mx-2 text-xl font-semibold md:mx-4 lg:mx-5",
                dark ? "text-white/35" : "text-infrastructure-blue/50"
              )}
              aria-hidden
            >
              →
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
