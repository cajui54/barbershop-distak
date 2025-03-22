import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
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
            <div className="flex w-[200px] items-center">
                <Link href="/client">
                    <Image
                        src="/logo-destak.ico"
                        alt="logo destak barbearia"
                        width={50}
                        height={50}
                    />
                </Link>
                <div className="flex gap-x-2">
                    <div className="h-[40px] w-[40px] animate-pulse overflow-hidden rounded-full bg-neutral-700">
                        <Link href="/client">
                            <Image
                                src="/viola_profile.png"
                                alt="logo destak barbearia"
                                width={70}
                                height={70}
                                className="relative bottom-5 scale-150 object-cover"
                            />
                        </Link>
                    </div>

                    <div>
                        <p className="text-2xl font-bold text-emerald-400">
                            Viola
                        </p>
                        <p className="-mt-2 ml-1 text-[10px] text-neutral-300">
                            Cabeleleiro
                        </p>
                    </div>
                </div>
            </div>

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
