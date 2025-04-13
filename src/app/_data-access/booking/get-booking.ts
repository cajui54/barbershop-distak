'use server';
import { db } from '@/_libs/prisma';
import { signInSession } from '@/app/_actions/session/signin';
import { endOfDay, startOfDay } from 'date-fns';

export const getBookingByDate = async ({ date }: { date: Date }) => {
  await signInSession();

  return db.booking.findMany({
    where: {
      date: {
        lte: endOfDay(date),
        gte: startOfDay(date),
      },
    },
  });
};
