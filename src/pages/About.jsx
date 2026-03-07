export default function About() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto space-y-14">
        {/* Intro / hero text */}
        <header className="text-center space-y-4">
          <p className="text-amber-500/90 text-xs uppercase tracking-[0.3em] font-medium">
            About The Studio
          </p>
          <h1 className="font-cinzel text-3xl md:text-4xl font-bold text-stone-100">
            B2 Tattoo Studio, Crafted in Detail
          </h1>
          <p className="font-popins text-stone-400 max-w-2xl mx-auto text-sm md:text-base">
            Every line, shade, and highlight is intentional. We blend fine art,
            street culture, and precision technique to create tattoos that age
            beautifully on real skin.
          </p>
        </header>

        {/* Two-column layout: text + profile card */}
        <div className="grid gap-10 md:grid-cols-[2fr,1.4fr] items-start">
          {/* Story */}
          <div className="font-popins space-y-5 text-sm md:text-base text-stone-300 leading-relaxed">
            <p>
              InkArt Studio was born from a simple idea: tattoos should feel
              like art made just for you, not picked from a wall. We take time
              to understand your story, your style, and how the tattoo will sit
              on your body for years to come.
            </p>
            <p>
              From delicate fineline pieces to bold blackwork and full-color
              projects, we approach every session with patience and respect. Our
              studio is appointment-focused, giving us the space to work
              carefully without rushing your design or the healing process.
            </p>
            <p>
              Hygiene is non‑negotiable: hospital-grade sterilization, single‑use
              needles, and premium inks only. You get a relaxed, private
              environment where you can ask questions, share references, and
              feel fully involved in the process.
            </p>
          </div>

          {/* Artist / studio card */}
          <aside className="bg-stone-900/70 border border-stone-800 rounded-2xl p-6 space-y-5">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-amber-400 mb-2">
                Lead Artist
              </p>
              <h2 className="font-cinzel text-xl font-semibold text-stone-100">
                Vikash Chandravanshi
              </h2>
              <p className="font-popins text-xs text-stone-400 mt-1">
                Specialist in realism, fineline and neo‑traditional work.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 text-center text-xs">
              <div className="rounded-xl bg-stone-950/80 border border-stone-800 px-3 py-4">
                <p className="text-amber-400 text-lg font-semibold">4+</p>
                <p className="text-stone-400 mt-1">Years in tattooing</p>
              </div>
              <div className="rounded-xl bg-stone-950/80 border border-stone-800 px-3 py-4">
                <p className="text-amber-400 text-lg font-semibold">200+</p>
                <p className="text-stone-400 mt-1">Custom pieces</p>
              </div>
              <div className="rounded-xl bg-stone-950/80 border border-stone-800 px-3 py-4">
                <p className="text-amber-400 text-lg font-semibold">100%</p>
                <p className="text-stone-400 mt-1">Sterile workflow</p>
              </div>
            </div>

            <div className="text-xs text-stone-400 border-t border-stone-800 pt-4">
              <p>
                “Tattoos should feel like a collaboration. You bring the story,
                we bring the craft.”
              </p>
            </div>
          </aside>
        </div>

        {/* Values row */}
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: 'Consultation First',
              body: 'We sketch, refine, and place the design digitally before we touch needle to skin.',
            },
            {
              title: 'Long-Term Thinking',
              body: 'We design with your future in mind—how it will heal, age, and flow with future tattoos.',
            },
            {
              title: 'Comfort & Care',
              body: 'Breaks, numbing options, aftercare education—your comfort is part of the artwork.',
            },
          ].map((value) => (
            <div
              key={value.title}
              className="font-cinzel rounded-2xl bg-stone-900/60 border border-amber-600/10 px-5 py-6"
            >
              <h3 className=" font-popins text-sm font-semibold text-amber-400 mb-2">
                {value.title}
              </h3>
              <p className="font-popins text-xs md:text-sm text-stone-300">{value.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

