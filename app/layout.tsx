import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  display: "swap",
  weight: "variable",
  subsets: ["latin"],
  variable: "--font-archivo",
});

export const metadata: Metadata = {
  title: "Diana Portolio",
  description: "Portfolio showscasing my skills as software developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${archivo.variable} font-sans antialiased bg-gradient-to-b
         from-stone-800 via-stone-600 to-stone-200 text-stone-200`}
      >
        {children}
      </body>
    </html>
  );
}
