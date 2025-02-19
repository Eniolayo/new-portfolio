import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "IKUJUNI AYODEJI - Frontend developer",
  description:
    "I'm a front-end engineer who specializes in building (and occasionally designing) exceptional digital experiences.",
  keywords: [
    "HTML",
    "CSS",
    "JavaScript",
    "Frontend",
    "front-end",
    "React",
    "Git",
    "Programming",
    "Web Development",
    "Website",
    "Developer",
    "Next JS",
    "Chakra UI",
    "Frontend Web Developer",
    "Frontend Developer",
    "developer",
    "web developer",
    "React Native",
    "Tailwind",
    "HTML5",
    "Software Developer",
    "Frontend Developer",
    "Instructor",
    "Software engineer",
    "Ayodeji",
    "Ikujuni",
    "IKUJUNI",
    "AYODEJI",
    "ayodeji",
    "ikujuni",
    "ayodejiikujuni",
    "ayodeji ikujuni",
    "ikujuni ayodeji",
  ],
  authors: [{ name: "Ayodeji" }],
  creator: "Ayodeji Ikujuni",
  publisher: "Ayodeji Ikujuni",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://ayodejiikujuni.netlify.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "IKUJUNI AYODEJI - Frontend developer",
    description:
      "I'm a front-end engineer who specializes in building (and occasionally designing) exceptional digital experiences.",
    url: "https://ayodejiikujuni.netlify.app/",
    siteName: "Ayodeji Ikujuni Portfolio",
    images: [
      {
        url: "https://res.cloudinary.com/duakn882p/image/upload/v1688475804/AYODEJI_2_epunk3.png",
        width: 436,
        height: 328,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IKUJUNI AYODEJI - Frontend developer",
    description:
      "I'm a front-end engineer who specializes in building (and occasionally designing) exceptional digital experiences.",
    images: [
      "https://res.cloudinary.com/duakn882p/image/upload/v1688475804/AYODEJI_2_epunk3.png",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main>{children}</main>
        <Toaster />
        <SpeedInsights />
      </body>
    </html>
  );
}
