import { BlogPreview } from "@/components/sections/BlogPreview";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Contact } from "@/components/sections/Contact";
import { FAQ } from "@/components/sections/FAQ";
import { Hero } from "@/components/sections/Hero";
import { Industries } from "@/components/sections/Industries";
import { Portfolio } from "@/components/sections/Portfolio";
import { Pricing } from "@/components/sections/Pricing";
import { Process } from "@/components/sections/Process";
import { Products } from "@/components/sections/Products";
import { SeoSuccess } from "@/components/sections/SeoSuccess";
import { Services } from "@/components/sections/Services";
import { TechStack } from "@/components/sections/TechStack";
import { Testimonials } from "@/components/sections/Testimonials";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Services />
      <Products />
      <WhyChooseUs />
      <CaseStudies />
      <Portfolio />
      <TechStack />
      <Process />
      <SeoSuccess />
      <Testimonials />
      <Industries />
      <Pricing />
      <FAQ />
      <BlogPreview />
      <Contact />
    </>
  );
}
