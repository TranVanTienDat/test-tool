import "../styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ninzaco - Landing Page",
  description: "Pixel-perfect implementation of Ninzaco design",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
