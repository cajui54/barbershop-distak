import React from 'react';
import { IoCalendarOutline } from 'react-icons/io5';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface BookingItemProps {
    selectedDay: Date;
    selectedTime: string;
}
const BookingItem = ({ selectedDay, selectedTime }: BookingItemProps) => {
    return (
        <div className="flex w-full items-center justify-between gap-x-2.5">
            <IoCalendarOutline className="text-3xl text-emerald-400" />

            <div className="flex grow flex-col items-center justify-center border-r border-neutral-800 text-center">
                <span className="text-sm capitalize">
                    {format(selectedDay, 'MMMM', {
                        locale: ptBR,
                    })}
                </span>

                <span className="text-2xl font-bold text-emerald-400">
                    {format(selectedDay, 'dd', {
                        locale: ptBR,
                    })}
                </span>

                <span className="text-sm capitalize">
                    {format(selectedDay, 'EEEE', {
                        locale: ptBR,
                    })}
                </span>
            </div>
            <div>
                <span className="text-2xl font-bold text-emerald-400">
                    {selectedTime}
                </span>
            </div>
        </div>
    );
};

export default BookingItem;
