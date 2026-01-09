import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { Fleur_De_Leah } from "next/font/google";

const fleur = Fleur_De_Leah({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-logo",
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={fleur.variable}>
        {children}
        {/* Vercel analytics */}
        <Analytics />
      </body>
    </html>
  );
}
