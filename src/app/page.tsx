import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { TheReality } from "@/components/sections/the-reality";
import { TheGap } from "@/components/sections/the-gap";
import { Services } from "@/components/sections/services";
import { WhyExtinction } from "@/components/sections/why-extinction";
import { WhoWeAre } from "@/components/sections/who-we-are";
import { WhoThisIsFor } from "@/components/sections/who-this-is-for";
import { CTA } from "@/components/sections/cta";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/layout/footer";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Separator className="bg-border-custom" />
      <TheReality />
      <Separator className="bg-border-custom" />
      <TheGap />
      <Separator className="bg-border-custom" />
      <Services />
      <Separator className="bg-border-custom" />
      <WhyExtinction />
      <WhoWeAre />
      <WhoThisIsFor />
      <Separator className="bg-border-custom" />
      <CTA />
      <Separator className="bg-border-custom" />
      <Contact />
      <Footer />
    </main>
  );
}
