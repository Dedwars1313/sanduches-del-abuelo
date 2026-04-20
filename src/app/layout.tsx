import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sanduches del Abuelo | Funza, Cundinamarca — Desde 1974",
  description:
    "Más de 50 años de tradición en Funza. Carne a la llanera y jamón artesanal adobado por 12 horas, sin conservantes. Tres generaciones de sabor auténtico. Pide por WhatsApp.",
  keywords: [
    "sanduches",
    "funza",
    "cundinamarca",
    "carne llanera",
    "jamón artesanal",
    "comida tradicional colombiana",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
