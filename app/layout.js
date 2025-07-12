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
    <html lang="en" className="scroll-smooth ">
      <body
        className={`${outfit.variable} ${ovo.variable} antialiased leading-8 overflow-x-hidden transition-colors duration-300 bg-white text-black dark:bg-black dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
