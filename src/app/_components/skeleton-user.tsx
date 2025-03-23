import React from 'react';

const SkeletonUser = () => {
    return (
        <div className="flex h-[90%] w-[60%] items-center gap-x-2">
            <div className="h-[60px] w-[60px] animate-pulse rounded-full bg-neutral-800"></div>
            <div className="h-[98%] w-[75%] justify-center">
                <div className="mt-1.5 h-[15px] w-[80%] animate-pulse rounded-2xl bg-neutral-800"></div>
                <div className="mt-1.5 h-[22px] w-[80%] animate-pulse rounded-2xl bg-neutral-800"></div>
                <div className="mt-1.5 h-[16px] w-[80%] animate-pulse rounded-2xl bg-neutral-800"></div>
            </div>
        </div>
    );
};

export default SkeletonUser;
