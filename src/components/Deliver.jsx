import React from "react";
import Section from "./Section";
import imageMeeting from "@/images/meeting.jpg";
import List, { ListItem } from "./List";

const Deliver = () => {
  return (
    <Section title="Deliver" image={{ src: imageMeeting, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
        As we approach the execution phase, our team ensures that your legal strategy is seamlessly implemented. While legal proceedings may sometimes require adjustments due to evolving circumstances, our proactive approach allows us to adapt efficiently, ensuring that your interests are always protected.
        </p>
        <p>
        Though we employ a wealth of established legal precedents and strategies, our most intensive work often occurs as deadlines approach, ensuring every detail is meticulously handled. We allocate time to explore innovative legal solutions, which not only address your immediate needs but also anticipate future challenges.
        </p>
        <p>
        We ensure that all critical aspects of your case are thoroughly prepared for launch. Any remaining legal documentation or ancillary tasks are completed during the post-launch phase, under our ongoing advisory services.
        </p>
      </div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <List>
        <ListItem title="Legal Review">
        Our cases are subject to comprehensive legal scrutiny, ensuring airtight arguments and strategies, even if our approach is flexible to meet unexpected developments.
        </ListItem>
        <ListItem title="Compliance & Risk Management">
        To ensure your business operates within the legal framework, we employ top-tier compliance measures and risk assessments tailored to your specific needs.
        </ListItem>
        <ListItem title="Ongoing Support">
        As we retain access to key legal documents and insights, you can rely on us for ongoing legal support, ensuring your business remains legally sound in the long term.
        </ListItem>
      </List>
    </Section>
  );
};

export default Deliver;
