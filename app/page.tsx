export default function Home() {
  const agents = [
    "Growth",
    "Sales",
    "Support",
    "Commerce",
    "Finance",
    "Compliance",
  ];

  return (
    <main>
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 border-b border-zinc-100 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-indigo-600 to-violet-600 text-white font-black">
              H
            </div>

            <span className="text-3xl font-black tracking-tight">Hype</span>
          </div>

          <div className="hidden gap-8 text-sm text-zinc-600 md:flex">
            <a href="#platform">Platform</a>

            <a href="#agents">Agents</a>

            <a href="#pricing">Pricing</a>
          </div>

          <button className="rounded-xl border px-4 py-2 hover:bg-zinc-50">
            Book Demo
          </button>
        </div>
      </nav>

      {/* HERO */}

      <section className="relative overflow-hidden px-6">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/4 top-0 h-175 w-175 rounded-full bg-indigo-200 blur-3xl opacity-40" />

          <div className="absolute right-1/4 top-20 h-125 w-125 rounded-full bg-violet-200 blur-3xl opacity-40" />
        </div>

        <div className="mx-auto flex min-h-[95vh] max-w-7xl flex-col items-center justify-center text-center">
          <div className="rounded-full border px-4 py-2 text-sm mb-8">
            Introducing Hype OS
          </div>

          <h1 className="max-w-6xl text-7xl font-bold tracking-tight md:text-9xl">
            The Operating System
            <br />
            for Autonomous Businesses.
          </h1>

          <p className="mt-8 max-w-3xl text-xl text-zinc-600">
            One platform that manages growth, sales, support, commerce, finance
            and compliance using AI.
          </p>

          <div className="mt-10 flex gap-4">
            <button className="rounded-xl bg-zinc-950 px-6 py-3 text-white">
              Start Free
            </button>

            <button className="rounded-xl border px-6 py-3">Book Demo</button>
          </div>

          {/* COMMAND CENTER */}

          <div className="mt-20 w-full max-w-6xl">
            <div className="rounded-4xl border border-zinc-200 bg-white p-8 shadow-2xl">
              <div className="flex justify-between border-b pb-4">
                <div>
                  <h3 className="font-semibold">Hype OS</h3>

                  <p className="text-sm text-zinc-500">
                    Business Command Center
                  </p>
                </div>

                <div className="text-green-600">● Operational</div>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-4">
                {[
                  ["Revenue", "$148K"],
                  ["Growth", "+12%"],
                  ["Agents", "6"],
                  ["Tickets", "87"],
                ].map(([a, b]) => (
                  <div key={a} className="rounded-2xl border p-6">
                    <p className="text-sm text-zinc-500">{a}</p>

                    <h4 className="mt-2 text-4xl font-bold">{b}</h4>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-4">
                {["Marketing", "Sales", "Support", "Finance"].map((x) => (
                  <div key={x} className="rounded-2xl bg-zinc-50 p-4">
                    <div className="text-sm text-zinc-500">{x}</div>

                    <div className="mt-3 font-medium">Active</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BUILT FOR */}

      <section className="border-y py-20">
        <div className="text-center">
          <p className="uppercase tracking-[0.3em] text-zinc-500">Built For</p>

          <div className="mt-10 flex flex-wrap justify-center gap-10 text-xl font-semibold">
            <span>E-commerce</span>

            <span>Agencies</span>

            <span>SaaS</span>

            <span>Consultancies</span>

            <span>Professional Services</span>
          </div>
        </div>
      </section>

      {/* PLATFORM */}

      <section id="platform" className="px-6 py-32">
        <div className="mx-auto max-w-4xl text-center">
          <p className="uppercase tracking-[0.3em] text-zinc-500">
            One Operating System
          </p>

          <h2 className="mt-6 text-6xl font-bold">
            Built for modern businesses.
          </h2>

          <p className="mt-8 text-xl text-zinc-600">
            Connect your workflows, tools and business operations through a
            single intelligence layer.
          </p>
        </div>
      </section>

      {/* AGENTS */}

      <section id="agents" className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="text-center text-5xl font-bold">
          Six Autonomous Agents
        </h2>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {agents.map((agent) => (
            <div
              key={agent}
              className="rounded-3xl border p-8 hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-semibold">{agent}</h3>

              <p className="mt-3 text-zinc-600">
                Specialized execution inside Hype OS.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* BUSINESS BRAIN */}

      <section className="bg-zinc-50 px-6 py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-6xl font-bold">
            Every decision makes Hype smarter.
          </h2>

          <p className="mt-8 text-xl text-zinc-600">
            Every interaction compounds into one Business Brain.
          </p>
        </div>
      </section>

      {/* PRICING */}

      <section id="pricing" className="mx-auto max-w-7xl px-6 py-32">
        <h2 className="text-center text-5xl font-bold">Pricing</h2>

        <div className="mt-16 grid gap-6 md:grid-cols-4">
          {["Starter", "Growth", "Full OS", "Sovereign"].map((x) => (
            <div key={x} className="rounded-3xl border p-8 text-center">
              <h3 className="text-2xl font-semibold">{x}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}

      <footer className="border-t py-10">
        <div className="text-center text-zinc-500">© 2026 Hype</div>
      </footer>
    </main>
  );
}
