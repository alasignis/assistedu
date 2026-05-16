import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, Sparkles, PenLine, GraduationCap } from "lucide-react";
import { MiniCalendar } from "@/components/widgets/MiniCalendar";
import { Calculator } from "@/components/widgets/Calculator";
import { Timer } from "@/components/widgets/Timer";
import { AppointmentSetter } from "@/components/widgets/AppointmentSetter";
import { Comments } from "@/components/widgets/Comments";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="border-b border-border bg-background/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <PenLine className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-bold text-lg">Inkwell</span>
          </div>
          <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
            <a href="#features" className="hover:text-foreground">Features</a>
            <a href="#workspace" className="hover:text-foreground">Workspace</a>
            <a href="#community" className="hover:text-foreground">Community</a>
          </nav>
          <a
            href="#workspace"
            className="px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:opacity-90"
          >
            Start writing
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-40"
          style={{ background: "var(--gradient-hero)" }}
        />
        <div className="max-w-6xl mx-auto px-6 pt-20 pb-24 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card border border-border text-xs text-muted-foreground mb-6">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Your AI-guided English writing companion
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight max-w-3xl mx-auto text-foreground">
            Write better English,
            <span className="block bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-hero)" }}>
              one focused session at a time.
            </span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Inkwell is an instructional assistant for English learners — combining a writing space,
            study utilities, and a supportive community in one calm workspace.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <a
              href="#workspace"
              className="px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium hover:opacity-90"
              style={{ boxShadow: "var(--shadow-soft)" }}
            >
              Open the workspace
            </a>
            <a
              href="#features"
              className="px-6 py-3 rounded-md border border-border bg-card text-foreground font-medium hover:bg-muted"
            >
              See what's inside
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">Everything you need, in one tab</h2>
          <p className="mt-3 text-muted-foreground">Built for students, tutors, and self-learners.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: BookOpen, title: "Guided writing", desc: "Prompts, structure tips, and on-the-spot grammar feedback." },
            { icon: GraduationCap, title: "Study utilities", desc: "Calendar, calculator, focus timer, and tutor booking — all built in." },
            { icon: Sparkles, title: "Learn together", desc: "Drop questions on the community board and learn from peers." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-border bg-card p-6 hover:shadow-md transition">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-1">{title}</h3>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Workspace */}
      <section id="workspace" className="bg-secondary/40 border-y border-border py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Your writing workspace</h2>
            <p className="mt-3 text-muted-foreground">Plan, focus, and book help — without leaving the page.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            <MiniCalendar />
            <Timer />
            <Calculator />
            <AppointmentSetter />
          </div>
        </div>
      </section>

      {/* Comments */}
      <section id="community" className="max-w-3xl mx-auto px-6 py-20">
        <Comments />
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-primary flex items-center justify-center">
              <PenLine className="h-3 w-3 text-primary-foreground" />
            </div>
            <span>© {new Date().getFullYear()} Inkwell. Built for learners.</span>
          </div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
