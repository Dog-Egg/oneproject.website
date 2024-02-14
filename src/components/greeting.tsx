"use client";

import { useEffect, useMemo, useState } from "react";
import sample from "lodash/sample";

export default function Greeting({ className }: { className?: string }) {
  const content = useMemo(() => {
    const hours = new Date().getHours();
    if (hours >= 0 && hours < 12) {
      return ", Morning!";
    } else if (hours >= 12 && hours < 18) {
      return ", Good Afternoon!";
    } else {
      return ", Good Everning!";
    }
  }, []);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setTimeout(
      () => {
        if (index < content.length) {
          setIndex(index + 1);
        }
      },
      index == 0 ? 2000 : 80 // 延迟 3000ms，间隔 80ms
    );

    return () => {
      clearInterval(interval);
    };
  }, [index, content]);
  return (
    <span className={className}>
      {useMemo(() => sample(["Hello", "HI", "Hey"]), [])}
      {content.substring(0, index)}
    </span>
  );
}
