import Header from '@/_components/header';
import ScreenInfoUser from '@/_components/screen-info-user';
import { ReactNode } from 'react';

export default function ClientLayout({
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
