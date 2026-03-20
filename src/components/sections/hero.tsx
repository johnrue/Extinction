import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-[720px] flex items-end">
      {/* Background image */}
      <Image
        src="/images/hero-bg.png"
        alt="Behavioral intelligence operations"
        fill
        className="object-cover"
        priority
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-primary/60 to-bg-primary" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 xl:px-[120px] pb-20">
        <h1 className="font-heading text-4xl lg:text-[40px] leading-tight text-text-primary max-w-[800px]">
          Security Protects What You&apos;ve Built. Behavioral Intelligence
          Protects You From What You Can&apos;t See Coming.
        </h1>
        <p className="font-sans text-base text-text-secondary mt-6 max-w-[680px] leading-relaxed">
          We combine crisis negotiation, forensic evaluation, intelligence
          operations, and behavioral science to read the room before it
          changes — giving you the insight that traditional security cannot.
        </p>
        <a
          href="#contact"
          className="inline-block mt-8 bg-gold text-bg-primary font-sans text-sm font-medium py-4 px-10 hover:bg-gold/90 transition-colors"
        >
          Request a Confidential Consultation
        </a>
      </div>
    </section>
  );
}
