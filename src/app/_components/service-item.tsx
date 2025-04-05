import React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { formatCurrencyBr } from '@/helpers/currency';
import Image from 'next/image';
import ButtonService from '../client/_components/button-service';

export interface ServiceItemProps {
    service: {
        id: string;
        name: string;
        description: string;
        price: number;
        imageUrl: string;
    };
}
const ServiceItem = async ({ service }: ServiceItemProps) => {
    return (
        <Card className="bg-neutral-800">
            <div className="flex h-[90px] items-center gap-x-4 px-2">
                <div className="h-[100px] w-[150px] overflow-hidden rounded-2xl bg-neutral-700">
                    <Image
                        src={service.imageUrl}
                        alt={service.name}
                        width={150}
                        height={150}
                        className="h-full w-full"
                    />
                </div>
                <div className="w-[70%]">
                    <CardHeader>
                        <CardTitle className="text-[18px] font-bold tracking-wider text-emerald-400">
                            {service.name}
                        </CardTitle>
                        <CardDescription className="-mt-2.5">
                            {service.description}
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="mt-1.5 flex items-center justify-between">
                        <span className="font-bold">
                            {formatCurrencyBr(service.price)}
                        </span>
                        <ButtonService service={service} />
                    </CardContent>
                </div>
            </div>
        </Card>
    );
};

export default ServiceItem;
