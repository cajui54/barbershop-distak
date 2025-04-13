import { SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import Image from 'next/image';
import React from 'react';
import ButtonLogout from './button-logout';
import { IoIosCut } from 'react-icons/io';
import ShowBookings from './show-bookings';

const SheetContentClient = () => {
  return (
    <SheetContent className="bg-neutral-950">
      <SheetHeader>
        <SheetTitle>Obrigado pela preferência!</SheetTitle>
      </SheetHeader>

      <div className="mx-auto flex h-[100px] w-[90%] items-center gap-x-2 rounded-3xl bg-neutral-900 px-1.5">
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
          <h2 className="flex items-center text-2xl font-bold text-emerald-500">
            Viola
            <IoIosCut className="text-neutral-300" />
          </h2>
          <h3 className="-mt-2 ml-2 text-sm text-neutral-300">Cabeleleiro</h3>
        </div>
      </div>
      <ShowBookings />
      <div className="mx-auto mt-3 flex h-[400px] w-[90%] flex-col justify-end p-2.5">
        <ButtonLogout text="Sair" />
      </div>
    </SheetContent>
  );
};

export default SheetContentClient;
