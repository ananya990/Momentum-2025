import "./globals.css";
import NavBar from "./components/globals/NavBar";
import Image from "next/image";

export const metadata = {
  title: "Momentum 2025",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased h-screen w-screen bg-[#FCE6CE] overscroll-none`}
      >
        {/* <NavBar/>
        {children} */}
      </body>
    </html>
  );
}