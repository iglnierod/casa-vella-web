import { Analytics } from "@vercel/analytics/next";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { Fleur_De_Leah } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const fleur = Fleur_De_Leah({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-logo",
});

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const locale = await params;
  const messages = await getMessages();

  return (
    <html lang="es">
      <body className={fleur.variable}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>

        {/* Vercel analytics */}
        <Analytics />
      </body>
    </html>
  );
}
