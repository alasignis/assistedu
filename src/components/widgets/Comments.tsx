import { useState } from "react";
import { MessageCircle, Send } from "lucide-react";

type Comment = {
  id: string;
  name: string;
  text: string;
  time: string;
};

export function Comments() {
  const [comments, setComments] = useState<Comment[]>([
    {
      id: "1",
      name: "Mia",
      text: "The focus timer plus the writing prompts is a perfect combo for IELTS prep!",
      time: "2h ago",
    },
    {
      id: "2",
      name: "Daniel",
      text: "Love that I can book a tutor session right next to my essay draft.",
      time: "1d ago",
    },
  ]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !text.trim()) return;
    setComments((arr) => [
      { id: crypto.randomUUID(), name: name.trim(), text: text.trim(), time: "just now" },
      ...arr,
    ]);
    setText("");
  };

  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-foreground mb-1 flex items-center gap-2">
        <MessageCircle className="h-5 w-5 text-primary" />
        Community Notes
      </h3>
      <p className="text-sm text-muted-foreground mb-5">
        Share tips, ask questions, leave feedback for fellow learners.
      </p>
      <form onSubmit={submit} className="space-y-2 mb-6">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className="w-full px-3 py-2 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
        />
        <div className="flex gap-2">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Write a comment..."
            rows={2}
            className="flex-1 px-3 py-2 rounded-md border border-input bg-background text-sm resize-none focus:outline-none focus:ring-2 focus:ring-ring"
          />
          <button
            type="submit"
            className="px-4 rounded-md bg-primary text-primary-foreground hover:opacity-90 flex items-center justify-center"
            aria-label="Post comment"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
      </form>
      <ul className="space-y-4">
        {comments.map((c) => (
          <li key={c.id} className="flex gap-3">
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-semibold text-sm shrink-0">
              {c.name[0]?.toUpperCase()}
            </div>
            <div className="flex-1">
              <div className="flex items-baseline gap-2">
                <span className="font-medium text-foreground text-sm">{c.name}</span>
                <span className="text-xs text-muted-foreground">{c.time}</span>
              </div>
              <p className="text-sm text-foreground/80 mt-0.5">{c.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}