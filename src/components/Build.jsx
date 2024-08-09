import React from "react";
import Section from "./Section";
import imageLaptop from "@/images/laptop.jpg";
import Blockquote from "./Blockquote";

const Build = () => {
  return (
    <Section title="Strategy & Execution" image={{ src: imageLaptop, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
        Following our thorough discovery phase, we craft a detailed legal strategy that serves as a roadmap for achieving your business objectives. This roadmap is meticulously designed to navigate the complexities of your legal landscape, ensuring that all potential risks are addressed and opportunities maximized.
        </p>
        <p>
        Each client is paired with a dedicated legal advisor who maintains regular communication, providing clear updates on progress and acting as a liaison between you and our legal team. Our advisors ensure that you are fully informed while allowing our attorneys the space to focus on delivering high-quality legal solutions.
        </p>
        <p>
        Our legal team is committed to timely responses, but we also prioritize thoughtful and strategic communication. This approach allows us to thoroughly consider every aspect of your case, ensuring that when we do reach out, it is with well-considered advice that moves your case forward efficiently
        </p>
      </div>
      
    </Section>
  );
};

export default Build;
