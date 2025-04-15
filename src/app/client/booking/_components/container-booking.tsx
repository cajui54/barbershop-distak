'use client';
import React, { useState } from 'react';
import CalendarComponent from './calendar';
import TimesComponent from './time';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { useSelector } from 'react-redux';
import { RootState } from '@/_redux/store';
import Image from 'next/image';
import { formatCurrencyBr } from '@/helpers/currency';
import { FaCalendarCheck } from 'react-icons/fa';
import { createBooking } from '@/app/_actions/booking/create-booking/create-booking';
import { Badge } from '@/components/ui/badge';
import { BarbershopService } from '@prisma/client';
import { toast } from 'sonner';
import BookingItem from '@/app/_components/booking-item';
import BarIconLoading from '@/app/_components/bar-icon-animation';
import { redirect, useRouter } from 'next/navigation';

export interface BookingProps {
  date: Date;
  userId: string;
  services: BarbershopService[];
}

const ContainerBooking = () => {
  const router = useRouter();
  const [selectedDay, setSelectedDay] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string | undefined>(
    undefined
  );
  const [booking, setBooking] = useState<BookingProps | null>(null);
  const [isOpenSheet, setIsOpenSheet] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { services, total } = useSelector((state: RootState) => state.services);
  const resetAllStates = () => {
    setSelectedDay(undefined);
    setSelectedTime(undefined);
    setBooking(null);
    setIsOpenSheet(false);
  };
  const handleCreateBookingClick = async () => {
    try {
      setIsLoading(true);
      if (booking) {
        const response = await createBooking(booking);

        if (response.status === 'success') {
          toast.success(response.message);
          resetAllStates();
        } else {
          toast.error(response.message);
        }
      }
    } catch (error) {
      toast.error('Erro ao criar agendamento. Tente novamente mais tarde.');
    } finally {
      setIsLoading(false);
      router.push('/client');
    }
  };
  return (
    <div className="w-full lg:flex lg:items-center lg:justify-center">
      <CalendarComponent
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
      />

      {selectedDay && (
        <>
          <TimesComponent
            selectedDay={selectedDay}
            selectedTime={selectedTime}
            setSelectedTime={setSelectedTime}
            setBooking={setBooking}
            setIsOpenSheet={setIsOpenSheet}
          />
        </>
      )}

      <Sheet open={isOpenSheet} onOpenChange={setIsOpenSheet}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Agendamento</SheetTitle>
            <SheetDescription>
              Confira data, horário e serviços solicitados e confirme se estiver
              tudo de acordo.
            </SheetDescription>
          </SheetHeader>

          <div className="ml-10">
            <Badge className="bg-emerald-500">Data & horário</Badge>
          </div>
          {services.length > 0 && (
            <div>
              <div className="border-neutral-850 mx-auto my-3.5 flex h-20 w-4/5 items-center justify-between rounded-sm border bg-neutral-900 px-3">
                {selectedDay && selectedTime && (
                  <BookingItem
                    selectedDay={selectedDay}
                    selectedTime={selectedTime}
                  />
                )}
              </div>
              <ul className="mx-auto mt-9 w-4/5">
                <li>
                  <Badge className="bg-emerald-500">Serviços</Badge>
                </li>
                {services.map((service) => (
                  <li
                    key={service.id}
                    className="my-3 flex items-center justify-between border-b border-b-neutral-600 pb-2"
                  >
                    <Image
                      src={service.imageUrl}
                      alt={service.name}
                      width={50}
                      height={50}
                      className="rounded-[5px]"
                    />
                    <span>{service.name}</span>
                    <span className="font-bold">
                      {formatCurrencyBr(Number(service.price))}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mx-auto my-3.5 flex w-4/5 justify-between">
                <span>Total:</span>
                <span className="text-2xl font-bold text-emerald-400">
                  {formatCurrencyBr(total)}
                </span>
              </div>
              {!isLoading ? (
                <Button
                  onClick={handleCreateBookingClick}
                  className="mx-auto mt-11 flex w-4/5 items-center justify-center gap-x-1.5 bg-emerald-600 font-bold text-neutral-900 hover:bg-emerald-400"
                >
                  <FaCalendarCheck />
                  Confirmar o Agendamento
                </Button>
              ) : (
                <div className="mt-7">
                  <BarIconLoading />
                </div>
              )}
            </div>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default ContainerBooking;
