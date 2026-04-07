export function TheGap() {
  const rows = [
    {
      label: "Focus",
      traditional: "Physical access / perimeter / surveillance",
      behavioral: "Behavioral patterns / escalation / motivation",
    },
    {
      label: "Timing",
      traditional: "Responds after an event",
      behavioral: "Identifies signals before escalation",
    },
    {
      label: "Threat Source",
      traditional: "External intruders",
      behavioral: "Insiders with access",
    },
    {
      label: "Detection",
      traditional: "Cameras / alarms / access logs",
      behavioral: "Trained interpretation of human behavior",
    },
    {
      label: "Outcome",
      traditional: "Incident management",
      behavioral: "Incident prevention",
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
          <div className="grid grid-cols-[1fr_1fr] md:grid-cols-[120px_1fr_1fr] gap-4 md:gap-8 pb-4 border-b border-border-custom">
            <span className="hidden md:block" />
            <span className="font-sans text-[11px] tracking-[3px] text-gold uppercase">
              Traditional
            </span>
            <span className="font-sans text-[11px] tracking-[3px] text-gold uppercase">
              Behavioral
            </span>
          </div>

          {/* Rows */}
          {rows.map((row) => (
            <div
              key={row.label}
              className="grid grid-cols-[1fr_1fr] md:grid-cols-[120px_1fr_1fr] gap-4 md:gap-8 py-4 border-b border-border-custom"
            >
              <span className="hidden md:block font-sans text-sm text-gold font-medium">
                {row.label}
              </span>
              <p className="font-sans text-sm text-text-secondary leading-relaxed">
                <span className="text-gold font-medium md:hidden">{row.label}: </span>
                {row.traditional}
              </p>
              <p className="font-sans text-sm text-text-primary leading-relaxed">
                {row.behavioral}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
