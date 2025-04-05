'use server';
import { db } from '@/_libs/prisma';
import { BookingProps } from '@/app/client/booking/_components/container-booking';
interface StatusResponse {
    status: 'error' | 'success';
    message: string;
}
export const createBooking = async (
    dataBooking: BookingProps
): Promise<StatusResponse> => {
    const getBookings = await db.booking.findMany({
        where: {
            date: dataBooking.date,
        },
    });

    if (getBookings.length === 0) {
        await db.booking.create({
            data: {
                date: dataBooking.date,
                userId: dataBooking.userId,
                services: {
                    connect: dataBooking.services,
                },
            },
        });
        return {
            status: 'success',
            message: 'Agendamento realizado com sucesso!',
        };
    }
    return {
        status: 'error',
        message:
            'Esse horário, já foi agendado, por favor escolha outro horário!',
    };
};
