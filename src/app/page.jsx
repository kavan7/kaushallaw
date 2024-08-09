import Clients from "@/components/Clients";
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import { AuroraBackground, WavyBackground } from "@/components/ui/aurora";
import logoPhobiaDark from "@/images/clients/phobia/logo-dark.svg";

export default function Home() {
  return (
    
    <main className="text-black">

      <Container className="mt-24 sm:mt-32">
       
        <FadeIn className="max-w-3xl">
       
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl  ">
            Experienced legal guidance you can trust!
          </h1>
          <p className="mt-6 text-xl text-dark">
            We are a group of lawyers working at the intersection of law and provide you the best service. We offer
             a range of legal service, all carefully designed to help our clients. Whether you are looking for a small or complete overhaul, we have you covered. 
          </p>
         

        </FadeIn>
     
      </Container>
    
       
      <Clients />
      <Testimonials
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: "Client", logo: logoPhobiaDark }}
      >
        Their team was professional, attentive, and genuinely cared about my case. They explained everything clearly and guided me through each step, leading to a successful resolution. I highly recommend Kaushal Law for their expertise and dedication.
      </Testimonials>
      <Services />
      <ContactSection />
    </main>
   
  );
}
