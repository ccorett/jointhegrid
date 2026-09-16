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
    <div className={cn("flex flex-wrap items-center gap-2 md:gap-0", className)}>
      {steps.map((step, i) => (
        <div key={step.label} className="flex items-center">
          <div className="flex flex-col items-start md:items-center">
            <span
              className={cn(
                "text-sm font-medium uppercase tracking-wider",
                dark ? "text-secondary-blue" : "text-infrastructure-blue"
              )}
            >
              {step.label}
            </span>
            {step.description && (
              <span
                className={cn(
                  "mt-1 hidden text-xs font-light md:block",
                  dark ? "text-white/50" : "text-secondary-text"
                )}
              >
                {step.description}
              </span>
            )}
          </div>
          {i < steps.length - 1 && (
            <span
              className={cn(
                "mx-3 text-lg font-light md:mx-6",
                dark ? "text-white/30" : "text-border"
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
