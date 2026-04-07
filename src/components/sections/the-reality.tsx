export function TheReality() {
  const statements = [
    "The most dangerous threat isn't the outsider. It's the insider whose behavior is shifting — and no one is paying attention.",
    "People change. Circumstances change. Loyalty is not permanent. The question isn't if someone will become a concern — it's whether you'll see it before it's too late.",
    "There is a gap between 'nothing has happened' and 'something just happened.' That gap is where we operate.",
  ];

  return (
    <section className="bg-bg-primary py-20 px-6 xl:px-[120px]">
      <div className="max-w-[1440px] mx-auto">
        <span className="font-sans text-xs tracking-[4px] text-gold uppercase">
          THE REALITY
        </span>
        <h2 className="font-heading text-[32px] lg:text-[40px] leading-tight text-text-primary mt-4">
          The Greatest Risk in Any Environment Is Human Behavior
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-12">
          {statements.map((statement, i) => (
            <div
              key={i}
              className="bg-bg-card border-l-2 border-gold p-6"
            >
              <p className="font-sans text-sm text-text-secondary leading-relaxed">
                {statement}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-center">
          {[
            { stat: "72hrs", desc: "Average time our team identifies fixation patterns" },
            { stat: "3x", desc: "Behavioral thresholds crossed before organizations act" },
            { stat: "100%", desc: "Of incidents had observable behavioral precursors" },
          ].map((item) => (
            <div key={item.stat}>
              <span className="font-heading text-[36px] md:text-[48px] text-gold leading-none">
                {item.stat}
              </span>
              <p className="font-sans text-[13px] text-text-secondary mt-2">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
