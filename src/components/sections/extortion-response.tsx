export function ExtortionResponse() {
  const capabilities = [
    "Threat verification and source analysis",
    "Controlled communication management",
    "Evidence preservation and documentation",
    "Law enforcement coordination (when appropriate)",
    "Long-term protection and counter-leverage strategy",
  ];

  return (
    <section className="bg-bg-surface py-20 px-6 xl:px-[120px]">
      <div className="max-w-[1440px] mx-auto">
        <span className="font-sans text-xs tracking-[4px] text-gold uppercase">
          SPECIALIZED SERVICE
        </span>
        <h2 className="font-heading text-[32px] lg:text-[40px] leading-tight text-text-primary mt-4">
          Extortion &amp; Coercion Response
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mt-12">
          {/* Left: description + quote */}
          <div>
            <p className="font-sans text-[15px] text-text-secondary leading-relaxed">
              When someone is being blackmailed, extorted, or coerced, the
              instinct is to comply or panic. Both responses escalate the
              situation. Our team provides structured, confidential intervention
              — assessing the threat, managing communications, and developing a
              resolution strategy that protects our client without creating
              additional exposure.
            </p>
            <blockquote className="border-l-2 border-gold pl-6 mt-8">
              <p className="font-heading text-lg italic text-text-primary leading-relaxed">
                &ldquo;The goal is not just to stop the threat — it is to ensure
                it never has leverage again.&rdquo;
              </p>
            </blockquote>
          </div>

          {/* Right: capabilities + case insight */}
          <div>
            <span className="font-sans text-[11px] tracking-[3px] text-gold uppercase">
              CAPABILITIES
            </span>
            <ul className="mt-4 space-y-3">
              {capabilities.map((cap) => (
                <li key={cap} className="flex items-start gap-3">
                  <span className="text-gold text-lg leading-none mt-0.5">
                    &bull;
                  </span>
                  <span className="font-sans text-sm text-text-secondary leading-relaxed">
                    {cap}
                  </span>
                </li>
              ))}
            </ul>

            <div className="border-l-2 border-gold bg-bg-card p-4 mt-8">
              <span className="font-sans text-[11px] tracking-[3px] text-gold uppercase">
                CASE INSIGHT
              </span>
              <p className="font-sans text-[13px] italic text-text-secondary leading-relaxed mt-2">
                A high-profile client received escalating extortion demands tied
                to private information. Our team verified the threat source,
                managed all communications, and developed a resolution strategy
                that neutralized the leverage — without law enforcement
                involvement or public exposure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
