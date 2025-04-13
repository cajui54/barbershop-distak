'use client';
import { Button } from '@/components/ui/button';
import { format, subDays, addDays } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import React, { useEffect } from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';
import { PiWarningDiamondDuotone } from 'react-icons/pi';
import { getBookingsByDate } from '@/app/_data-access/booking/get-bookings-by-date';
import ItemBooking from './item-booking';
import { BookingProps } from '@/interface/booking';

const ContainerBooking = () => {
  const [SelectedDate, setSelectedDate] = React.useState(new Date());
  const [bookings, setBookings] = React.useState<BookingProps[]>([]);
  const handleNextDay = () => {
    const _nextDay = addDays(SelectedDate, 1);
    setSelectedDate(_nextDay);
  };
  const handlePreviousDay = () => {
    const previousDay = subDays(SelectedDate, 1);
    setSelectedDate(previousDay);
  };
  const handleToday = () => {
    const today = new Date();
    setSelectedDate(today);
  };
  useEffect(() => {
    const requestBookings = async () => {
      const response = await getBookingsByDate(SelectedDate);
      setBookings(response);
      console.log(response);
    };
    requestBookings();
  }, [SelectedDate]);
  return (
    <div className="mx-auto">
      <div className="mx-auto my-5 flex h-16 w-52 items-center justify-between rounded-2xl border bg-neutral-900 px-2">
        <Button
          variant="ghost"
          className="hover:scale-110 hover:text-emerald-500"
          onClick={handlePreviousDay}
        >
          <FaChevronLeft />
        </Button>
        <div
          onClick={handleToday}
          className="cursor-pointer space-x-2 font-bold uppercase hover:scale-110 hover:text-emerald-300"
        >
          <span>{format(SelectedDate, 'dd', { locale: ptBR })}</span>
          <span>{format(SelectedDate, 'MMMM', { locale: ptBR })}</span>
        </div>
        <Button
          variant="ghost"
          onClick={handleNextDay}
          className="hover:scale-110 hover:text-emerald-500"
        >
          <FaChevronRight />
        </Button>
      </div>
      {bookings.length > 0 ? (
        bookings.map((booking) => (
          <ItemBooking key={booking.id} booking={booking} />
        ))
      ) : (
        <div className="mx-auto mt-12 flex w-[95%] flex-col items-center justify-center">
          <PiWarningDiamondDuotone className="animate-pulse text-[90px] text-yellow-500" />
          <p className="text-center text-sm text-neutral-500">
            Não há agendamentos para essa data
          </p>
        </div>
      )}
    </div>
  );
};

export default ContainerBooking;
