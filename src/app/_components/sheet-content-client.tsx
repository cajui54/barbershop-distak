import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { AvatarFallback } from '@radix-ui/react-avatar';
import Image from 'next/image';
import React from 'react';
import ButtonLogout from './button-logout';

const SheetContentClient = () => {
    return (
        <SheetContent className="bg-neutral-950">
            <SheetHeader>
                <SheetTitle>Menu da Barbearia</SheetTitle>
            </SheetHeader>

            <div className="mx-auto flex h-[100px] w-[90%] items-center justify-between gap-x-2 rounded-3xl bg-neutral-900 px-1.5">
                <div className="h-[60px] w-[60px] overflow-hidden rounded-full bg-emerald-950">
                    <Image
                        src="/viola_profile.png"
                        width={90}
                        height={90}
                        alt="Cabeleleiro Viola"
                        className="relative bottom-[30px] object-cover"
                    />
                </div>

                <div className="w-[70%]">
                    <p className="text-[12px] font-bold text-neutral-300">
                        Obrigado pela preferência!
                    </p>
                    <h2 className="text-2xl font-bold text-emerald-500">
                        Viola
                    </h2>
                    <h3 className="-mt-2 text-[10px]">Cabeleleiro</h3>
                </div>
            </div>
            <div className="mx-auto mt-3 flex h-[400px] w-[90%] flex-col justify-end">
                <ButtonLogout />
            </div>
        </SheetContent>
    );
};

export default SheetContentClient;
