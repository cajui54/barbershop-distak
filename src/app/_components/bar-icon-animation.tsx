import React from 'react';
import { IoCut } from 'react-icons/io5';
import { GiBeard, GiHairStrands } from 'react-icons/gi';
import { TbMoustache } from 'react-icons/tb';
const BarIconLoading = () => {
    return (
        <div className="mx-auto flex w-4/5 items-center justify-center gap-x-3.5 text-2xl text-neutral-900 [&>*]:animate-pulse [&>svg]:rounded-full [&>svg]:bg-emerald-400 [&>svg]:p-1">
            <IoCut />
            <GiBeard />
            <TbMoustache />
            <GiHairStrands />
        </div>
    );
};

export default BarIconLoading;
