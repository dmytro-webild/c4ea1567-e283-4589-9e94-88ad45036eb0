import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Manrope } from "next/font/google";



export const metadata: Metadata = {
  title: 'Maria\'s Mexican Fast Food - Authentic Flavors in Goodland, KS',
  description: 'Experience authentic Mexican flavors made fresh daily at Maria\'s Mexican Fast Food in Goodland, Kansas. Serving delicious tacos, burritos, quesadillas, and more.',
  openGraph: {
    "title": "Maria's Mexican Fast Food",
    "description": "Authentic Mexican Flavors Made Fresh Every Day in Goodland, Kansas",
    "url": "https://www.mariasmexicanfastfood.com",
    "siteName": "Maria's Mexican Fast Food",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/taco-with-beef-tomato-cilantro-generative-ai_188544-12135.jpg",
        "alt": "3D floating taco"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Maria's Mexican Fast Food",
    "description": "Authentic Mexican Flavors Made Fresh Every Day in Goodland, Kansas",
    "images": [
      "http://img.b2bpic.net/free-photo/taco-with-beef-tomato-cilantro-generative-ai_188544-12135.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"]
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${manrope.variable} antialiased`}>
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
