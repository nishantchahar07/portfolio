import { Outfit , Ovo } from "next/font/google";
import "./globals.css";


export const metadata = {
  title: "John Doe - Full Stack Developer",
  description: "Professional portfolio of John Doe, Full Stack Developer specializing in React, Node.js, and modern web technologies.",
  keywords: "Full Stack Developer, React, Node.js, JavaScript, TypeScript, Web Development",
  author: "John Doe",
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#00C6FF",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth ">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#00C6FF" />
      </head>
      <body
        className="antialiased leading-8 overflow-x-hidden transition-colors duration-300 dark"
      >
        {children}
      </body>
    </html>
  );
}
