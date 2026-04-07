"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Eye, ShieldAlert, Brain, Shield } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const services = [
  {
    number: "01",
    slug: "humint",
    label: "HUMINT",
    title: "Human Intelligence",
    icon: Eye,
    description:
      "Interpreting human behavior, motivations, and influence dynamics within complex organizations. Our HUMINT capability goes beyond traditional surveillance — we read the behavioral landscape that cameras and background checks cannot see.",
    capabilities: [
      "Detection of fixation and grievance escalation patterns",
      "Discrete behavioral intelligence gathering across organizational operations",
      "High-risk personality profiling and detection",
      "Undercover intelligence collection and strategic engagement",
    ],
    image: "/images/humint-full.png",
    bg: "bg-bg-primary",
  },
  {
    number: "02",
    slug: "btam",
    label: "BTAM",
    title: "Behavioral Threat Assessment",
    icon: ShieldAlert,
    description:
      "Strategic intervention and training to disrupt behavioral escalation before a crisis occurs. We detect behavioral risk indicators prior to escalation and provide structured frameworks for response.",
    capabilities: [
      "Termination, management de-escalation, and violence prevention training",
      "Strategic threat assessment and structured intervention frameworks",
      "Behavioral risk indicator detection prior to escalation",
    ],
    escalationStages: ["Grievance", "Risk Factors", "Preparation", "Crisis"],
    image: "/images/btam-full.png",
    bg: "bg-bg-surface",
    reverse: true,
  },
  {
    number: "03",
    slug: "behavioral-analysis",
    label: "BEHAVIORAL SCIENCE",
    title: "Applied Behavioral Analysis",
    icon: Brain,
    description:
      "Behavioral insight to guide executive decision-making. We provide assessment, personality dynamics analysis, and leadership training to recognize the subtle cues that dictate response behavior.",
    capabilities: [
      "Behavioral assessment and personality dynamics analysis",
      "Termination and grievance management strategy",
      "Analysing personality dynamics that influence workplace decision-making",
      "Leadership training to recognize subtle cues that dictate response behavior",
    ],
    image: "/images/behavioral-full.png",
    bg: "bg-bg-primary",
  },
  {
    number: "04",
    slug: "extortion",
    label: "CRISIS RESPONSE",
    title: "Extortion & Blackmail Response",
    icon: Shield,
    description:
      "When someone is being blackmailed, extorted, or coerced, the instinct is to comply or panic. Both responses escalate the situation. Our team provides structured, confidential intervention — assessing the threat, managing communications, and developing a resolution strategy that protects our client without creating additional exposure.",
    capabilities: [
      "Threat verification and source analysis",
      "Controlled communication management",
      "Evidence preservation and documentation",
      "Law enforcement coordination (when appropriate)",
      "Long-term protection and counter-leverage strategy",
    ],
    image: "/images/extortion-full.png",
    bg: "bg-bg-surface",
    reverse: true,
  },
];

function ServiceSection({
  service,
}: {
  service: (typeof services)[number];
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const content = (
    <motion.div
      className="flex-1"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <span className="font-heading text-[64px] font-light text-gold/30 leading-none">
        {service.number}
      </span>
      <span className="font-sans text-xs tracking-[4px] text-gold uppercase block mt-2">
        {service.label}
      </span>
      <h2 className="font-heading text-[40px] lg:text-[48px] leading-tight text-text-primary mt-3">
        {service.title}
      </h2>
      <p className="font-sans text-[15px] text-text-secondary leading-relaxed mt-6 max-w-[540px]">
        {service.description}
      </p>

      {"escalationStages" in service && service.escalationStages && (
        <div className="flex flex-wrap items-center gap-2 mt-6">
          {service.escalationStages.map((stage, idx) => (
            <div key={stage} className="flex items-center gap-2">
              <span className="font-sans text-[10px] tracking-[1.5px] text-gold uppercase px-3 py-1.5 border border-gold/30 rounded-full whitespace-nowrap">
                {stage}
              </span>
              {idx < service.escalationStages.length - 1 && (
                <span className="text-gold/50 text-xs">&rarr;</span>
              )}
            </div>
          ))}
        </div>
      )}

      <ul className="mt-6 space-y-3">
        {service.capabilities.map((cap) => (
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
    </motion.div>
  );

  const image = (
    <motion.div
      className="flex-1 max-w-[500px]"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
    >
      <div className="relative w-full aspect-[5/6] rounded overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover"
        />
      </div>
    </motion.div>
  );

  return (
    <section
      id={service.slug}
      ref={ref}
      className={`${service.bg} min-h-screen snap-start flex items-center px-6 xl:px-[120px]`}
    >
      <div className="max-w-[1440px] mx-auto w-full flex flex-col lg:flex-row items-center gap-16 lg:gap-20 py-20">
        {service.reverse ? (
          <>
            {image}
            {content}
          </>
        ) : (
          <>
            {content}
            {image}
          </>
        )}
      </div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <main className="snap-y snap-mandatory h-screen overflow-y-auto">
      <Navbar />
      {services.map((service) => (
        <ServiceSection key={service.number} service={service} />
      ))}
      <div className="snap-start">
        <Footer />
      </div>
    </main>
  );
}
