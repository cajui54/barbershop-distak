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
  title: {
    absolute: "",
    default: "Barbearia Destak | Agendamentos",
    template: "%s | Barbearia Destak.",
  },
  description:
    "Agende horário e serviços na Barbearia Destak com mais de 10 anos de experiência no mercado atendento centenas de clientes.",
  keywords:
    "Barbearia corte de cabelo pezinho alizamento barba barbershop destak",
  icons: {
    icon: ["/favicon-32x32.png"],
    apple: ["/apple-touch-icon.png"],
    shortcut: ["/apple-touch-icon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
