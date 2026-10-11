import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PlaySuper Rewards Arcade - In-Game Overlay",
  description: "High-vibrancy 2D Rewards Arcade overlay plugin for games.",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🎟️</text></svg>",
  },
};

export const viewport: Viewport = {
  themeColor: "#0D0E25",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full bg-[#0D0E25]">
      <body className="h-full bg-[#0D0E25] text-white selection:bg-[#FF007F] selection:text-white overflow-hidden select-none">
        {children}
      </body>
    </html>
  );
}
