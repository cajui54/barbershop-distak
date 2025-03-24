'use client';
import ContainerCard from '@/app/_components/container-card';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '@/_redux/store';
import { Button } from '@/components/ui/button';
import { formatCurrencyBr } from '@/helpers/currency';
import Image from 'next/image';
import { MdDeleteForever } from 'react-icons/md';
import { removeService, calculateTotal } from '@/_redux/serviceSlice';
import { FaMoneyBillWave } from 'react-icons/fa';
import { FaScissors } from 'react-icons/fa6';

const ShowPreviewServices = () => {
    const { services, total } = useSelector(
        (state: RootState) => state.services
    );
    const dispatch = useDispatch();

    const handleRemoveServiceClick = (id: string) => {
        dispatch(removeService(id));
        dispatch(calculateTotal());
    };
    return (
        services.length > 0 && (
            <ContainerCard>
                <h2 className="text-lg font-extralight tracking-wide">
                    Confira os serviços selecionados:
                </h2>
                <div className="mx-auto w-[98%] sm:w-[400px]">
                    <ul className="customScrollbar mt-2 max-h-[150px] space-y-2.5 overflow-y-auto">
                        {services.map((service) => (
                            <li
                                className="flex items-center justify-between gap-x-5 rounded-2xl bg-neutral-900 px-2.5 py-1 font-semibold"
                                key={service.id}
                            >
                                <Image
                                    src={service.imageUrl}
                                    alt={service.name}
                                    width={40}
                                    height={40}
                                    className="rounded-full"
                                />
                                <span>{service.name}</span>
                                <span className="font-bold text-emerald-400">
                                    {formatCurrencyBr(service.price)}
                                </span>
                                <Button
                                    onClick={() =>
                                        handleRemoveServiceClick(service.id)
                                    }
                                    className="h-[30px] w-[30px] bg-red-500 text-neutral-100 hover:bg-red-600"
                                >
                                    <MdDeleteForever />
                                </Button>
                            </li>
                        ))}
                    </ul>

                    <div className="mx-auto mt-4 flex items-center justify-between rounded-2xl bg-neutral-900 p-2.5">
                        <span className="flex items-center gap-x-2">
                            <FaMoneyBillWave className="text-2xl text-emerald-500" />{' '}
                            Total:
                        </span>
                        <span className="text-2xl font-bold text-emerald-400">
                            {formatCurrencyBr(total)}
                        </span>
                    </div>
                    <Button className="mx-auto mt-8 w-full bg-emerald-600 font-bold text-neutral-300 hover:bg-emerald-500">
                        <span className="flex">
                            <FaScissors className="text-neutral-700" />
                            Confirmar
                        </span>
                    </Button>
                </div>
            </ContainerCard>
        )
    );
};

export default ShowPreviewServices;
