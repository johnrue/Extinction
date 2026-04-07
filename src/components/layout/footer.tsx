import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-bg-primary border-t border-border-custom py-14 px-6 xl:px-[120px]">
      <div className="max-w-[1440px] mx-auto">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <a href="/">
              <Image src="/images/logo.png" alt="Extinction Behavior Services" width={240} height={84} className="h-[72px] w-auto" />
            </a>
            <p className="font-sans text-sm text-text-muted leading-relaxed mt-4 max-w-[360px]">
              Security protects what you&apos;ve built. Behavioral intelligence
              protects you from what you can&apos;t see coming.
            </p>
          </div>

          {/* Contact */}
          <div>
            <span className="font-sans text-[11px] tracking-[3px] text-gold uppercase">
              Contact
            </span>
            <div className="mt-4 space-y-2">
              <p className="font-sans text-sm text-text-secondary">
                Info@ExtinctionServices.com
              </p>
              <p className="font-sans text-sm text-text-secondary">
                (737) 271-1982
              </p>
              <p className="font-sans text-sm text-text-secondary">
                ExtinctionServices.com
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <span className="font-sans text-[11px] tracking-[3px] text-gold uppercase">
              Services
            </span>
            <div className="mt-4 space-y-2">
              <a
                href="/services#humint"
                className="block font-sans text-sm text-text-secondary hover:text-text-primary transition-colors"
              >
                Human Intelligence
              </a>
              <a
                href="/services#btam"
                className="block font-sans text-sm text-text-secondary hover:text-text-primary transition-colors"
              >
                Behavioral Threat Assessment
              </a>
              <a
                href="/services#behavioral-analysis"
                className="block font-sans text-sm text-text-secondary hover:text-text-primary transition-colors"
              >
                Behavioral Analysis
              </a>
              <a
                href="/services#extortion"
                className="block font-sans text-sm text-text-secondary hover:text-text-primary transition-colors"
              >
                Extortion &amp; Blackmail Response
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border-custom mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-sm text-text-muted">
            &copy; 2026 Extinction Behavior Services. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500" />
            <span className="font-sans text-sm text-text-secondary">
              Secure Connection
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
