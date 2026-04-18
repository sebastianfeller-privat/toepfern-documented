import type { Metadata } from "next";
import "./globals.css";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";

export const metadata: Metadata = {
  title: "Töpfern mit Namor",
  description: "Kurse, Galerie und mehr",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}