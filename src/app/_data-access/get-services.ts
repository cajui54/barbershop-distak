'use server';
import { db } from '@/_libs/prisma';
import { Decimal } from '@prisma/client/runtime/library';
import { signInSession } from '../_actions/session/signin';

export interface ServicesDTO {
  id: string;
  name: string;
  description: string;
  price: Decimal;
  imageUrl: string;
}
export const getServices = async (): Promise<ServicesDTO[]> => {
  await signInSession();
  return db.barbershopService.findMany();
};
