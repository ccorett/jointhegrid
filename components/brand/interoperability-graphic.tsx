"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const INTEROP_IMAGE = "/brand/interoperability-ecosystem.png";

export function InteroperabilityGraphic({ className }: { className?: string }) {
  const [visible, setVisible] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const fn = () => setReduced(mq.matches);
    mq.addEventListener("change", fn);
    return () => mq.removeEventListener("change", fn);
  }, []);

  useEffect(() => {
    if (reduced) {
      setVisible(true);
      return;
    }
    const t = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(t);
  }, [reduced]);

  return (
    <figure className={cn("relative mx-auto w-full max-w-[700px] lg:max-w-none", className)}>
      <Image
        src={INTEROP_IMAGE}
        alt="Isometric view of the digital workplace connected to people, identity, applications, information, workflows, and security on the GRID."
        width={1167}
        height={927}
        sizes="(max-width: 1024px) 100vw, 50vw"
        className={cn(
          "h-auto w-full select-none",
          !reduced && "transition-[opacity,transform] duration-700 ease-out",
          visible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
        )}
      />
    </figure>
  );
}
