import type { Metadata } from "next";
import { Roboto, Lato } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

const lato = Lato({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "ThinqMedia | Expert Social Media & Google Ads Solutions",
  description: "Boost your sales by up to 30% with ThinqMedia's expert media planning, social advertising, and Google Ads strategies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${lato.variable}`}>
        {children}
      </body>
    </html>
  );
}
