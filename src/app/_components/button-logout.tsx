'use client';
import { Button } from '@/components/ui/button';
import React from 'react';
import { IoMdExit } from 'react-icons/io';
import { signOut } from 'next-auth/react';

const ButtonLogout = ({ text }: { text: string }) => {
    const handleLogoutClick = async () => {
        await signOut({ callbackUrl: '/' });
    };
    return (
        <Button
            onClick={handleLogoutClick}
            className="mx-auto flex w-[90%] bg-emerald-800 text-white hover:bg-emerald-600"
        >
            <IoMdExit className="text-3xl" />
            {text}
        </Button>
    );
};

export default ButtonLogout;
