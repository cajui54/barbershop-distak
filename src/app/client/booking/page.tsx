import React from 'react';

import ContainerBooking from './_components/container-booking';

const BookingPage = async () => {
    return (
        <div className="min-h-full py-3.5">
            <div className="mx-auto w-[90%] sm:ml-7 sm:w-[500px]">
                <h2 className="text-2xl font-bold text-emerald-500">
                    Tela de Agendamento
                </h2>
                <p className="-mt-1.5 ml-2 text-sm text-neutral-400">
                    Selecione Data e Horários
                </p>
            </div>

            <ContainerBooking />
        </div>
    );
};

export default BookingPage;
