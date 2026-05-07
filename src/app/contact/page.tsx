"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FooterMedia from '@/components/sections/footer/FooterMedia';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import TeamCardEleven from '@/components/sections/team/TeamCardEleven';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="smallMedium"
        sizing="largeSmall"
        background="grid"
        cardStyle="glass-depth"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="solid"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",
          id: "/",
        },
        {
          name: "Products",
          id: "/products",
        },
        {
          name: "About",
          id: "/about",
        },
        {
          name: "Contact",
          id: "/contact",
        },
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
          id: "g1",
          groupTitle: "Management",
          members: [
            {
              id: "m1",
              title: "Sarah D.",
              subtitle: "CEO",
              detail: "Leading the vision.",
              imageSrc: "http://img.b2bpic.net/free-photo/front-view-smiley-woman-looking-camera_23-2148317302.jpg",
            },
            {
              id: "m2",
              title: "John T.",
              subtitle: "CTO",
              detail: "Building the tech.",
              imageSrc: "http://img.b2bpic.net/free-photo/young-businessman-with-co-workers-blurred-background_1098-807.jpg",
            },
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/abstract-background-with-colorful-glowing-neon-lights-3d-rendering_181624-21209.jpg",
          imageAlt: "Front view smiley woman looking at camera",
        },
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
          src: "http://img.b2bpic.net/free-photo/front-view-unknown-woman-posing_23-2149417554.jpg",
          alt: "Profile 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/serious-face-young-businesswoman_329181-13478.jpg",
          alt: "Profile 2",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-photo/3d-retro-styled-wireframe-landscape-background_1048-18074.jpg"
      logoText="NEO-LUXE"
      columns={[
        {
          title: "Company",
          items: [
            {
              label: "About",
              href: "/about",
            },
            {
              label: "Contact",
              href: "/contact",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "Tracking",
              href: "/tracking",
            },
            {
              label: "FAQs",
              href: "/faq",
            },
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
