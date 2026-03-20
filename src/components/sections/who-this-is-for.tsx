export function WhoThisIsFor() {
  const individuals = [
    "Household staff risk assessment and behavioral monitoring",
    "Stalking, fixation, and obsessive behavior intervention",
    "Trust and loyalty assessment for inner-circle relationships",
    "Manipulation and influence detection",
    "Personal relationship vetting and social circle risk mapping",
    "Succession and family dynamics risk analysis",
  ];

  const organizations = [
    "High-risk termination strategy and lifecycle management",
    "Behavioral threat assessment and management (BTAM)",
    "Post-incident behavioral evaluation and stabilization",
    "Insider risk assessment beyond traditional security",
    "Leadership and executive decision bias analysis",
    "Escalation prevention training and crisis intervention",
  ];

  return (
    <section className="bg-bg-surface py-20 px-6 xl:px-[120px]">
      <div className="max-w-[1440px] mx-auto">
        <span className="font-sans text-xs tracking-[4px] text-gold uppercase">
          WHO THIS IS FOR
        </span>
        <h2 className="font-heading text-[32px] lg:text-[40px] leading-tight text-text-primary mt-4">
          We Serve People Who Need More Than Security
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          {/* Individuals & Families */}
          <div>
            <h3 className="font-heading text-[28px] text-text-primary">
              Individuals &amp; Families
            </h3>
            <ul className="mt-6 space-y-4">
              {individuals.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                  <span className="font-sans text-[15px] text-text-secondary leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Organizations */}
          <div>
            <h3 className="font-heading text-[28px] text-text-primary">
              Organizations
            </h3>
            <ul className="mt-6 space-y-4">
              {organizations.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                  <span className="font-sans text-[15px] text-text-secondary leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
