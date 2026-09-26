import { GridSymbol } from "@/components/brand/grid-symbol";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="flex min-h-[50vh] items-center section-y-compact">
      <div className="content-container text-center">
        <GridSymbol size={72} section="light" className="mx-auto mb-6" />
        <p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-secondary-text">
          404
        </p>
        <h1 className="heading-hero text-3xl text-primary-navy md:text-4xl">
          This connection isn&apos;t on the GRID.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-lg text-body-text">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-8">
          <Button href="/" size="lg">
            Return Home
          </Button>
        </div>
      </div>
    </section>
  );
}
