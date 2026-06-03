export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For Hardware Hackers
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Find Compatible Parts for{" "}
          <span className="text-[#58a6ff]">Open-Source Laptops</span>
        </h1>
        <p className="text-lg md:text-xl text-[#8b949e] max-w-2xl mx-auto mb-10">
          Stop guessing which parts fit. Search our curated database, run compatibility checks, and save your builds — all in one place built for DIY laptop enthusiasts and repair shops.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={checkoutUrl}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Start Finding Parts — $29/mo
          </a>
          <a
            href="#faq"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Learn More
          </a>
        </div>
        <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg mx-auto">
          {[
            ["10,000+", "Parts Indexed"],
            ["50+", "Laptop Models"],
            ["99%", "Compat Accuracy"],
          ].map(([stat, label]) => (
            <div key={label} className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
              <div className="text-2xl font-bold text-[#58a6ff]">{stat}</div>
              <div className="text-xs text-[#8b949e] mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center relative">
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#58a6ff] text-[#0d1117] text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
            All Inclusive
          </span>
          <div className="text-5xl font-bold text-white mt-2">
            $29
            <span className="text-lg font-normal text-[#8b949e]">/mo</span>
          </div>
          <p className="text-[#8b949e] mt-2 mb-8">Everything you need to build and repair open-source laptops</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Full parts database access",
              "Compatibility matrix checker",
              "Save unlimited builds",
              "Community sourcing tips",
              "Priority support",
            ].map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>
                {feature}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-4 rounded-lg text-lg transition-colors"
          >
            Get Started Now
          </a>
          <p className="text-xs text-[#8b949e] mt-4">Cancel anytime. No contracts.</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "Which open-source laptop platforms are supported?",
              a: "We cover MNT Reform, Framework, Novena, Librem, and other popular open-hardware laptop platforms, with new models added regularly based on community requests.",
            },
            {
              q: "How does the compatibility checker work?",
              a: "Select your laptop model and the part you want to add. Our compatibility matrix cross-references electrical specs, physical dimensions, and firmware requirements to give you a clear yes/no result with sourcing links.",
            },
            {
              q: "Can I cancel my subscription at any time?",
              a: "Yes. Cancel anytime from your account dashboard. You keep access until the end of your billing period with no hidden fees or penalties.",
            },
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-8 text-[#8b949e] text-sm">
        © {new Date().getFullYear()} Open Laptop Parts Finder. Built for the open hardware community.
      </footer>
    </main>
  );
}
