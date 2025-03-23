import React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { formatCurrencyBr } from '@/helpers/currency';
import Image from 'next/image';

interface ServiceItemProps {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
}
const ServiceItem = async ({
    name,
    description,
    price,
    imageUrl,
}: ServiceItemProps) => {
    return (
        <Card>
            <div className="flex h-[90px] items-center gap-x-4 px-2">
                <div className="h-[90px] w-[90px] overflow-hidden rounded-2xl bg-neutral-700">
                    <Image src={imageUrl} alt={name} width={150} height={50} />
                </div>
                <div className="grow">
                    <CardHeader>
                        <CardTitle className="text-[18px] font-bold tracking-wider text-emerald-400">
                            {name}
                        </CardTitle>
                        <CardDescription className="-mt-2.5">
                            {description}
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="mt-1.5 flex w-[80%] items-center justify-between">
                        <span className="font-bold">
                            {formatCurrencyBr(price)}
                        </span>
                        <Button className="mt-1.5 ml-3.5 bg-emerald-700 text-sm text-white hover:bg-emerald-600">
                            Selecionar
                        </Button>
                    </CardContent>
                </div>
            </div>
        </Card>
    );
};

export default ServiceItem;
