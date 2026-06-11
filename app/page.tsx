export default function Home() {
  return (
    <main className="bg-white text-zinc-950">

      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-zinc-100 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
          <div className="text-3xl font-black tracking-tight">
            Hype
          </div>

          <div className="hidden md:flex gap-8 text-sm text-zinc-600">
            <a href="#agents" className="hover:text-black">
              Agents
            </a>

            <a href="#pricing" className="hover:text-black">
              Pricing
            </a>

            <a href="#" className="hover:text-black">
              Docs
            </a>
          </div>

          <button className="rounded-xl border border-zinc-300 px-4 py-2 hover:bg-zinc-50">
            Book Demo
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden px-6">

        {/* Gradient Mesh */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/4 top-0 h-[600px] w-[600px] rounded-full bg-indigo-200 opacity-40 blur-3xl" />
          <div className="absolute right-1/4 top-20 h-[500px] w-[500px] rounded-full bg-violet-200 opacity-40 blur-3xl" />
          <div className="absolute bottom-0 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-blue-200 opacity-30 blur-3xl" />
        </div>

        <div className="mx-auto flex min-h-[95vh] max-w-7xl flex-col items-center justify-center text-center">

          <div className="mb-8 rounded-full border border-zinc-200 bg-white/80 px-4 py-2 text-sm font-medium backdrop-blur">
            Introducing Hype OS
          </div>

          <h1 className="max-w-6xl text-7xl font-bold tracking-tight leading-none md:text-9xl">
            Run your business
            <br />
            on autopilot.
          </h1>

          <p className="mt-8 max-w-3xl text-xl text-zinc-600">
            Hype is the AI Operating System that manages marketing,
            sales, support, commerce, finance, and compliance
            from one command center.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button className="rounded-xl bg-zinc-950 px-6 py-3 font-medium text-white hover:bg-zinc-800">
              Start Free
            </button>

            <button className="rounded-xl border border-zinc-300 px-6 py-3 hover:bg-white">
              Book Demo
            </button>
          </div>

          {/* Command Center */}
          <div className="mt-20 w-full max-w-6xl">
            <div className="rounded-[32px] border border-zinc-200 bg-white p-8 shadow-2xl">

              <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
                <div>
                  <h3 className="text-lg font-semibold">
                    Hype OS
                  </h3>

                  <p className="text-sm text-zinc-500">
                    Business Command Center
                  </p>
                </div>

                <span className="text-sm text-green-600">
                  ● All Systems Operational
                </span>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-3">

                <div className="rounded-2xl border border-zinc-200 p-6">
                  <p className="text-sm text-zinc-500">
                    Revenue
                  </p>

                  <h4 className="mt-2 text-4xl font-bold">
                    $148K
                  </h4>

                  <p className="mt-2 text-green-600">
                    +12% this month
                  </p>
                </div>

                <div className="rounded-2xl border border-zinc-200 p-6">
                  <p className="text-sm text-zinc-500">
                    Active Agents
                  </p>

                  <h4 className="mt-2 text-4xl font-bold">
                    6
                  </h4>

                  <p className="mt-2 text-zinc-500">
                    All operational
                  </p>
                </div>

                <div className="rounded-2xl border border-zinc-200 p-6">
                  <p className="text-sm text-zinc-500">
                    Opportunities
                  </p>

                  <h4 className="mt-2 text-4xl font-bold">
                    142
                  </h4>

                  <p className="mt-2 text-indigo-600">
                    Available today
                  </p>
                </div>

              </div>

              <div className="mt-8 grid gap-6 md:grid-cols-2">

                <div className="rounded-2xl border border-zinc-200 p-6">
                  <h4 className="font-semibold">
                    Revenue Opportunities
                  </h4>

                  <ul className="mt-4 space-y-3 text-zinc-600">
                    <li>🔥 Recover 142 abandoned carts</li>
                    <li>📈 Increase Product A price by 4%</li>
                    <li>📦 Restock Product B within 5 days</li>
                    <li>🎯 Launch retention campaign</li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-zinc-200 p-6">
                  <h4 className="font-semibold">
                    Agent Activity
                  </h4>

                  <ul className="mt-4 space-y-3 text-zinc-600">
                    <li>✅ Marketing launched 3 campaigns</li>
                    <li>✅ Sales qualified 24 leads</li>
                    <li>✅ Support resolved 87 tickets</li>
                    <li>✅ Finance flagged cash-flow anomaly</li>
                  </ul>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* One Operating System */}
      <section className="px-6 py-32">
        <div className="mx-auto max-w-5xl text-center">

          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            One Operating System
          </p>

          <h2 className="mt-4 text-5xl font-bold tracking-tight md:text-6xl">
            Built for modern businesses.
          </h2>

          <p className="mt-8 text-xl text-zinc-600">
            Connect your store, payments, marketing,
            support, operations, and finance tools.
            Hype coordinates everything through a
            single intelligence layer.
          </p>

        </div>
      </section>

      {/* Agents */}
      <section
        id="agents"
        className="mx-auto max-w-7xl px-6 py-24"
      >
        <h2 className="mb-4 text-center text-5xl font-bold">
          Six Autonomous Agents
        </h2>

        <p className="mb-16 text-center text-zinc-500">
          Specialized systems working together inside Hype OS.
        </p>

        <div className="grid gap-6 md:grid-cols-3">

          {[
            ["Growth", "Creates and optimizes campaigns automatically."],
            ["Sales", "Qualifies leads and books meetings."],
            ["Support", "Resolves customer issues around the clock."],
            ["Commerce", "Manages inventory and recovers revenue."],
            ["Finance", "Monitors cash flow and business health."],
            ["Compliance", "Tracks regulations and audit readiness."],
          ].map(([title, description]) => (
            <div
              key={title}
              className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <h3 className="text-2xl font-semibold">
                {title}
              </h3>

              <p className="mt-3 text-zinc-600">
                {description}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* Business Brain */}
      <section className="bg-zinc-50 px-6 py-32">
        <div className="mx-auto max-w-4xl text-center">

          <h2 className="text-5xl font-bold tracking-tight md:text-6xl">
            Every decision makes Hype smarter.
          </h2>

          <p className="mt-8 text-xl text-zinc-600">
            Every campaign. Every customer interaction.
            Every transaction. Every operational workflow.
            One Business Brain that continuously learns
            how your company operates.
          </p>

        </div>
      </section>

      {/* Pricing */}
      <section
        id="pricing"
        className="mx-auto max-w-7xl px-6 py-32"
      >
        <h2 className="mb-4 text-center text-5xl font-bold">
          Pricing
        </h2>

        <p className="mb-16 text-center text-zinc-500">
          Start small. Expand as your business grows.
        </p>

        <div className="grid gap-6 md:grid-cols-4">

          {[
            ["Starter", "$997"],
            ["Growth", "$4,997"],
            ["Full OS", "$9,997"],
            ["Sovereign", "Custom"],
          ].map(([name, price]) => (
            <div
              key={name}
              className="rounded-3xl border border-zinc-200 p-8 text-center hover:shadow-lg transition-all"
            >
              <h3 className="text-2xl font-semibold">
                {name}
              </h3>

              <p className="mt-4 text-4xl font-bold">
                {price}
              </p>

              <p className="mt-2 text-zinc-500">
                {price === "Custom" ? "Enterprise" : "per month"}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-8 md:flex-row">

          <div className="text-xl font-black">
            Hype
          </div>

          <div className="text-sm text-zinc-500">
            © 2026 Hype. The AI Operating System for Autonomous Businesses.
          </div>

        </div>
      </footer>

    </main>
  );
}
