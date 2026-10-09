"use client";

import Image from "next/image";
import { useEffect, useState, useSyncExternalStore } from "react";
import { cn } from "@/lib/utils";

const HERO_IMAGE = "/brand/hero-connected-ecosystem.png";

function subscribeReducedMotion(onChange: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function Phase1HeroGrid({ className }: { className?: string }) {
  const [visible, setVisible] = useState(false);
  const reduced = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    () => false
  );

  useEffect(() => {
    if (reduced) return;
    const t = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(t);
  }, [reduced]);

  const showHero = reduced || visible;

  return (
    <figure
      className={cn(
        "relative mx-auto w-full max-w-[620px]",
        className
      )}
    >
      <Image
        src={HERO_IMAGE}
        alt="Illustration of a connected digital workplace linking people, applications, workflows, information and security."
        width={903}
        height={845}
        priority
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 55vw, 620px"
        className={cn(
          "h-auto w-full select-none",
          !reduced && "transition-[opacity,transform] duration-700 ease-out",
          showHero ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
        )}
      />
    </figure>
  );
}
