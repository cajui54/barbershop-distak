import ReduxProvider from '@/_redux/redux-provider';
import Header from '@/app/_components/header';
import ScreenInfoUser from '@/app/_components/screen-info-user';
import { ReactNode } from 'react';
import Footer from '../_components/footer';
import { authSession } from '../_data-access/auth-session';
import { redirect } from 'next/navigation';
import { isAdmin } from '../_data-access/controle-access/authorizationUser';
import { Sheet } from '@/components/ui/sheet';
import { SheetTrigger } from '@/components/ui/sheet';
import { IoMenu } from 'react-icons/io5';
import SheetContentClient from '../_components/sheet-content-client';

export default async function ClientLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  const session = await authSession();

  if (!session) {
    redirect('/access-not-allowed');
  }
  if (await isAdmin(session.user.email)) {
    redirect('/admin');
  }
  return (
    <main className="h-full w-full">
      <Header>
        <Sheet>
          <SheetTrigger>
            <IoMenu className="text-4xl text-neutral-400" />
          </SheetTrigger>
          <SheetContentClient />
        </Sheet>
      </Header>
      <ScreenInfoUser />
      <ReduxProvider>{children}</ReduxProvider>
      <Footer />
    </main>
  );
}
