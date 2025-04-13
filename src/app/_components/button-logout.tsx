'use client';
import { Button } from '@/components/ui/button';
import React from 'react';
import { IoMdExit } from 'react-icons/io';
import { signOut } from 'next-auth/react';
interface ButtonLogoutProps {
  text: string;
  color?: string;
}
const ButtonLogout = ({ text, color }: ButtonLogoutProps) => {
  const handleLogoutClick = async () => {
    await signOut({ callbackUrl: '/' });
  };
  return (
    <Button
      onClick={handleLogoutClick}
      className={`${color ? color : 'bg-emerald-800 text-white hover:bg-emerald-600'}mx-auto flex w-[90%]`}
    >
      <IoMdExit className="text-3xl" />
      {text}
    </Button>
  );
};

export default ButtonLogout;
