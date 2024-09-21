import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head";

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
  title: "Parvi Cube",
  description: "A hackathon",
  icons: {
    icon: '/public/favicon.ico',  // Add the path to your favicon
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/public/favicon.ico" />
        {/* Add more icons if needed */}
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative bg-black text-gray-50 text-opacity-90 no-s no-scrollbar`}
      >
        {children}
      </body>
    </html>
  );
}
