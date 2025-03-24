import React, { Suspense } from 'react';
import ServiceItem from '../_components/service-item';
import { getServices } from '../_data-access/get-services';
import { MdErrorOutline } from 'react-icons/md';
import ButtonLogout from '../_components/button-logout';
import SkeletonUser from '../_components/skeleton-user';
import ShowPreviewServices from './_components/show-preview-services';
import ContainerCard from '../_components/container-card';

const ClientPage = async () => {
    const services = await getServices();
    return (
        <div className="min-h-full w-full">
            <ContainerCard>
                <Suspense fallback={<SkeletonUser />}>
                    {services.length > 0 ? (
                        <div className="sm:w-[500px]">
                            <h2 className="text-2xl font-bold tracking-wide text-emerald-300">
                                Serviços:
                            </h2>
                            <p className="text-sm text-neutral-300">
                                Selecione um ou mais serviços
                            </p>
                            <div className="customScrollbar my-2 h-[400px] space-y-1 overflow-y-auto py-3.5">
                                {services.map((service) => {
                                    const newService = {
                                        ...service,
                                        price: Number(service.price),
                                    };
                                    return (
                                        <ServiceItem
                                            key={service.id}
                                            service={newService}
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
            </ContainerCard>

            <ShowPreviewServices />
        </div>
    );
};

export default ClientPage;
