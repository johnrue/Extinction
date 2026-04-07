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

  const team = [
    {
      role: "Senior Behavioral Analyst",
      specialties: "Violence Prevention \u2022 Behavioral Conditioning",
      bio: "Decades of field experience in behavioral analysis and violence prevention, specializing in identifying pre-incident indicators and developing intervention strategies for high-risk environments.",
    },
    {
      role: "Threat Assessment Lead",
      specialties: "Threat Assessment \u2022 Crisis Intervention",
      bio: "Expert in multi-disciplinary threat assessment methodologies with extensive background in law enforcement and intelligence-driven risk evaluation.",
    },
    {
      role: "Intelligence Operations Director",
      specialties: "Intelligence Operations \u2022 Executive Protection",
      bio: "Former intelligence professional with deep expertise in HUMINT operations, counter-surveillance, and protective intelligence for high-profile principals.",
    },
    {
      role: "Crisis Response Specialist",
      specialties: "Crisis Consulting \u2022 Applied Behavioral Science",
      bio: "Specializes in real-time crisis response and behavioral conditioning, bridging forensic evaluation with actionable field protocols.",
    },
  ];

  return (
    <section className="bg-bg-primary py-20 px-6 xl:px-[120px]">
      <div className="max-w-[1440px] mx-auto">
        <span className="font-sans text-xs tracking-[4px] text-gold uppercase">
          WHO WE ARE
        </span>

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {team.map((member) => (
            <div
              key={member.role}
              className="bg-bg-card border border-border-custom p-7"
            >
              <h4 className="font-heading text-xl text-text-primary">
                {member.role}
              </h4>
              <p className="font-sans text-[11px] tracking-[2px] text-gold uppercase mt-1">
                {member.specialties}
              </p>
              <p className="font-sans text-sm text-text-secondary leading-relaxed mt-4">
                {member.bio}
              </p>
            </div>
          ))}
        </div>

        <p className="font-sans text-[15px] text-text-secondary leading-relaxed mt-8">
          60+ years combined experience across law enforcement, intelligence,
          behavioral science, forensic evaluation, and crisis management.
        </p>

        <blockquote className="border-l-2 border-gold pl-6 mt-6">
          <p className="font-heading text-lg italic text-text-primary leading-relaxed">
            &ldquo;Our team includes professionals whose operational roles
            require the same level of discretion we bring to every client
            engagement. The fact that we protect our own people the way we
            protect yours is not a limitation — it is a demonstration of our
            standards.&rdquo;
          </p>
        </blockquote>
      </div>
    </section>
  );
}
