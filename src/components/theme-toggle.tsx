"use client";
import clsx from "clsx";
import { useTheme } from "next-themes";

const sequence = ["light", "dark", "system"];

export default function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  return (
    <button
      className={clsx("nes-btn text-xs", className)}
      onClick={() => {
        let index = sequence.findIndex((e) => e === theme) + 1;
        if (index === sequence.length) {
          index = 0;
        }
        setTheme(sequence[index]);
      }}
    >
      {theme === "light" ? "ON" : theme === "dark" ? "OFF" : "AUTO"}
    </button>
  );
}
