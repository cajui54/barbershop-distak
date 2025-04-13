'use server';
import { db } from '@/_libs/prisma';
import { signInSession } from '@/app/_actions/session/signin';

export const getBookingByUserId = async () => {
  const { user } = await signInSession();

  return db.booking.findMany({
    where: {
      userId: user.id,
      AND: {
        date: {
          gte: new Date(),
        },
      },
    },
  });
};
