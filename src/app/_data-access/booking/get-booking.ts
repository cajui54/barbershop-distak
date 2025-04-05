'use server';

import { db } from '@/_libs/prisma';
import { endOfDay, startOfDay } from 'date-fns';

export const getBookingByDate = async ({ date }: { date: Date }) => {
    return db.booking.findMany({
        where: {
            date: {
                lte: endOfDay(date),
                gte: startOfDay(date),
            },
        },
    });
};
