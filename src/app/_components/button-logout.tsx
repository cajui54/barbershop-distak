'use client';
import { Button } from '@/components/ui/button';
import React from 'react';
import { IoMdExit } from 'react-icons/io';
import { signOut } from 'next-auth/react';
import { redirect } from 'next/navigation';
const ButtonLogout = () => {
    const handleLogoutClick = async () => {
        await signOut({ callbackUrl: '/' });
    };
    return (
        <Button
            onClick={handleLogoutClick}
            className="flex bg-emerald-800 text-white hover:bg-emerald-600"
        >
            <IoMdExit className="text-3xl" />
            Sair
        </Button>
    );
};

export default ButtonLogout;
