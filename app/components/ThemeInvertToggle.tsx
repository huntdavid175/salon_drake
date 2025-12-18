"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "salondrake:theme-inverted";

export function ThemeInvertToggle() {
  const [inverted, setInverted] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    const next = saved === "1";
    setInverted(next);
    if (next) document.documentElement.setAttribute("data-theme", "inverted");
    else document.documentElement.removeAttribute("data-theme");
  }, []);

  const toggle = () => {
    setInverted((prev) => {
      const next = !prev;
      if (next) document.documentElement.setAttribute("data-theme", "inverted");
      else document.documentElement.removeAttribute("data-theme");
      window.localStorage.setItem(STORAGE_KEY, next ? "1" : "0");
      return next;
    });
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={inverted}
      onClick={toggle}
      className="group inline-flex items-center gap-2 rounded-full border border-foreground/25 bg-background px-3 py-2 text-xs font-medium text-foreground transition-colors hover:bg-foreground/10"
      title="Invert theme (temporary)"
    >
      <span className="hidden sm:inline">invert</span>
      <span
        className={[
          "relative h-5 w-10 rounded-full bg-foreground/15 transition-colors",
        ].join(" ")}
      >
        <span
          className={[
            "absolute top-0.5 h-4 w-4 rounded-full bg-foreground shadow-sm transition-transform",
            inverted ? "translate-x-5" : "translate-x-0.5",
          ].join(" ")}
        />
      </span>
    </button>
  );
}


