import "./globals.css";
import { cormorantGaramond, geistMono, geistSans } from "./fonts/fonts";
import { NextUIProvider } from "@nextui-org/react";
import Navigation from "./components/Navbar";

export const metadata = {
  title: "Quranbound",
  description: "A community bound by the Quran",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cormorantGaramond.variable} antialiased`}
      >
        <NextUIProvider>
          <Navigation />
          {children}
        </NextUIProvider>
      </body>
    </html>
  );
}
