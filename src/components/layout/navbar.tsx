"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg-primary/80 backdrop-blur-md border-b border-border-custom"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6 xl:px-[120px] py-5">
        {/* Logo */}
        <a href="/">
          <Image src="/images/logo.png" alt="Extinction Behavior Services" width={240} height={84} className="h-[72px] w-auto" />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="/services"
            className="font-sans text-sm text-text-secondary hover:text-text-primary transition-colors"
          >
            Services
          </a>
          <a
            href="/#about"
            className="font-sans text-sm text-text-secondary hover:text-text-primary transition-colors"
          >
            About
          </a>
          <a
            href="/#contact"
            className="font-sans text-sm text-text-secondary hover:text-text-primary transition-colors"
          >
            Contact
          </a>
          <a
            href="/#contact"
            className="bg-gold text-bg-primary font-sans text-sm font-medium px-6 py-2.5 hover:bg-gold/90 transition-colors"
          >
            Request a Consultation
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-text-primary"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-bg-primary/95 backdrop-blur-md border-t border-border-custom px-6 py-6 flex flex-col gap-5">
          <a
            href="/services"
            className="font-sans text-sm text-text-secondary hover:text-text-primary transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Services
          </a>
          <a
            href="/#about"
            className="font-sans text-sm text-text-secondary hover:text-text-primary transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            About
          </a>
          <a
            href="/#contact"
            className="font-sans text-sm text-text-secondary hover:text-text-primary transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Contact
          </a>
          <a
            href="/#contact"
            className="bg-gold text-bg-primary font-sans text-sm font-medium px-6 py-3 text-center hover:bg-gold/90 transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Request a Consultation
          </a>
        </div>
      )}
    </nav>
  );
}
