import type { Metadata } from "next";
import { Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import { NotificationProvider } from "@/components/notification-provider";

const poppins = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Atta Ur Rehman | Portfolio",
  description:
    "Portfolio of Atta Ur Rehman — software engineer building modern web, mobile, and desktop experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body className={`${poppins.variable} ${geistMono.variable} antialiased`}>
        <NotificationProvider />
        {children}
      </body>
    </html>
  );
}
