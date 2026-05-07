"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import FeatureCardTwentyEight from '@/components/sections/feature/FeatureCardTwentyEight';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';

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

  <div id="blog" data-section="blog">
      <BlogCardOne
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      title="The Future of Retail"
      description="Deep dive into our design philosophy and the materials that define the Neo-Luxe aesthetic."
      blogs={[
        {
          id: "b1",
          category: "Tech",
          title: "Beyond 3D",
          excerpt: "How we integrate WebGL into shopping.",
          imageSrc: "http://img.b2bpic.net/free-vector/portable-electronics-smart-phone-watch-fitness-bracelet-set-isometric-compositions-isolated_1284-31699.jpg",
          authorName: "Elena K",
          authorAvatar: "http://img.b2bpic.net/free-photo/serious-face-young-businesswoman_329181-13478.jpg",
          date: "2025-05-12",
        },
        {
          id: "b2",
          category: "Design",
          title: "Neon Minimalism",
          excerpt: "Curating spaces with light.",
          imageSrc: "http://img.b2bpic.net/free-vector/isometric-fitness-bracelet-infographic-flowchart_1284-40233.jpg",
          authorName: "Marcus R",
          authorAvatar: "http://img.b2bpic.net/free-photo/executive-with-glasses-suit_1098-529.jpg",
          date: "2025-05-15",
        },
      ]}
    />
  </div>

  <div id="feature" data-section="feature">
      <FeatureCardTwentyEight
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      title="Our Values"
      description="Commitments to the future of retail."
      features={[
        {
          id: "v1",
          title: "Speed",
          subtitle: "Performance First",
          category: "Core",
          value: "200ms",
        },
        {
          id: "v2",
          title: "Quality",
          subtitle: "Luxury Standard",
          category: "Core",
          value: "100%",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-photo/3d-retro-styled-wireframe-landscape-background_1048-18074.jpg?_wi=3"
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
