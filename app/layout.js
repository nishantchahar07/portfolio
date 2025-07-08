import { Outfit , Ovo } from "next/font/google";
import "./globals.css";


const outfit = Outfit({
 
  subsets: ["latin"],
  weight : [ "400", "500", "600", "700"],
});

const  ovo = Ovo({
 weight : [ "400"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio - nishant chahar",
  description: "Portfolio of Nishant Chahar, showcasing projects and skills.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${ovo.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
