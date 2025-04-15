'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { formatCurrencyBr } from '@/helpers/currency';
import { BookingProps } from '@/interface/booking';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import React from 'react';
import { AiOutlineUserDelete } from 'react-icons/ai';
import { FaCheck } from 'react-icons/fa';
import { MdOutlineNotStarted } from 'react-icons/md';

interface ItemBookingProps {
  booking: BookingProps;
  wasStarted: string;
  setWasStarted: React.Dispatch<React.SetStateAction<string>>;
  isFinished: string[];
  setIsFinished: React.Dispatch<React.SetStateAction<string[]>>;
}
const ItemBooking = ({
  booking,
  setWasStarted,
  wasStarted,
  isFinished,
  setIsFinished,
}: ItemBookingProps) => {
  const handleStart = (idBooking: string) => {
    if (wasStarted === idBooking) {
      setWasStarted('');
      return;
    }
    setWasStarted(idBooking);
  };
  const handleFinishBookingProps = (idBooking: string) => {
    setWasStarted('');
    if (!isFinished.includes(idBooking)) {
      setIsFinished((prev) => [...prev, idBooking]);

      return;
    }
  };

  return (
    <div className="mx-auto max-h-[500px] w-full space-y-8 p-1 sm:w-[600px]">
      <div
        className={`${wasStarted === booking.id ? 'bg-emerald-700' : 'bg-neutral-900'} ${isFinished.includes(booking.id) ? 'border-neutral-400 !bg-neutral-700' : 'border-emerald-400'} relative flex h-[150px] items-center gap-x-3 rounded-3xl border px-3 ease-in-out`}
      >
        <Badge
          className={`${isFinished.includes(booking.id) ? 'border border-neutral-400 bg-neutral-900 text-white' : 'bg-emerald-400 text-neutral-900'} absolute -top-2 ease-in-out`}
        >
          {isFinished.includes(booking.id) ? 'Finalizado' : 'Confirmardo'}
        </Badge>
        <div className="flex h-[90%] flex-col items-center justify-center">
          <Avatar className="!h-[80px] !w-[80px]">
            <AvatarImage
              className="!w-[100px]"
              src={
                booking.user.image
                  ? booking.user.image
                  : 'https://github.com/shadcn.png'
              }
              alt="@shadcn"
            />
            <AvatarFallback>
              <span>{booking.user.name?.split('')[0]}</span>
              <span>{booking.user.name?.split('')[1]}</span>
            </AvatarFallback>
          </Avatar>
          <div className="">
            <h2 className="text-center font-bold text-emerald-400">
              {booking.user.name?.split(' ')[0]}
            </h2>
            <h3 className="-mt-2 text-end text-sm font-black">
              {booking.user.name?.split(' ')[1]}
            </h3>
          </div>
        </div>

        <div className="relative">
          <ul className="[&>li]:rounded-2xl [&>li]:p-1">
            <li className="flex items-center justify-end">
              <div className="space-x-1 [&>button]:w-2.5">
                <Button variant="ghost" title="Cancelar">
                  <AiOutlineUserDelete />
                </Button>

                <Button
                  variant="ghost"
                  title="Iniciar"
                  onClick={() => handleStart(booking.id)}
                >
                  <MdOutlineNotStarted />
                </Button>

                <Button
                  variant="ghost"
                  title="Finalizar"
                  onClick={() => handleFinishBookingProps(booking.id)}
                >
                  <FaCheck />
                </Button>
              </div>
            </li>
            <li className="my-1 flex items-center justify-between rounded-2xl bg-neutral-800 text-sm tracking-wider text-neutral-200">
              Total:
              <span className="font-bold">
                {formatCurrencyBr(
                  booking.services.reduce(
                    (acc, curr) => acc + Number(curr.price),
                    0
                  )
                )}
              </span>
            </li>
            <li className="mt-1 flex w-[170px] flex-wrap items-center gap-1 text-sm tracking-wider">
              {booking.services.map((service) => {
                return (
                  <Badge
                    key={service.id}
                    className="rounded-2xl bg-emerald-400 text-neutral-900"
                  >
                    {service.name}
                  </Badge>
                );
              })}
            </li>
          </ul>
        </div>
        <div className="flex h-[95%] grow items-center justify-center">
          <p className="text-center text-2xl font-black sm:text-3xl">
            {format(booking.date, 'hh', { locale: ptBR })}:
            {format(booking.date, 'mm', { locale: ptBR })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ItemBooking;
