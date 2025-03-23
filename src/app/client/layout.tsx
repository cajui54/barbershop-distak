import Header from '@/app/_components/header';
import ScreenInfoUser from '@/app/_components/screen-info-user';
import { notFound } from 'next/navigation';
import { ReactNode } from 'react';

export default async function ClientLayout({
    children,
}: Readonly<{ children: ReactNode }>) {
    return (
        <main className="h-full w-full">
            <Header />
            <ScreenInfoUser />
            {children}
        </main>
    );
}
