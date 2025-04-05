import React, { Suspense } from 'react';
import ServiceItem from '../_components/service-item';
import { getServices } from '../_data-access/get-services';
import { MdErrorOutline } from 'react-icons/md';
import ButtonLogout from '../_components/button-logout';
import SkeletonUser from '../_components/skeleton-user';
import ShowPreviewServices from './_components/show-preview-services';
import TitlesContainer from '../_components/titles-container';
import { CardContent, CardFooter } from '@/components/ui/card';
import CardContainer from '../_components/card-container';

const ClientPage = async () => {
    const services = await getServices();
    return (
        <div className="my-3.5 w-full lg:flex lg:justify-center lg:gap-x-12">
            <Suspense fallback={<SkeletonUser />}>
                {services.length > 0 ? (
                    <CardContainer>
                        <TitlesContainer
                            title="Serviços:"
                            subtitle="Selecione um ou mais serviços"
                        />
                        <CardContent>
                            <div className="customScrollbar my-2 h-[400px] space-y-2 overflow-y-auto py-3.5">
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
                        </CardContent>
                        <CardFooter>
                            <p className="text-neutral-500 italic">
                                Preços sujeito há alterações
                            </p>
                        </CardFooter>
                    </CardContainer>
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

            <ShowPreviewServices />
        </div>
    );
};

export default ClientPage;
