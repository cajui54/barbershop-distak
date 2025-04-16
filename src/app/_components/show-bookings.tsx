import React, { Suspense } from 'react';
import { LiaCalendarAltSolid } from 'react-icons/lia';
import { getBookingByUserId } from '../_data-access/booking/get-booking-by-idUser';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import BarIconLoading from './bar-icon-animation';

const ShowBookings = async () => {
  const bookings = await getBookingByUserId();

  return (
    <div className="mx-auto mt-3.5 w-[90%]">
      <Suspense
        fallback={
          <div>
            <BarIconLoading />
            <p className="animate-pulse text-center">Carregando...</p>
          </div>
        }
      >
        <div className="mt-2.5 h-[150px] w-full space-y-3">
          {bookings.length > 0 ? (
            <>
              <h2 className="my-4 text-neutral-400">
                Agendamentos Confirmados:
              </h2>
              <div className="customScrollbar mx-auto h-52 space-y-2 overflow-y-auto">
                {bookings.map((booking) => (
                  <div
                    key={booking.id}
                    className="flex h-[90px] items-center justify-between rounded-2xl bg-neutral-900"
                  >
                    <LiaCalendarAltSolid className="text-6xl text-neutral-600" />

                    <div className="flex grow items-center justify-between gap-x-3">
                      <div className="w-4/5 px-2.5">
                        <div className="space-x-2">
                          <span className="text-2xl font-black">
                            {format(booking.date, 'dd', {
                              locale: ptBR,
                            })}
                          </span>
                          <span>de</span>
                          <span>
                            {format(booking.date, 'MMMM', { locale: ptBR })}
                          </span>
                        </div>
                        <p className="-mt-1 text-sm text-emerald-500">
                          {format(booking.date, 'EEEE', { locale: ptBR })}
                        </p>
                      </div>
                      <div className="px-2 text-center text-3xl text-emerald-400">
                        <span>
                          {format(booking.date, 'K', { locale: ptBR })}:
                          {format(booking.date, 'mm', { locale: ptBR })}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <p className="mt-5 text-center text-neutral-600">
              Não há agendamentos marcados!
            </p>
          )}
        </div>
      </Suspense>
    </div>
  );
};

export default ShowBookings;
