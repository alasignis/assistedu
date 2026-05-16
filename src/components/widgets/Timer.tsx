import { useEffect, useRef, useState } from "react";
import { Play, Pause, RotateCcw } from "lucide-react";

export function Timer() {
  const [secondsLeft, setSecondsLeft] = useState(25 * 60);
  const [initial, setInitial] = useState(25 * 60);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setSecondsLeft((s) => {
          if (s <= 1) {
            setRunning(false);
            return 0;
          }
          return s - 1;
        });
      }, 1000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [running]);

  const mins = Math.floor(secondsLeft / 60);
  const secs = secondsLeft % 60;

  const setPreset = (m: number) => {
    setRunning(false);
    setInitial(m * 60);
    setSecondsLeft(m * 60);
  };

  const reset = () => {
    setRunning(false);
    setSecondsLeft(initial);
  };

  return (
    <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
      <h3 className="text-sm font-semibold text-foreground mb-3">Focus Timer</h3>
      <div className="text-center py-4">
        <div className="text-5xl font-mono font-bold text-foreground tabular-nums">
          {String(mins).padStart(2, "0")}:{String(secs).padStart(2, "0")}
        </div>
      </div>
      <div className="flex justify-center gap-2 mb-3">
        <button
          onClick={() => setRunning((r) => !r)}
          className="flex items-center gap-1.5 px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:opacity-90"
        >
          {running ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          {running ? "Pause" : "Start"}
        </button>
        <button
          onClick={reset}
          className="flex items-center gap-1.5 px-3 py-2 rounded-md bg-secondary text-secondary-foreground text-sm hover:bg-muted"
        >
          <RotateCcw className="h-4 w-4" />
        </button>
      </div>
      <div className="flex justify-center gap-2">
        {[5, 15, 25, 50].map((m) => (
          <button
            key={m}
            onClick={() => setPreset(m)}
            className="px-3 py-1 rounded-md text-xs bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground"
          >
            {m}m
          </button>
        ))}
      </div>
    </div>
  );
}