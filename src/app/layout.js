"use client"

import "./globals.css";
import NavBar from "./components/globals/NavBar";
import Image from "next/image";
import { SessionProvider } from "next-auth/react";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased h-screen w-screen bg-[#FCE6CE] overscroll-none`}
      >
        <SessionProvider>
          <NavBar/>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}