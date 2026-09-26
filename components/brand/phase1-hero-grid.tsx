"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const HERO_IMAGE = "/brand/hero-connected-ecosystem.png";

export function Phase1HeroGrid({ className }: { className?: string }) {
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
        "relative mx-auto w-full max-w-[620px]",
        className
      )}
    >
      <Image
        src={HERO_IMAGE}
        alt="The GRID digital workplace and AI integration ecosystem connecting people, applications, identity, workflows, information, and security."
        width={903}
        height={845}
        priority
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 55vw, 620px"
        className={cn(
          "h-auto w-full select-none",
          !reduced && "transition-[opacity,transform] duration-700 ease-out",
          visible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
        )}
      />
    </figure>
  );
}
