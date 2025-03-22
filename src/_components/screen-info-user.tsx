import React from 'react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const ScreenInfoUser = () => {
    return (
        <div className="mx-auto mt-4 flex h-[100px] w-[90%] items-center justify-between rounded-2xl bg-neutral-900 pl-2.5">
            <div className="flex h-[90%] w-[60%] items-center gap-x-2">
                <Avatar className="flex h-[60px] w-[60px] items-center justify-center">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>Image Profile</AvatarFallback>
                </Avatar>

                <div className="flex h-[98%] w-[75%] flex-col justify-center">
                    <p className="text-sm">Seja bem vindo!</p>
                    <p className="-mt-2 text-2xl font-bold text-emerald-500">
                        Eduardo Santos
                    </p>
                    <p className="-mt-1 text-sm text-neutral-400 italic">
                        edu@gmail.com
                    </p>
                </div>
            </div>
            <div className="flex h-[90%] w-[30%] flex-col items-center justify-center">
                <span className="capitalize">
                    {format(new Date(), 'MMMM', {
                        locale: ptBR,
                    })}
                </span>
                <span className="-mt-2 text-3xl font-bold text-emerald-400">
                    21
                </span>
                <span className="-mt-1 text-sm">2025</span>
            </div>
        </div>
    );
};

export default ScreenInfoUser;
