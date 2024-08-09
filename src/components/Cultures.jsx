import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import { GridList, GridListItem } from "./GridList";

const Cultures = () => {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Our culture"
        title="Balance your passion with your passion for life."
        invert
      >
        <p>
          We are a group of like-minded people who share the same core values.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Loyalty" invert>
          Loyalty is our steadfast commitment to those we serve and work alongside. We prioritize long-term relationships, standing by our clients and team members with unwavering dedication, trust, and support through every challenge and success.
          </GridListItem>
          <GridListItem title="Trust" invert>
          Trust is the foundation of all our relationships, built on transparency, reliability, and a commitment to delivering on our promises. We earn trust through consistent excellence and unwavering integrity in everything we do.
          </GridListItem>
          <GridListItem title="Compassion" invert>
          Compassion drives us to understand and empathize with others, guiding our actions with kindness and care. We prioritize the well-being of our clients, colleagues, and community, ensuring that every interaction is rooted in genuine concern and support.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
};

export default Cultures;
