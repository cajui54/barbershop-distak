'use client';
import React from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent } from '@/components/ui/card';
import TitlesContainer from '@/app/_components/titles-container';
import { ptBR } from 'date-fns/locale';

interface CalendarComponentProps {
    selectedDay: Date | undefined;
    setSelectedDay: React.Dispatch<React.SetStateAction<Date | undefined>>;
}
const CalendarComponent = ({
    selectedDay,
    setSelectedDay,
}: CalendarComponentProps) => {
    const handleSelectedDayClick = (day: Date | undefined) => {
        setSelectedDay(day);
    };

    return (
        <Card className="mx-auto mt-5 w-[90%] sm:w-[500px] lg:ml-3">
            <TitlesContainer
                title="Data"
                subtitle="Selecione uma data abaixo"
            />
            <CardContent className="mx-auto flex items-center justify-center">
                <Calendar
                    selected={selectedDay}
                    onSelect={handleSelectedDayClick}
                    fromDate={new Date()}
                    mode="single"
                    locale={ptBR}
                    disabled={(date) => date.getDay() === 0}
                    classNames={{
                        root: ` capitalize`,
                        day_selected: `!text-white text-neutral-950 bg-emerald-600`,
                        day_today: `!font-bold !bg-neutral-800 text-white !text-emerald-500 scale-110`,
                        nav_button: `bg-emerald-600 p-2 rounded-sm`,
                    }}
                />
            </CardContent>
        </Card>
    );
};

export default CalendarComponent;
