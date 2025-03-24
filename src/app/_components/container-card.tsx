import React from 'react';

const ContainerCard = ({ children }: { children: React.ReactNode }) => {
    return <div className="mx-auto mt-5 w-[95%] pb-6">{children}</div>;
};

export default ContainerCard;
