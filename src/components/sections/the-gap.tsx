export function TheGap() {
  const rows = [
    {
      have: "Armed security and surveillance",
      missing:
        "No one trained to detect behavioral warning signs before an incident",
    },
    {
      have: "Background checks on new hires",
      missing: "No ongoing behavioral monitoring of trusted insiders",
    },
    {
      have: "Crisis response protocols",
      missing: "No early-warning system for grievance escalation",
    },
    {
      have: "Legal counsel and HR",
      missing:
        "No behavioral expertise for high-risk terminations or internal disputes",
    },
  ];

  return (
    <section className="bg-bg-surface py-20 px-6 xl:px-[120px]">
      <div className="max-w-[1440px] mx-auto">
        <span className="font-sans text-xs tracking-[4px] text-gold uppercase">
          THE GAP
        </span>
        <h2 className="font-heading text-[32px] lg:text-[40px] leading-tight text-text-primary mt-4">
          Security Protects the Perimeter. Who&apos;s Reading the Room?
        </h2>

        <div className="mt-12">
          {/* Headers */}
          <div className="grid grid-cols-2 gap-8 pb-4 border-b border-border-custom">
            <span className="font-sans text-[11px] tracking-[3px] text-gold uppercase">
              What You Have
            </span>
            <span className="font-sans text-[11px] tracking-[3px] text-gold uppercase">
              What&apos;s Missing
            </span>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <div
              key={i}
              className="grid grid-cols-2 gap-8 py-4 border-b border-border-custom"
            >
              <p className="font-sans text-sm text-text-secondary leading-relaxed">
                {row.have}
              </p>
              <p className="font-sans text-sm text-text-primary leading-relaxed">
                {row.missing}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
