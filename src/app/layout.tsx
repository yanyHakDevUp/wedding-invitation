import type { Metadata } from "next";
import { Noto_Serif_Khmer, Kantumruy_Pro, Battambang, Playfair_Display } from "next/font/google";
import "./globals.css";

const notoSerifKhmer = Noto_Serif_Khmer({
  variable: "--font-noto-serif-khmer",
  subsets: ["khmer"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const kantumruyPro = Kantumruy_Pro({
  variable: "--font-kantumruy",
  subsets: ["khmer"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const battambang = Battambang({
  variable: "--font-battambang",
  subsets: ["khmer"],
  weight: ["400", "700"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "សិរីមង្គលអាពាហ៍ពិពាហ៍ | សារៈ & គីមឡែន",
  description: "លិខិតអញ្ជើញចូលរួមពិធីសិរីមង្គលអាពាហ៍ពិពាហ៍ សារៈ & គីមឡែន",
  openGraph: {
    title: "សិរីមង្គលអាពាហ៍ពិពាហ៍ | សារៈ & គីមឡែន",
    description: "លិខិតអញ្ជើញចូលរួមពិធីសិរីមង្គលអាពាហ៍ពិពាហ៍ សារៈ & គីមឡែន",
    images: [
      {
        url: "/img/6.jpg",
        width: 1200,
        height: 630,
        alt: "សារៈ & គីមឡែន អាពាហ៍ពិពាហ៍",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "សិរីមង្គលអាពាហ៍ពិពាហ៍ | សារៈ & គីមឡែន",
    description: "លិខិតអញ្ជើញចូលរួមពិធីសិរីមង្គលអាពាហ៍ពិពាហ៍ សារៈ & គីមឡែន",
    images: ["/img/6.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="km"
      className={`scroll-smooth ${notoSerifKhmer.variable} ${kantumruyPro.variable} ${battambang.variable} ${playfairDisplay.variable}`}
    >
      <body className="bg-[#FAF8F5] text-[#2D2D2D] antialiased selection:bg-[#6B0D18] selection:text-[#FFFFFF] overflow-x-hidden font-kantumruy">
        {children}
      </body>
    </html>
  );
}
