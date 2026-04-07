"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Eye, ShieldAlert, Brain, Shield, ChevronLeft, ChevronRight } from "lucide-react";

const services = [
  {
    slug: "humint",
    image: "/images/humint-card-new.png",
    icon: Eye,
    title: "Human Intelligence",
    subtitle: "HUMINT",
    description:
      "Seeing what others miss. Discrete intelligence gathering, high-risk personality profiling, and detection of fixation and grievance escalation patterns across organizational operations.",
    caseInsight:
      "A client\u2019s household employee showed no red flags on background checks. Behavioral assessment identified fixation patterns within 72 hours.",
  },
  {
    slug: "btam",
    image: "/images/btam-card-new.png",
    icon: ShieldAlert,
    title: "Behavioral Threat Assessment",
    subtitle: "BTAM",
    description:
      "Intervening before escalation. Strategic threat assessment and training to disrupt behavioral escalation \u2014 from grievance detection through crisis prevention and management.",
    caseInsight:
      "A corporation delayed action on an internal threat because the individual hadn\u2019t made an explicit statement. Our analysis identified three behavioral thresholds already crossed.",
    escalationStages: ["Grievance", "Risk Factors", "Preparation", "Crisis"],
  },
  {
    slug: "behavioral-analysis",
    image: "/images/behavioral-card-new.png",
    icon: Brain,
    title: "Applied Behavioral Science",
    subtitle: "BEHAVIORAL SCIENCE",
    description:
      "Understanding the people around you. Behavioral assessment, personality dynamics analysis, termination strategy, and leadership training to recognize the subtle cues that dictate response behavior.",
    caseInsight:
      "A CEO dismissed early warning signs from a direct report. Our structured behavioral evaluation identified escalation indicators. Intervention prevented a workplace violence incident.",
  },
  {
    slug: "extortion",
    image: "/images/extortion-card.png",
    icon: Shield,
    title: "Extortion & Blackmail Response",
    subtitle: "CRISIS RESPONSE",
    description:
      "Structured, confidential intervention for blackmail, extortion, and coercion situations. Threat verification, communication management, and resolution strategy that neutralizes leverage.",
    caseInsight:
      "A high-profile client received escalating extortion demands tied to private information. Our team verified the threat source, managed all communications, and developed a resolution strategy that neutralized the leverage.",
  },
];

export function Services() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.firstElementChild?.clientWidth ?? 400;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -cardWidth - 24 : cardWidth + 24,
      behavior: "smooth",
    });
  };

  return (
    <section id="services" className="bg-bg-primary py-20">
      <div className="max-w-[1440px] mx-auto px-6 xl:px-[120px]">
        <div className="flex items-end justify-between">
          <div>
            <span className="font-sans text-xs tracking-[4px] text-gold uppercase">
              OUR CAPABILITIES
            </span>
            <h2 className="font-heading text-[32px] lg:text-[40px] leading-tight text-text-primary mt-4">
              What We Do
            </h2>
            <p className="font-sans text-base text-text-secondary mt-4 max-w-[700px] leading-relaxed">
              Behavioral intelligence that identifies threats before they
              escalate, reads environments others overlook, and provides the
              insight to act decisively.
            </p>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              className="border border-border-custom p-2 hover:border-gold/50 transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="text-text-secondary" size={20} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="border border-border-custom p-2 hover:border-gold/50 transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="text-text-secondary" size={20} />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 mt-12 px-6 xl:px-[120px] overflow-x-auto snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {services.map((service) => (
          <Link
            key={service.subtitle}
            href={`/services#${service.slug}`}
            className="w-[calc(85%-12px)] md:w-[calc(50%-12px)] min-w-[280px] md:min-w-[500px] flex-shrink-0 snap-start border border-border-custom overflow-hidden hover:border-gold/30 transition-colors group"
          >
            <div className="relative h-[220px] overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-7">
              <service.icon className="text-gold mb-4" size={28} />
              <h3 className="font-heading text-2xl text-text-primary">
                {service.title}
              </h3>
              <span className="font-sans text-[11px] tracking-[3px] text-gold uppercase mt-1 block">
                {service.subtitle}
              </span>
              <p className="font-sans text-sm text-text-secondary leading-relaxed mt-4">
                {service.description}
              </p>

              {"escalationStages" in service && service.escalationStages && (
                <div className="flex flex-wrap items-center gap-2 mt-5">
                  {service.escalationStages.map((stage, idx) => (
                    <div key={stage} className="flex items-center gap-2">
                      <span className="font-sans text-[10px] tracking-[1.5px] text-gold uppercase px-2.5 py-1 border border-gold/30 rounded-full whitespace-nowrap">
                        {stage}
                      </span>
                      {idx < service.escalationStages.length - 1 && (
                        <span className="text-gold/50 text-xs">&rarr;</span>
                      )}
                    </div>
                  ))}
                </div>
              )}

              <div className="border-l-2 border-gold bg-bg-surface p-4 mt-5">
                <span className="font-sans text-[11px] tracking-[3px] text-gold uppercase">
                  CASE INSIGHT
                </span>
                <p className="font-sans text-[13px] italic text-text-secondary leading-relaxed mt-2">
                  {service.caseInsight}
                </p>
              </div>

              <span className="font-sans text-sm text-gold mt-5 inline-block group-hover:underline">
                Learn More &rarr;
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
