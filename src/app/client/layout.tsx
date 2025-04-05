import ReduxProvider from '@/_redux/redux-provider';
import Header from '@/app/_components/header';
import ScreenInfoUser from '@/app/_components/screen-info-user';
import { ReactNode } from 'react';
import Footer from '../_components/footer';

export default async function ClientLayout({
    children,
}: Readonly<{ children: ReactNode }>) {
    return (
        <main className="h-full w-full">
            <Header />
            <ScreenInfoUser />
            <ReduxProvider>{children}</ReduxProvider>
            <Footer />
        </main>
    );
}
