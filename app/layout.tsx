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
  icons: {
    icon: [
      {
        url: "/my-logo.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/my-logo2.png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
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
         from-zinc-800 via-zinc-500 to-zinc-200 text-zinc-300`}
      >
        {children}
      </body>
    </html>
  );
}
