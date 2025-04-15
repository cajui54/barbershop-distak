import React from 'react';
import { SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import ButtonLogout from '@/app/_components/button-logout';
const SheetContentAdmin = () => {
  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Administração</SheetTitle>
      </SheetHeader>
      <div className="flex flex-col gap-4 px-4 py-2">
        <ButtonLogout text="Sair" />
      </div>
    </SheetContent>
  );
};

export default SheetContentAdmin;
