import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { Fleur_De_Leah, Plus_Jakarta_Sans } from "next/font/google";

const fleur = Fleur_De_Leah({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-logo",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: "400",
  variable: "--main-font",
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${fleur.variable} ${jakarta.variable}`}>
        {children}
        {/* Vercel analytics */}
        <Analytics />
      </body>
    </html>
  );
}
