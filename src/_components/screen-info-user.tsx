import React from 'react';
import { format } from 'date-fns';
const ScreenInfoUser = () => {
    return (
        <div className="mx-auto mt-4 flex h-[100px] w-[90%] items-center justify-between rounded-2xl bg-neutral-900 pl-2.5">
            <div className="h-[90%] w-[60%] bg-red-500"></div>
            <div className="flex h-[90%] w-[30%] flex-col items-center justify-center">
                <span>Março</span>
                <span className="text-3xl text-emerald-400">21</span>
                <span className="text-sm">2025</span>
            </div>
        </div>
    );
};

export default ScreenInfoUser;
