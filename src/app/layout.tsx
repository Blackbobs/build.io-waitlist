import type { Metadata } from "next";
// import { Poppins } from "next/font/google";
import "./globals.css";

// const poppins = Poppins({
//   weight: ["400", "500", "600", "700", "800", "900"],
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--font-poppins",
// });
export const metadata: Metadata = {
  title: "build.io waitlist",
  description: "Waitlist Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
