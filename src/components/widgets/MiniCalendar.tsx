import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function MiniCalendar() {
  const [cursor, setCursor] = useState(() => new Date());
  const today = new Date();
  const year = cursor.getFullYear();
  const month = cursor.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const monthName = cursor.toLocaleString("en-US", { month: "long", year: "numeric" });

  const cells: (number | null)[] = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  const isToday = (d: number) =>
    d === today.getDate() && month === today.getMonth() && year === today.getFullYear();

  return (
    <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <button
          onClick={() => setCursor(new Date(year, month - 1, 1))}
          className="p-1 rounded-md hover:bg-muted text-muted-foreground"
          aria-label="Previous month"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <h3 className="text-sm font-semibold text-foreground">{monthName}</h3>
        <button
          onClick={() => setCursor(new Date(year, month + 1, 1))}
          className="p-1 rounded-md hover:bg-muted text-muted-foreground"
          aria-label="Next month"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center text-xs text-muted-foreground mb-1">
        {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
          <div key={i} className="py-1 font-medium">{d}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1 text-center text-sm">
        {cells.map((d, i) => (
          <div
            key={i}
            className={`py-1.5 rounded-md ${
              d === null
                ? ""
                : isToday(d)
                ? "bg-primary text-primary-foreground font-semibold"
                : "text-foreground hover:bg-muted cursor-pointer"
            }`}
          >
            {d ?? ""}
          </div>
        ))}
      </div>
    </div>
  );
}