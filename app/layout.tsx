import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "./navBar";
import Footer from "./footer";


const poppins = Poppins({
  subsets: ['latin'],
  weight:'700',
});

const inter = Poppins({
  subsets: ["latin"],
  weight: "700",
});

export const metadata: Metadata = {
  title: "Aptix",
  description: "Solutions at meow meow door",
};

export default function RootLayout({
  children, 
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme = "business">
      <head>
      <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
        />
      </head>
      <body className={poppins.className}>
        <NavBar />
        {children}
        <Footer />

      </body>
    </html>
  );
}
