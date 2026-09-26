import Link from "next/link";
import { GridSymbol } from "@/components/brand/grid-symbol";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center py-20">
      <div className="content-container text-center">
        <GridSymbol size={48} variant="app" className="mx-auto mb-6 opacity-80" />
        <p className="mb-2 text-xs font-light uppercase tracking-[0.2em] text-secondary-text">
          404
        </p>
        <h1 className="text-3xl font-extralight text-primary-navy md:text-4xl">
          This connection isn&apos;t on the GRID.
        </h1>
        <p className="mx-auto mt-4 max-w-md font-light text-secondary-text">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-8">
          <Button href="/">Return Home</Button>
        </div>
      </div>
    </section>
  );
}
