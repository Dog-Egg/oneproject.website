"use client";
import dayjs from "dayjs";
import calender from "dayjs/plugin/calendar";

dayjs.extend(calender);

export default function Calendar({ date }: { date: string }) {
  return dayjs(date).calendar(null, {
    sameDay: "[Today]",
    lastDay: "[Yesterday]",
    lastWeek: "[Last] dddd",
    sameElse: "YYYY-MM-DD",
  });
}
