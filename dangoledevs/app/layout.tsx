import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dang Ole Devs",
  description: "Folksy mobile games & fun apps by Dang Ole Devs",
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