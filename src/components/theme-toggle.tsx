"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { Button } from "@/components/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/dropdown-menu";

function changeTheme(
  func: () => void,
  event: React.MouseEvent<HTMLDivElement, MouseEvent>,
) {
  const x = event.clientX;
  const y = event.clientY;
  const endRadius = Math.hypot(
    Math.max(x, innerWidth - x),
    Math.max(y, innerHeight - y),
  );

  document.documentElement.style.setProperty("--x", x + "px");
  document.documentElement.style.setProperty("--y", y + "px");
  document.documentElement.style.setProperty("--r", endRadius + "px");

  if ((document as any).startViewTransition) {
    // 如果支持就使用document.startViewTransition方法
    (document as any).startViewTransition(() => {
      func();
    });
  } else {
    func();
  }
}

export default function ThemeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>
          <SunIcon className="dark:hidden" />
          <MoonIcon className="hidden dark:inline-block" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={(event) => changeTheme(() => setTheme("light"), event)}
        >
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={(event) => changeTheme(() => setTheme("dark"), event)}
        >
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={(event) => changeTheme(() => setTheme("system"), event)}
        >
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
