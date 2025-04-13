import React from 'react';
import { FaArrowsRotate } from 'react-icons/fa6';
import BarIconLoading from './_components/bar-icon-animation';

const LoadingPage = () => {
    return (
        <div className="flex h-full w-full items-center justify-center">
            <div className="mx-auto flex w-[94%] flex-col items-center justify-center gap-y-2 sm:w-[600px]">
                <FaArrowsRotate className="animate-spin text-3xl text-emerald-400" />
                <p>Carregando...</p>
                <BarIconLoading />
            </div>
        </div>
    );
};

export default LoadingPage;
