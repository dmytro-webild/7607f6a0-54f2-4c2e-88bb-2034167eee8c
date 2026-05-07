import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Roboto } from "next/font/google";



export const metadata: Metadata = {
  title: 'Neo-Luxe | Futuristic Luxury E-commerce',
  description: 'Discover high-end futuristic products with premium design, neon aesthetics, and immersive 3D experiences.',
  openGraph: {
    "title": "Neo-Luxe",
    "description": "Shop the future of luxury.",
    "siteName": "NEO-LUXE"
  },
};

const roboto = Roboto({ variable: "--font-roboto", subsets: ["latin"], weight: ["100", "300", "400", "500", "700", "900"], });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${roboto.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
