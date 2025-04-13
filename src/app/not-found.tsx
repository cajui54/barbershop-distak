import Link from 'next/link';
import React from 'react';
import { TbError404 } from 'react-icons/tb';
import { VscError } from 'react-icons/vsc';

const NotFoundPage = () => {
    return (
        <div className="flex h-full w-full items-center justify-between">
            <div className="mx-auto flex h-[400px] w-[95%] items-center justify-center gap-x-8 gap-y-5 rounded-2xl bg-neutral-900 text-neutral-200 sm:w-[600px]">
                <TbError404 className="text-[150px] text-emerald-500" />
                <div>
                    <VscError className="mx-auto text-[70px] text-neutral-500" />
                    <h2 className="text-3xl font-bold text-red-500">
                        Ocorreu um error
                    </h2>
                    <h3 className="text-center text-neutral-500">
                        Não foi encontrado!
                    </h3>
                    <Link
                        href="/"
                        className="mx-auto mt-4 block w-4/5 rounded-sm bg-emerald-500 text-center"
                    >
                        Voltar
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;
