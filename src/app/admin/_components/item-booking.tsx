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
}
const ItemBooking = ({ booking }: ItemBookingProps) => {
  booking;
  return (
    <div className="mx-auto max-h-[500px] w-full space-y-8 p-1 sm:w-[600px]">
      <div className="relative flex h-[150px] items-center gap-x-3 rounded-3xl border border-emerald-400 bg-neutral-900 px-3">
        <Badge className="absolute -top-2 bg-emerald-400 text-neutral-900">
          Finalizado
        </Badge>
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

        <div className="relative">
          <ul className="[&>li]:rounded-2xl [&>li]:p-1">
            <li>
              <h2 className="text-2xl font-bold text-emerald-300">
                {booking.user.name}
              </h2>
            </li>
            <li className="my-1 flex items-center justify-between rounded-2xl bg-neutral-800 text-sm tracking-wider text-neutral-200">
              Total:
              <span className="font-bold">
                {' '}
                {formatCurrencyBr(
                  booking.services.reduce(
                    (acc, curr) => acc + Number(curr.price),
                    0
                  )
                )}
              </span>
            </li>
            <li className="mt-1 flex flex-wrap items-center gap-1 text-sm tracking-wider">
              {booking.services.map((service) => {
                return (
                  <Badge
                    className="bg-emerald-400"
                    key={service.id}
                    className="rounded-2xl bg-neutral-800 text-neutral-200"
                  >
                    {service.name}
                  </Badge>
                );
              })}
            </li>
          </ul>
        </div>
        <div className="relative flex h-[95%] grow items-center justify-center">
          <div className="absolute top-0 space-x-1 [&>button]:w-2.5">
            <Button variant="ghost" title="Cancelar">
              <AiOutlineUserDelete />
            </Button>

            <Button variant="ghost" title="Iniciar">
              <MdOutlineNotStarted />
            </Button>

            <Button variant="ghost" title="Finalizar">
              <FaCheck />
            </Button>
          </div>
          <p className="text-center text-3xl font-black">
            {format(booking.date, 'hh', { locale: ptBR })}:
            {format(booking.date, 'mm', { locale: ptBR })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ItemBooking;
