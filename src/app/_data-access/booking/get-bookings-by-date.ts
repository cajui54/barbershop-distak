'use server';
import { db } from '@/_libs/prisma';
import { BookingProps } from '@/interface/booking';

export const getBookingsByDate = async (
  date: Date
): Promise<BookingProps[]> => {
  return db.booking.findMany({
    where: {
      date: {
        gte: new Date(date.setHours(0, 0, 0, 0)),
        lte: new Date(date.setHours(23, 59, 59, 999)),
      },
    },
    include: {
      user: true,
      services: true,
    },
    orderBy: {
      date: 'asc',
    },
  });
};
