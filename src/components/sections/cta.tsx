export function CTA() {
  return (
    <section id="contact" className="bg-bg-surface py-20 px-6 xl:px-[120px] text-center">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="font-heading text-[36px] lg:text-[44px] leading-tight text-text-primary">
          Ready to See What You&apos;ve Been Missing?
        </h2>
        <p className="font-sans text-base text-text-secondary mt-6 max-w-[600px] mx-auto leading-relaxed">
          We don&apos;t predict the future. We read the room before it changes.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <a
            href="#contact"
            className="bg-gold text-bg-primary font-sans text-sm font-medium py-4 px-10 hover:bg-gold/90 transition-colors"
          >
            Request a Confidential Consultation
          </a>
          <a
            href="/services"
            className="border border-gold text-gold font-sans text-sm font-medium py-4 px-10 hover:bg-gold/10 transition-colors"
          >
            Learn More About Our Services
          </a>
        </div>
      </div>
    </section>
  );
}
