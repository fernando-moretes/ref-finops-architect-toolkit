import { DollarSign, HardDrive, Zap, Tag, FileBarChart, Wallet } from "lucide-react";

const tools = [
  {
    icon: DollarSign,
    title: "EC2 RI vs On-Demand",
    description: "Break-even analysis for 1y / 3y commitments with utilization sweeps.",
  },
  {
    icon: HardDrive,
    title: "S3 Storage Class Optimizer",
    description: "Compare Standard, IA, Glacier and Deep Archive across access patterns.",
  },
  {
    icon: Zap,
    title: "Lambda Cost Estimator",
    description: "Cost per invocation by memory, duration and request volume.",
  },
  {
    icon: Tag,
    title: "Tagging Strategy",
    description: "Generate a tagging baseline aligned to FinOps allocation use-cases.",
  },
  {
    icon: FileBarChart,
    title: "Allocation Report",
    description: "Templates for cost allocation by team, product or environment.",
  },
  {
    icon: Wallet,
    title: "Showback / Chargeback",
    description: "Model patterns for internal billing and accountability.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-16 sm:px-10">
      <section className="mx-auto max-w-5xl">
        <p className="mb-3 text-sm uppercase tracking-widest text-amber-400">
          Portfolio · FinOps · Solution Architecture
        </p>
        <h1 className="text-4xl font-bold sm:text-6xl">FinOps Architect Toolkit</h1>
        <p className="mt-6 max-w-2xl text-lg text-slate-300">
          Practical AWS cost tooling for architects: RI vs On-Demand, S3 class
          optimizers, Lambda estimators and a tagging strategy that makes
          chargeback conversations productive instead of painful.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="https://github.com/fernandofatech/finops-architect-toolkit"
            className="rounded-md bg-amber-500 px-5 py-2.5 text-sm font-semibold text-slate-950 hover:bg-amber-400"
          >
            View on GitHub
          </a>
          <a
            href="https://fernando.moretes.com"
            className="rounded-md border border-slate-600 px-5 py-2.5 text-sm font-semibold text-slate-200 hover:bg-slate-800"
          >
            Portfolio
          </a>
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-5xl">
        <h2 className="text-2xl font-semibold">Included tools</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((t) => (
            <div key={t.title} className="rounded-xl border border-slate-800 bg-slate-900/40 p-5">
              <t.icon className="h-6 w-6 text-amber-400" aria-hidden />
              <h3 className="mt-3 text-base font-semibold">{t.title}</h3>
              <p className="mt-1 text-sm text-slate-400">{t.description}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="mx-auto mt-24 max-w-5xl border-t border-slate-800 pt-8 text-sm text-slate-400">
        <p>
          Built by{" "}
          <a className="text-amber-300 hover:underline" href="https://fernando.moretes.com">
            Fernando Francisco Azevedo
          </a>{" "}
          ·{" "}
          <a
            className="text-amber-300 hover:underline"
            href="https://www.linkedin.com/in/fernando-francisco-azevedo/"
          >
            LinkedIn
          </a>{" "}
          ·{" "}
          <a className="text-amber-300 hover:underline" href="https://github.com/fernandofatech">
            GitHub
          </a>
        </p>
        <p className="mt-2">MIT License · © 2026</p>
      </footer>
    </main>
  );
}
