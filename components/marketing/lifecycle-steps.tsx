import { cn } from "@/lib/utils";

type Step = {
  label: string;
  description?: string;
};

type LifecycleStepsProps = {
  steps: Step[];
  className?: string;
  dark?: boolean;
};

export function LifecycleSteps({ steps, className, dark = false }: LifecycleStepsProps) {
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
            <span
              className={cn(
                "text-[15px] font-bold uppercase tracking-wider md:text-base",
                dark ? "text-secondary-blue" : "text-infrastructure-blue"
              )}
            >
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
