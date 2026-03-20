import Image from "next/image";

export function WhyExtinction() {
  return (
    <section id="about" className="bg-bg-primary py-20 px-6 xl:px-[120px]">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left: image */}
        <div className="relative w-full max-w-[480px]">
          <Image
            src="/images/world-map.png"
            alt="Global behavioral intelligence operations"
            width={480}
            height={360}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Right: content */}
        <div>
          <span className="font-sans text-xs tracking-[4px] text-gold uppercase">
            OUR ORIGIN
          </span>
          <h2 className="font-heading text-[32px] lg:text-[40px] leading-tight text-text-primary mt-4">
            Why Extinction Behavior
          </h2>
          <p className="font-heading text-base italic text-text-secondary mt-6 leading-relaxed">
            (n) [ik-stingk-shun] — The process of eliminating a learned behavior
            by removing the reinforcing consequences.
          </p>
          <p className="font-sans text-[15px] text-text-secondary mt-6 leading-relaxed">
            Extinction Behavior Services was founded on a single insight: the
            most critical risks in any environment are human. Our
            multidisciplinary team combines academic behavioral science with
            operational experience in environments where accurately interpreting
            behavior is not theoretical — it is survival.
          </p>
          <blockquote className="border-l-2 border-gold pl-6 mt-8">
            <p className="font-heading text-lg italic text-text-primary leading-relaxed">
              &ldquo;Security protects what you&apos;ve built. Behavioral
              intelligence protects you from what you can&apos;t see
              coming.&rdquo;
            </p>
          </blockquote>

          {/* Differentiators */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
            {[
              { label: "Multidisciplinary", desc: "Not just security, not just psychology \u2014 both integrated" },
              { label: "Operational", desc: "The team has done the work, not just studied it" },
              { label: "Discrete", desc: "Source protection is built into how we operate" },
              { label: "Preventive", desc: "Behavioral intelligence catches problems before they become incidents" },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-3">
                <span className="text-gold mt-1 text-lg leading-none">&bull;</span>
                <div>
                  <span className="font-sans text-sm text-text-primary font-medium">
                    {item.label}
                  </span>
                  <p className="font-sans text-[13px] text-text-secondary mt-0.5">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
