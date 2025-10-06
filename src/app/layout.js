import "./globals.css";
import NavBar from "./components/globals/NavBar";

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
// bg-[#5A100B]