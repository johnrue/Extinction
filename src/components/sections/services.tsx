import Image from "next/image";
import { Eye, ShieldAlert, Brain } from "lucide-react";

const services = [
  {
    image: "/images/humint-card.png",
    icon: Eye,
    title: "Human Intelligence",
    subtitle: "HUMINT",
    description:
      "Seeing what others miss. Discrete intelligence gathering, high-risk personality profiling, and detection of fixation and grievance escalation patterns across organizational operations.",
  },
  {
    image: "/images/btam-card.png",
    icon: ShieldAlert,
    title: "Behavioral Threat Assessment",
    subtitle: "BTAM",
    description:
      "Intervening before escalation. Strategic threat assessment and training to disrupt behavioral escalation — from grievance detection through crisis prevention and management.",
  },
  {
    image: "/images/behavioral-science-card.png",
    icon: Brain,
    title: "Applied Behavioral Science",
    subtitle: "BEHAVIORAL SCIENCE",
    description:
      "Understanding the people around you. Behavioral assessment, personality dynamics analysis, termination strategy, and leadership training to recognize the subtle cues that dictate response behavior.",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-bg-primary py-20 px-6 xl:px-[120px]">
      <div className="max-w-[1440px] mx-auto">
        <span className="font-sans text-xs tracking-[4px] text-gold uppercase">
          OUR CAPABILITIES
        </span>
        <h2 className="font-heading text-[32px] lg:text-[40px] leading-tight text-text-primary mt-4">
          What We Do
        </h2>
        <p className="font-sans text-base text-text-secondary mt-4 max-w-[700px] leading-relaxed">
          Behavioral intelligence that identifies threats before they escalate,
          reads environments others overlook, and provides the insight to act
          decisively.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-12">
          {services.map((service) => (
            <div
              key={service.subtitle}
              className="border border-border-custom overflow-hidden"
            >
              <div className="relative h-[200px]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
