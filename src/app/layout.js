import "./globals.css";
import NavBar from "./components/globals/NavBar";
import SessionWrapper from "./components/auth/SessionWrapper";

export const metadata = {
  title: "Momentum 2025",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <SessionWrapper>
      <body
        className={`antialiased h-screen w-screen bg-[#5A100B]  overscroll-none`}
      >
        <NavBar/>
        {children}
      </body>
      </SessionWrapper>
    </html>
  );
}