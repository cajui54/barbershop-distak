import { Sheet, SheetTrigger } from '@/components/ui/sheet';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoMenu } from 'react-icons/io5';
import SheetContentClient from './sheet-content-client';

const Header = () => {
    return (
        <header className="flex h-16 items-center justify-between border border-neutral-900 px-3 pt-1">
            <Link href="/client">
                <Image
                    src="/logo-destak.ico"
                    alt="logo destak barbearia"
                    width={50}
                    height={50}
                />
            </Link>

            <Sheet>
                <SheetTrigger>
                    <IoMenu className="text-4xl text-neutral-400" />
                </SheetTrigger>
                <SheetContentClient />
            </Sheet>
        </header>
    );
};

export default Header;
