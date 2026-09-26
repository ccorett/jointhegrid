"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const INTEROP_IMAGE = "/brand/interoperability-ecosystem.png";

/** Intrinsic size of interoperability-ecosystem.png (trimmed artboard) */
const IMAGE_WIDTH = 1142;
const IMAGE_HEIGHT = 901;

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
    <figure
      className={cn(
        "relative mx-auto w-full min-w-0 max-w-[720px] lg:mx-0 lg:max-w-none lg:justify-self-end",
        className
      )}
    >
      <Image
        src={INTEROP_IMAGE}
        alt="Isometric view of the digital workplace connected to people, identity, applications, information, workflows, and security on the GRID."
        width={IMAGE_WIDTH}
        height={IMAGE_HEIGHT}
        unoptimized
        sizes="(max-width: 1023px) min(100vw - 3rem, 720px), min(50vw, 720px)"
        className={cn(
          "h-auto w-full max-w-[720px] lg:max-w-[min(100%,720px)]",
          "select-none",
          !reduced && "transition-[opacity,transform] duration-700 ease-out",
          visible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
        )}
      />
    </figure>
  );
}
