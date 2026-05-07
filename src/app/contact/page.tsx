"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import TeamCardEleven from '@/components/sections/team/TeamCardEleven';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';

export default function ContactPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="medium"
        sizing="medium"
        background="circleGradient"
        cardStyle="glass-elevated"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="glass"
        headingFontWeight="normal"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarStyleCentered
            navItems={[
              { name: "Home", id: "/" },
              { name: "About", id: "/about" },
              { name: "Contact", id: "/contact" }
            ]}
            brandName="NEO-LUXE"
          />
        </div>

        <div id="team" data-section="team">
          <TeamCardEleven
            animationType="slide-up"
            textboxLayout="default"
            useInvertedBackground={false}
            title="Meet the Minds"
            description="The creative force behind Neo-Luxe technology."
            groups={[
              {
                id: "g1",                groupTitle: "Management",                members: [
                  {
                    id: "m1",                    title: "Sarah D.",                    subtitle: "CEO",                    detail: "Leading the vision.",                    imageSrc: "http://img.b2bpic.net/free-photo/front-view-smiley-woman-looking-camera_23-2148317302.jpg"
                  },
                  {
                    id: "m2",                    title: "John T.",                    subtitle: "CTO",                    detail: "Building the tech.",                    imageSrc: "http://img.b2bpic.net/free-photo/young-businessman-with-co-workers-blurred-background_1098-807.jpg"
                  }
                ]
              }
            ]}
          />
        </div>

        <div id="testimonial" data-section="testimonial">
          <TestimonialCardFifteen
            useInvertedBackground={false}
            testimonial="The best experience I've had with a modern e-commerce platform."
            rating={5}
            author="Jane Doe"
            ratingAnimation="slide-up"
            avatarsAnimation="opacity"
            avatars={[
              {
                src: "http://img.b2bpic.net/free-photo/front-view-unknown-woman-posing_23-2149417554.jpg",                alt: "Profile 1"
              },
              {
                src: "http://img.b2bpic.net/free-photo/serious-face-young-businesswoman_329181-13478.jpg",                alt: "Profile 2"
              }
            ]}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}