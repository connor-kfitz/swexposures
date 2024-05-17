import Navbar from "./components/Navbar/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/main.scss"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SWE - Nuclear Medical Shielding",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
