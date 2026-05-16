import { useState } from "react";
import { CalendarCheck, Trash2 } from "lucide-react";

type Appointment = {
  id: string;
  title: string;
  date: string;
  time: string;
};

export function AppointmentSetter() {
  const [items, setItems] = useState<Appointment[]>([
    { id: "1", title: "Essay review with tutor", date: "2026-05-20", time: "15:00" },
  ]);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const add = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !date || !time) return;
    setItems((arr) => [...arr, { id: crypto.randomUUID(), title, date, time }]);
    setTitle("");
    setDate("");
    setTime("");
  };

  return (
    <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
      <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
        <CalendarCheck className="h-4 w-4 text-primary" />
        Book a Session
      </h3>
      <form onSubmit={add} className="space-y-2 mb-4">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="What's the session about?"
          className="w-full px-3 py-2 rounded-md border border-input bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
        />
        <div className="grid grid-cols-2 gap-2">
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="px-3 py-2 rounded-md border border-input bg-background text-sm text-foreground"
          />
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="px-3 py-2 rounded-md border border-input bg-background text-sm text-foreground"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:opacity-90"
        >
          Schedule
        </button>
      </form>
      <ul className="space-y-2 max-h-40 overflow-y-auto">
        {items.length === 0 && (
          <li className="text-xs text-muted-foreground text-center py-4">No upcoming sessions</li>
        )}
        {items.map((a) => (
          <li
            key={a.id}
            className="flex items-center justify-between p-2 rounded-md bg-muted text-sm"
          >
            <div>
              <div className="font-medium text-foreground">{a.title}</div>
              <div className="text-xs text-muted-foreground">
                {a.date} · {a.time}
              </div>
            </div>
            <button
              onClick={() => setItems((arr) => arr.filter((x) => x.id !== a.id))}
              className="p-1 text-muted-foreground hover:text-destructive"
              aria-label="Remove"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}