import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import FadeIn from "./FadeIn";
import StylizedImage from "./StylizedImage";
import imageLaptop from "../images/laptop.jpg";
import List, { ListItem } from "./List";

const Services = () => {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="WE OFFER A RANGE OF LEGAL SERVICES"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
       Our clients appreciate our efficient, results-oriented approach towards all areas in which we work. We commit ourselves to providing sound advice, creative strategy, and effective negotiations.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes=""
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          {/* List item */}
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Legal Consultation & Advice">
            Our firm offers expert legal consultation to guide you through any legal matter. Whether you need advice on contracts, disputes, or personal legal concerns, our attorneys provide clear and actionable guidance to help you make informed decisions.
            </ListItem>
            <ListItem title="Litigation & Representation">
            Our firm provides skilled litigation and representation services, advocating for your interests in court and legal proceedings. Whether facing a dispute or defending your rights, our experienced attorneys are dedicated to achieving the best possible outcome for your case.
            </ListItem>
            <ListItem title="Contracts & Documents">
            Our firm specializes in drafting, reviewing, and negotiating contracts and legal documents. We ensure your agreements are clear, enforceable, and protect your interests, providing peace of mind in all your business and personal dealings.
            </ListItem>
         
          </List>
        </div>
      </Container>
    </>
  );
};

export default Services;
