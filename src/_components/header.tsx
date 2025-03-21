import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTrigger,
} from '@/components/ui/sheet';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoMenu } from 'react-icons/io5';

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
                <SheetContent>
                    <SheetHeader>Menu da Barbearia</SheetHeader>
                </SheetContent>
            </Sheet>
        </header>
    );
};

export default Header;
