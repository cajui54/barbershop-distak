import type { Metadata } from 'next';
import { Roboto, Oxygen } from 'next/font/google';
import './globals.css';
import AuthProvider from '@/app/_providers/auth';
import { Toaster } from '@/components/ui/sonner';
import Head from 'next/head';

const oxygen = Oxygen({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-oxygen',
});

const roboto = Roboto({
  subsets: ['cyrillic'],
  weight: ['100', '300', '700', '900'],
  style: ['italic', 'normal'],
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: {
    absolute: '',
    default: 'Barbearia Destak | Agendamentos',
    template: '%s | Barbearia Destak.',
  },
  description:
    'Agende horário e serviços na Barbearia Destak com mais de 10 anos de experiência no mercado atendento centenas de clientes.',
  keywords:
    'Barbearia corte de cabelo pezinho alizamento barba barbershop destak',
  icons: {
    icon: ['/favicon-32x32.png'],
    apple: ['/apple-touch-icon.png'],
    shortcut: ['/apple-touch-icon.png'],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body className={`${oxygen.variable} ${roboto.variable} antialiased`}>
        <AuthProvider>{children}</AuthProvider>

        <Toaster />
      </body>
    </html>
  );
}
