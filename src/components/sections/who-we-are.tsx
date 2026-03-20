export function WhoWeAre() {
  const advisors = [
    {
      name: "Dr. Andy Young, PhD",
      title: "Crisis Negotiation, Threat Assessment, Published Author",
      bio: "Dr. Young brings decades of experience in crisis negotiation and threat assessment, serving as a leading voice in behavioral intelligence and published authority in the field.",
    },
    {
      name: "Colleen Mancinelli, MA",
      title: "Forensic Evaluation, Violence Risk Assessment",
      bio: "Colleen specializes in forensic behavioral evaluation and violence risk assessment, providing critical analytical insight for high-stakes environments.",
    },
  ];

  const capabilities = [
    "Violence Prevention",
    "Behavioral Analysis",
    "Threat Assessment",
    "Crisis Intervention",
    "Behavioral Conditioning",
    "Executive Protection",
    "Intelligence Operations",
    "Applied Behavioral Science",
  ];

  return (
    <section className="bg-bg-primary py-20 px-6 xl:px-[120px]">
      <div className="max-w-[1440px] mx-auto">
        <span className="font-sans text-xs tracking-[4px] text-gold uppercase">
          WHO WE ARE
        </span>
        <h2 className="font-heading text-[32px] lg:text-[40px] leading-tight text-text-primary mt-4">
          Who We Are
        </h2>

        {/* Advisory Board */}
        <h3 className="font-heading text-[28px] text-text-primary mt-8">
          Advisory Board
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {advisors.map((advisor) => (
            <div
              key={advisor.name}
              className="bg-bg-card border border-border-custom p-7"
            >
              <h4 className="font-heading text-xl text-text-primary">
                {advisor.name}
              </h4>
              <p className="font-sans text-sm text-gold mt-1">
                {advisor.title}
              </p>
              <p className="font-sans text-sm text-text-secondary leading-relaxed mt-4">
                {advisor.bio}
              </p>
            </div>
          ))}
        </div>

        {/* Operational Team */}
        <h3 className="font-heading text-[28px] text-text-primary mt-12">
          Operational Team
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
          {capabilities.map((cap) => (
            <div
              key={cap}
              className="bg-bg-card border border-border-custom px-4 py-2 text-sm text-text-secondary font-sans"
            >
              {cap}
            </div>
          ))}
        </div>

        <p className="font-sans text-[15px] text-text-secondary leading-relaxed mt-6">
          60+ years combined experience across law enforcement, intelligence,
          behavioral science, forensic evaluation, and crisis management.
        </p>

        <blockquote className="border-l-2 border-gold pl-6 mt-6">
          <p className="font-heading text-lg italic text-text-primary leading-relaxed">
            &ldquo;We protect our own people the way we protect yours. Discretion
            isn&apos;t a policy — it&apos;s proof of concept.&rdquo;
          </p>
        </blockquote>
      </div>
    </section>
  );
}
