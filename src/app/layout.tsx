import type { Metadata } from "next";
import { Noto_Serif_Khmer, Noto_Sans_Khmer, Playfair_Display } from "next/font/google";
import "./globals.css";

const notoSerifKhmer = Noto_Serif_Khmer({
  variable: "--font-noto-serif-khmer",
  subsets: ["khmer"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const notoSansKhmer = Noto_Sans_Khmer({
  variable: "--font-noto-sans-khmer",
  subsets: ["khmer"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "សិរីមង្គលអាពាហ៍ពិពាហ៍ | រតនៈ & សុភ័ក្ត្រា",
  description: "លិខិតអញ្ជើញចូលរួមពិធីសិរីមង្គលអាពាហ៍ពិពាហ៍ រតនៈ & សុភ័ក្ត្រា",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="km" className={`scroll-smooth ${notoSerifKhmer.variable} ${notoSansKhmer.variable} ${playfairDisplay.variable}`}>
      <body className="bg-[#071426] text-[#F5F1E8] font-sans antialiased selection:bg-[#C8A96B] selection:text-[#071426] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
