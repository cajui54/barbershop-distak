import TitlesContainer from '@/app/_components/titles-container';
import { authSession } from '@/app/_data-access/auth-session';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { times } from '@/constants/times';
import { isPast, isToday, set } from 'date-fns';
import { notFound } from 'next/navigation';
import React, { useEffect, useMemo, useState } from 'react';
import { GrChapterNext } from 'react-icons/gr';
import { BookingProps } from './container-booking';
import { useSelector } from 'react-redux';
import { RootState } from '@/_redux/store';
import { getBookingByDate } from '@/app/_data-access/booking/get-booking';
import { Booking } from '@prisma/client';

interface Timescomponent {
    selectedDay: Date | undefined;
    selectedTime: string | undefined;
    setSelectedTime: React.Dispatch<React.SetStateAction<string | undefined>>;
    setBooking: React.Dispatch<React.SetStateAction<BookingProps | null>>;
    setIsOpenSheet: React.Dispatch<React.SetStateAction<boolean>>;
}
interface getTimeListProps {
    bookings: Booking[];
    selectedDay: Date;
}
const getTimeList = ({ bookings, selectedDay }: getTimeListProps) => {
    return times.filter((time) => {
        const hour = Number(time.split(':')[0]);
        const minutes = Number(time.split(':')[1]);

        const timeIsOnThePast = isPast(
            set(new Date(), {
                hours: hour,
                minutes: minutes,
            })
        );

        if (timeIsOnThePast && isToday(selectedDay)) return false;
        const hasBookingOnCurrentTime = bookings.some(
            (booking) =>
                booking.date.getHours() === hour &&
                booking.date.getMinutes() === minutes
        );
        if (hasBookingOnCurrentTime) return false;
        return true;
    });
};
const TimesComponent = ({
    selectedDay,
    selectedTime,
    setSelectedTime,
    setBooking,
    setIsOpenSheet,
}: Timescomponent) => {
    const [userId, setUserId] = useState<string | undefined>(undefined);
    const [dayBookings, setDayBookings] = useState<Booking[]>([]);
    const { services } = useSelector((state: RootState) => state.services);
    useEffect(() => {
        const responseSession = async () => {
            const session = await authSession();
            if (!session) return notFound();
            setUserId(session?.user.id);
        };
        responseSession();
    }, []);

    useEffect(() => {
        const fetchBookings = async () => {
            if (!selectedDay) return;
            const bookings = await getBookingByDate({
                date: selectedDay,
            });
            setDayBookings(bookings);
        };
        fetchBookings();
    }, [selectedDay, userId]);

    const timeList = useMemo(() => {
        if (!selectedDay) return [];
        return getTimeList({ bookings: dayBookings, selectedDay });
    }, [selectedDay, dayBookings]);

    const handleSelectTimeClick = (time: string) => {
        setSelectedTime(time);
    };

    const bookingDate = useMemo(() => {
        if (!selectedDay || !selectedTime) return undefined;
        return set(selectedDay, {
            hours: Number(selectedTime.split(':')[0]),
            minutes: Number(selectedTime.split(':')[1]),
        });
    }, [selectedDay, selectedTime]);

    const checkIfIsUndefined = (value: string | undefined) =>
        value === undefined ? true : false;

    const handlePreviewBookingClick = () => {
        if (bookingDate && userId) {
            if (services.length > 0) {
                const booking = {
                    date: bookingDate,
                    userId: userId,
                    services: services,
                };
                setBooking(booking);
                setIsOpenSheet(true);
            }
        }
        return;
    };

    return (
        <Card className="mx-auto mt-5 w-[90%] sm:ml-3.5 sm:w-[500px]">
            <TitlesContainer
                title="Horários"
                subtitle="Confira os horários disponíveis"
            />
            <CardContent className="grid grid-cols-4 gap-2 px-2 py-2">
                {timeList.length > 0 ? (
                    timeList.map((time) => (
                        <Button
                            variant="outline"
                            key={time}
                            onClick={() => handleSelectTimeClick(time)}
                            className={`${time === selectedTime && 'scale-125 !bg-emerald-600'} hover:text-emerald-500`}
                        >
                            {time}
                        </Button>
                    ))
                ) : (
                    <div className="col-span-4 flex items-center justify-center text-neutral-500">
                        Não há horários disponíveis nessa data!
                    </div>
                )}
            </CardContent>
            <CardFooter>
                <Button
                    onClick={handlePreviewBookingClick}
                    disabled={checkIfIsUndefined(selectedTime)}
                    className="w-full bg-emerald-400 text-neutral-900"
                >
                    Confirmar
                    <GrChapterNext />
                </Button>
            </CardFooter>
        </Card>
    );
};

export default TimesComponent;
