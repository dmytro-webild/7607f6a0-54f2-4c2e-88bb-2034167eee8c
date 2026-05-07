"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FeatureCardTwentyThree from '@/components/sections/feature/FeatureCardTwentyThree';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroOverlayTestimonial from '@/components/sections/hero/HeroOverlayTestimonial';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardThree from '@/components/sections/product/ProductCardThree';

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
          name: "Home",          id: "/"},
        {
          name: "Products",          id: "/products"},
        {
          name: "About",          id: "/about"},
        {
          name: "Contact",          id: "/contact"},
      ]}
      brandName="NEO-LUXE"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroOverlayTestimonial
      title="NEO-LUXE FUTURISM"
      description="Experience the next evolution of premium retail. Where cutting-edge 3D design meets unparalleled digital craftsmanship."
      testimonials={[
        {
          name: "Alex Riv",          handle: "@alexriv",          testimonial: "The visuals are beyond anything I've seen. Simply stellar.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-mysterious-woman-posing_23-2149551264.jpg"},
        {
          name: "Sam K",          handle: "@samk",          testimonial: "Fast, sleek, and undeniably premium. My favorite shopping hub.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/confident-businesswoman-holding-papers-office_23-2148452636.jpg"},
        {
          name: "Jordan P",          handle: "@jordanp",          testimonial: "The 3D interactions are flawlessly smooth.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-woman-shooting-with-projector_23-2149424929.jpg"},
        {
          name: "Casey L",          handle: "@caseyl",          testimonial: "A billion-dollar brand experience for sure.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/confident-male-student-wears-spectacles-cap-jacket-has-serious-expression_273609-8692.jpg"},
        {
          name: "Riley M",          handle: "@rileym",          testimonial: "Customer service is as fast as their loading times.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/cheerful-multiracial-business-team_1262-21007.jpg"},
      ]}
      buttons={[
        {
          text: "Explore Collection",          href: "/products"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/abstract-background-with-colorful-glowing-neon-lights-3d-rendering_181624-21209.jpg?_wi=1"
      imageAlt="neon geometric 3d background dark"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/female-employee-black-suit-looks-thoughtful_114579-15853.jpg",          alt: "Female employee in black suit"},
        {
          src: "http://img.b2bpic.net/free-photo/beautiful-woman-standing-wall_23-2148415941.jpg",          alt: "Beautiful woman standing next to wall"},
        {
          src: "http://img.b2bpic.net/free-photo/transgender-person-wearing-yellow-jacket-standing-sideways_23-2148827063.jpg",          alt: "Transgender person in yellow jacket"},
        {
          src: "http://img.b2bpic.net/free-photo/young-girl-white-blazer-sending-kiss_114579-15692.jpg",          alt: "Young girl in white blazer"},
        {
          src: "http://img.b2bpic.net/free-photo/portrait-stylish-woman-posing-fashionable-outfit_23-2149021812.jpg",          alt: "Stylish woman in fashion outfit"},
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyThree
      animationType="scale-rotate"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          id: "f1",          title: "Advanced 3D Modeling",          tags: [
            "Innovation",            "3D"],
          imageSrc: "http://img.b2bpic.net/free-photo/composition-balloons-with-light-dark_23-2148987126.jpg"},
        {
          id: "f2",          title: "Encrypted Security",          tags: [
            "Safe",            "Privacy"],
          imageSrc: "http://img.b2bpic.net/free-photo/cybersecurity-concept-illustration_23-2151883546.jpg"},
        {
          id: "f3",          title: "Premium Durability",          tags: [
            "Luxury",            "Quality"],
          imageSrc: "http://img.b2bpic.net/free-photo/building-with-abstract-lines_1127-107.jpg"},
      ]}
      title="Engineered Perfection"
      description="Our products are built with advanced materials and high-end manufacturing processes for the ultimate experience."
    />
  </div>

  <div id="product-list" data-section="product-list">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      products={[
        {
          id: "p1",          name: "Neon Kinetic",          price: "$1,299",          imageSrc: "http://img.b2bpic.net/free-photo/food-delivery-bag_187299-48705.jpg",          priceButtonProps: { text: "View Details" }
        },
        {
          id: "p2",          name: "Cyborg Strider",          price: "$899",          imageSrc: "http://img.b2bpic.net/free-photo/abstract-background-with-flowing-lines-design_1048-6534.jpg",          priceButtonProps: { text: "View Details" }
        },
        {
          id: "p3",          name: "Flux Wearable",          price: "$499",          imageSrc: "http://img.b2bpic.net/free-vector/realistic-fitness-trackers_52683-36992.jpg",          priceButtonProps: { text: "View Details" }
        },
        {
          id: "p4",          name: "Quantum Gear",          price: "$1,199",          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-photo-camera-still-life_23-2150630671.jpg",          priceButtonProps: { text: "View Details" }
        },
        {
          id: "p5",          name: "Hyper Velo",          price: "$950",          imageSrc: "http://img.b2bpic.net/free-photo/luxury-3d-product-backdrop-black-with-gold-confetti_53876-103094.jpg",          priceButtonProps: { text: "View Details" }
        },
        {
          id: "p6",          name: "Neo Pulse",          price: "$799",          imageSrc: "http://img.b2bpic.net/free-photo/smartwatch-screen-digital-device_53876-96833.jpg",          priceButtonProps: { text: "View Details" }
        },
      ]}
      title="Trending Now"
      description="Discover the latest arrivals in our futuristic collection."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Get In Touch"
      description="Have questions? Our support team is available 24/7."
      inputs={[
        {
          name: "name",          type: "text",          placeholder: "Your Name",          required: true,
        },
        {
          name: "email",          type: "email",          placeholder: "Email Address",          required: true,
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/adult-person-working-home-computer-night_52683-107804.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-photo/3d-retro-styled-wireframe-landscape-background_1048-18074.jpg?_wi=1"
      logoText="NEO-LUXE"
      columns={[
        {
          title: "Company",          items: [
            {
              label: "About",              href: "/about"},
            {
              label: "Contact",              href: "/contact"},
          ],
        },
        {
          title: "Support",          items: [
            {
              label: "Tracking",              href: "/tracking"},
            {
              label: "FAQs",              href: "/faq"},
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
