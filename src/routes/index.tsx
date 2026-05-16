import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { MiniCalendar } from "@/components/widgets/MiniCalendar";
import { Calculator } from "@/components/widgets/Calculator";
import { Timer } from "@/components/widgets/Timer";
import { AppointmentSetter } from "@/components/widgets/AppointmentSetter";
import { Comments } from "@/components/widgets/Comments";
import { CalendarDays, Calculator as CalcIcon, Timer as TimerIcon, CalendarCheck, PenLine, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <FeaturesSection />
    </>
  );
}

function FeaturesSection() {
  return (
    <section className="bg-[#f0f0f0] px-2 md:px-3 pb-6">
      <div className="mx-auto max-w-7xl rounded-[1.5rem] md:rounded-[2rem] bg-gradient-to-br from-[#0f1e3c] to-[#1a3a6e] p-6 md:p-12 text-white">
        <div className="mb-10 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-widest text-white/70 backdrop-blur">
            <PenLine className="h-3.5 w-3.5" /> Utility Suite
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-normal tracking-tight">
            Everything you need, in one stream.
          </h2>
          <p className="mt-3 text-sm md:text-base text-white/60 max-w-2xl mx-auto">
            Plan, calculate, focus, book, and discuss — built-in tools wrapped in a single fluid workspace.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-5">
          <GlassCard icon={<CalendarDays className="h-4 w-4" />} label="Calendar">
            <MiniCalendar />
          </GlassCard>
          <GlassCard icon={<CalcIcon className="h-4 w-4" />} label="Calculator">
            <Calculator />
          </GlassCard>
          <GlassCard icon={<TimerIcon className="h-4 w-4" />} label="Focus Timer">
            <Timer />
          </GlassCard>
          <GlassCard icon={<CalendarCheck className="h-4 w-4" />} label="Appointments">
            <AppointmentSetter />
          </GlassCard>
        </div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-5">
          <GlassCard icon={<PenLine className="h-4 w-4" />} label="Writing Space">
            <WritingSpace />
          </GlassCard>
          <GlassCard icon={<MessageCircle className="h-4 w-4" />} label="Community">
            <Comments />
          </GlassCard>
        </div>
      </div>
    </section>
  );
}

function GlassCard({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl bg-white/10 backdrop-blur-xl border border-white/15 p-3 md:p-4 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
      <div className="flex items-center gap-2 px-1 pb-3 text-xs uppercase tracking-widest text-white/70">
        {icon}
        <span>{label}</span>
      </div>
      <div className="rounded-xl overflow-hidden">{children}</div>
    </div>
  );
}

function WritingSpace() {
  return (
    <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
      <h3 className="text-sm font-semibold text-foreground mb-3">Draft</h3>
      <textarea
        defaultValue=""
        placeholder="Start writing your essay, notes, or ideas..."
        className="w-full min-h-[180px] rounded-md border border-input bg-background p-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-y"
      />
      <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
        <span>Auto-saved locally</span>
        <button className="px-3 py-1.5 rounded-md bg-primary text-primary-foreground text-xs font-medium hover:opacity-90">
          Save draft
        </button>
      </div>
    </div>
  );
}
