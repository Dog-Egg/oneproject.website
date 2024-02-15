"use client";
import { useTheme } from "next-themes";

const sequence = ["light", "dark", "system"];

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <button
      className="nes-btn text-xs md:fixed md:bottom-12 md:right-14"
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
