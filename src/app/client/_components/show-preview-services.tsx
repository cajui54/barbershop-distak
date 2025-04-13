'use client';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '@/_redux/store';
import { Button } from '@/components/ui/button';
import { formatCurrencyBr } from '@/helpers/currency';
import Image from 'next/image';
import { MdDeleteForever } from 'react-icons/md';
import { removeService, calculateTotal } from '@/_redux/serviceSlice';
import { FaMoneyBillWave } from 'react-icons/fa';
import { FaScissors } from 'react-icons/fa6';
import { CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import TitlesContainer from '@/app/_components/titles-container';
import CardContainer from '@/app/_components/card-container';
import { useRouter } from 'next/navigation';
import BarIconLoading from '@/app/_components/bar-icon-animation';

const ShowPreviewServices = () => {
  const { services, total } = useSelector((state: RootState) => state.services);
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const handleNextStepClick = () => {
    try {
      setLoading(true);
      services.length > 0 && router.push('/client/booking');
    } catch (error) {
      console.error('Error navigating to booking:', error);
    } finally {
      setLoading(false);
    }
  };
  const handleRemoveServiceClick = (id: string) => {
    dispatch(removeService(id));
    dispatch(calculateTotal());
  };
  return (
    services.length > 0 && (
      <CardContainer>
        <CardHeader>
          <TitlesContainer
            title="Serviços selecionados:"
            subtitle="Confira os serviços e valores"
          />
        </CardHeader>
        <CardContent className="mx-auto w-4/5 sm:w-[600px]">
          <div className="mx-auto my-2.5 lg:ml-1.5">
            <ul className="customScrollbar mt-2 h-[250px] space-y-2.5 overflow-y-auto">
              {services.map((service) => (
                <li
                  className="flex items-center justify-between gap-x-5 rounded-2xl bg-neutral-800 px-2.5 py-1 font-semibold"
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
                    {formatCurrencyBr(Number(service.price))}
                  </span>

                  <Button
                    onClick={() => handleRemoveServiceClick(service.id)}
                    className="h-[30px] w-[30px] bg-red-500 text-neutral-100 hover:bg-red-600"
                  >
                    <MdDeleteForever />
                  </Button>
                </li>
              ))}
            </ul>

            <div className="mx-auto mt-4 flex items-center justify-between rounded-2xl bg-neutral-900 p-2.5">
              <span className="flex items-center gap-x-2">
                <FaMoneyBillWave className="text-2xl text-green-500" />
                Total:
              </span>
              <span className="text-2xl font-bold text-emerald-400">
                {formatCurrencyBr(total)}
              </span>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          {services.length > 0 &&
            (!isLoading ? (
              <Button
                onClick={handleNextStepClick}
                className="mx-auto mt-8 w-full bg-emerald-600 font-bold text-neutral-300 hover:bg-emerald-500 sm:w-[300px]"
              >
                <span className="flex">
                  <FaScissors className="text-neutral-700" />
                  Confirmar
                </span>
              </Button>
            ) : (
              <BarIconLoading />
            ))}
        </CardFooter>
      </CardContainer>
    )
  );
};

export default ShowPreviewServices;
