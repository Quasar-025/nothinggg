import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MCPverse",
  description: "Your website description",
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
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
