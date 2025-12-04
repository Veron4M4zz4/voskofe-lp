import type { Metadata } from "next";
import { Georama } from "next/font/google";
import "./globals.css";

const georama = Georama({
  subsets: ['latin'],
  // display: 'swap',
  variable: '--font-georama',
})

export const metadata: Metadata = {
  title: "Voskofe",
  description: "LP da voskofe...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${georama.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
