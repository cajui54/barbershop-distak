import { Card } from '@/components/ui/card';
import React, { ReactNode } from 'react';

const CardContainer = ({ children }: { children: ReactNode }) => {
    return (
        <Card className="mx-auto my-4 w-[95%] sm:mx-auto sm:w-[600px]">
            {children}
        </Card>
    );
};

export default CardContainer;
