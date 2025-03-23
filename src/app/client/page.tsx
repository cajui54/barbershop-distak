import React, { Suspense } from 'react';
import ServiceItem from '../_components/service-item';
import { getServices } from '../_data-access/get-services';
import { MdErrorOutline } from 'react-icons/md';
import ButtonLogout from '../_components/button-logout';
import SkeletonUser from '../_components/skeleton-user';

const ClientPage = async () => {
    const services = await getServices();
    return (
        <div className="">
            <div className="mx-auto mt-5 h-[300px] w-[90%]">
                <Suspense fallback={<SkeletonUser />}>
                    {services.length > 0 ? (
                        <div className="sm:w-[500px]">
                            <h2 className="text-2xl font-bold tracking-wide text-emerald-300">
                                Serviços:
                            </h2>
                            <p className="text-sm text-neutral-300">
                                Selecione um ou mais serviços
                            </p>
                            <div className="my-2 space-y-2 py-3.5">
                                {services.map((service) => {
                                    const newService = {
                                        ...service,
                                        price: Number(service.price),
                                    };
                                    return (
                                        <ServiceItem
                                            key={service.id}
                                            {...newService}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center gap-y-2 rounded-2xl bg-neutral-900 p-2">
                            <MdErrorOutline />
                            <p className="text-center text-neutral-400">
                                Não há serviços cadastrados!
                            </p>
                            <ButtonLogout text="Voltar" />
                        </div>
                    )}
                </Suspense>
            </div>
        </div>
    );
};

export default ClientPage;
