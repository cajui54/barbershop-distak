'use client';
import { Button } from '@/components/ui/button';
import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { signIn } from 'next-auth/react';

const ButtonLogin = () => {
    const handleLoginWithGoogle = async () => {
        await signIn('google', { callbackUrl: '/client' });
    };
    return (
        <Button
            className="mx-auto mt-[5px] flex w-[80%] items-center justify-center space-x-1 bg-emerald-700 text-white hover:bg-emerald-500"
            onClick={handleLoginWithGoogle}
        >
            <FcGoogle />
            Entra com gmail do google
        </Button>
    );
};

export default ButtonLogin;
