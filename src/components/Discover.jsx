import React from "react";
import Section from "./Section";
import imageWhiteboard from "@/images/whiteboard.jpg";
import { TagList, TagListItem } from "./TagList";

const Discover = () => {
  return (
    <Section title="Discover" image={{ src: imageWhiteboard, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
        At Kaushal Law, we prioritize understanding our clients&apos; unique legal challenges and business objectives. By immersing ourselves in their operations, we gain a deep insight into the factors driving their success.
        </p>
        <p>
        Our team of legal professionals collaborates closely with company leadership, carefully reviewing contracts, policies, and compliance measures. Meanwhile, our attorneys diligently assess potential legal risks, ensuring every aspect of the business is thoroughly examined. We also conduct detailed due diligence to uncover any hidden liabilities or opportunities.
        </p>
        <p>
        Upon completing our comprehensive legal review, we give our clients with a strategic plan that includes actionable recommendations and a clear pathway forward, aligned with their goals and budget.
        </p>
      </div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
      
      </h3>
     
    </Section>
  );
};

export default Discover;
