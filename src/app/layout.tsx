
import AuthProvider from "@/components/AuthProvider";
import NavBar from "@/components/NavBar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import {AppWrapper} from './context/ContextProvider'
import GAnalytics from "@/components/GAnalytics";


export const metadata: Metadata = {
  title: "Momentum 2025",
  description: "Momentum is a 2-day long festival organized in the month of November. Momentum is the university fest where we provide the student community from various Universities and Colleges with velocity. This year Momentum 2025, the 27th Edition is planned for 6th - 7th November.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`h-screen w-screen bg-[#FCE6CE] overscroll-y-none`}>
        <GAnalytics/>
        <AuthProvider>
          <AppWrapper>
            <NavBar/>
            {children}
          </AppWrapper>
        </AuthProvider>
        <Analytics/>
      </body>
    </html>
  );
}
