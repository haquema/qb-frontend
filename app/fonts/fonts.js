import localFont from "next/font/local";
import { Cormorant_Garamond } from "next/font/google"

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant-garamond",
})

const geistSans = localFont({
  src: "./GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export { cormorantGaramond, geistMono, geistSans }