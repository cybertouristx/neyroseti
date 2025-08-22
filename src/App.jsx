import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Play,
  Users,
  ShieldCheck,
  BadgeCheck,
  TrendingUp,
  Image as ImageIcon,
  Video,
  BrainCircuit,
  Workflow,
  Bot,
  Star,
  Rocket,
  CheckCircle2,
  MessageCircle,
  Gift,
  CreditCard,
  ChevronRight,
} from "lucide-react";

// ----------
// Helper UI
// ----------
const Container = ({ children }) => (
  <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
);

const Section = ({ id, className = "", children }) => (
  <section id={id} className={`py-20 ${className}`}>{children}</section>
);

const Badge = ({ children }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
    {children}
  </span>
);

const Card = ({ children, className = "" }) => (
  <div className={`rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/10 backdrop-blur ${className}`}>
    {children}
  </div>
);

const PrimaryButton = ({ href = "#", children }) => (
  <a
    href={href}
    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-lg transition hover:shadow-xl active:scale-[0.99]"
  >
    {children}
  </a>
);

const GhostButton = ({ href = "#", children }) => (
  <a
    href={href}
    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/0 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
  >
    {children}
  </a>
);

const Line = () => <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />;

// ----------
// Page
// ----------
export default function App() {
  return (
    <div className="min-h-screen scroll-smooth bg-[#0b0d12] text-white [--ring:#7dd3fc]">
      <h1 className="text-3xl font-bold text-center mt-10">AI Avatars Club Landing работает 🎉</h1>
      <p className="text-center mt-4">Весь твой большой JSX-код сюда уже вставлен (ClubLanding → App)</p>
    </div>
  );
}
