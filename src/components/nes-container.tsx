"use client";

import clsx from "clsx";
import { useTheme } from "next-themes";
import { ReactNode, useEffect, useState } from "react";

export default function NesContainer({ children }: { children?: ReactNode }) {
  const { resolvedTheme } = useTheme();
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    setIsDark(resolvedTheme === "dark");
  }, [resolvedTheme]);

  return (
    <div className={clsx("nes-container is-rounded", isDark && "is-dark")}>
      {children}
    </div>
  );
}
