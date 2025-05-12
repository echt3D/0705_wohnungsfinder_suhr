import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import { HeroUIProvider } from "@heroui/react";
import ApartmentProvider from "./components/ApartmentProvider";

export const metadata: Metadata = {
  title: "Wohnungsfinder",
};

const montserrat = Montserrat({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de-CH">
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/qmr1lwd.css" />
      </Head>
      <body className={`text-text_primary ${montserrat.className}`}>
        <HeroUIProvider>
          <ApartmentProvider>{children}</ApartmentProvider>
        </HeroUIProvider>
      </body>
    </html>
  );
}
