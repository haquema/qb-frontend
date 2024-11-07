import localFont from "next/font/local";


const cormorantGaramond = localFont({
  src: "./CormorantGaramond-Regular.ttf",
  variable: "--font-cormorant-garamond",
  weight: "100 900"
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