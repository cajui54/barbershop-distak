'use server';
import { db } from '@/_libs/prisma';
import { Decimal } from '@prisma/client/runtime/library';

export interface ServicesDTO {
    id: string;
    name: string;
    description: string;
    price: Decimal;
    imageUrl: string;
}
export const getServices = async (): Promise<ServicesDTO[]> => {
    return db.barbershopService.findMany();
};
