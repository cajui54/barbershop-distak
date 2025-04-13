import React from 'react';
import { authSession } from '../_data-access/auth-session';
import { redirect } from 'next/navigation';
import { isAdmin } from '../_data-access/controle-access/authorizationUser';
import { ChildrenProps } from '@/interface/react-node';
import Header from '../_components/header';
import { IoMenu } from 'react-icons/io5';
import { Sheet, SheetTrigger } from '@/components/ui/sheet';
import SheetContentAdmin from './_components/sheet-content-admin';
import ScreenInfoUser from '../_components/screen-info-user';

export default async function AdminLayout({ children }: ChildrenProps) {
  const session = await authSession();
  if (!session) {
    redirect('/access-not-allowed');
  }
  const isUserAdmin = await isAdmin(session.user.email);
  if (!isUserAdmin) {
    redirect('/access-not-allowed');
  }
  return (
    <main className="h-full w-full">
      <Header>
        <Sheet>
          <SheetTrigger>
            <IoMenu className="text-4xl text-neutral-400" />
          </SheetTrigger>
          <SheetContentAdmin />
        </Sheet>
      </Header>
      <ScreenInfoUser />
      {children}
    </main>
  );
}
