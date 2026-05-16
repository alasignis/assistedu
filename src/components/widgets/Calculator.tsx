import { useState } from "react";

export function Calculator() {
  const [display, setDisplay] = useState("0");

  const press = (val: string) => {
    setDisplay((prev) => (prev === "0" && val !== "." ? val : prev + val));
  };

  const clear = () => setDisplay("0");

  const evaluate = () => {
    try {
      // eslint-disable-next-line no-new-func
      const result = Function(`"use strict"; return (${display.replace(/[^-()\d/*+.]/g, "")})`)();
      setDisplay(String(result));
    } catch {
      setDisplay("Error");
    }
  };

  const buttons = [
    ["7", "8", "9", "/"],
    ["4", "5", "6", "*"],
    ["1", "2", "3", "-"],
    ["0", ".", "=", "+"],
  ];

  return (
    <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
      <h3 className="text-sm font-semibold text-foreground mb-3">Calculator</h3>
      <div className="bg-muted rounded-lg px-3 py-3 text-right text-xl font-mono text-foreground mb-3 overflow-x-auto whitespace-nowrap">
        {display}
      </div>
      <div className="grid grid-cols-4 gap-2">
        <button
          onClick={clear}
          className="col-span-4 py-2 rounded-md bg-secondary text-secondary-foreground text-sm font-medium hover:bg-muted"
        >
          Clear
        </button>
        {buttons.flat().map((b) => (
          <button
            key={b}
            onClick={() => (b === "=" ? evaluate() : press(b))}
            className={`py-2.5 rounded-md text-sm font-medium transition ${
              b === "="
                ? "bg-primary text-primary-foreground hover:opacity-90"
                : "+-*/".includes(b)
                ? "bg-accent text-accent-foreground hover:opacity-90"
                : "bg-secondary text-secondary-foreground hover:bg-muted"
            }`}
          >
            {b}
          </button>
        ))}
      </div>
    </div>
  );
}