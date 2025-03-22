import { db } from '@/_libs/prisma';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';

export default async function Home() {
    const services = await db.barbershopService.findMany();

    console.log(services);

    return (
        <div className="flex h-full w-full items-center justify-center font-[family-name:var(--font-geist-sans)]">
            <div className="h-[500px] w-[70%] overflow-hidden rounded-3xl bg-neutral-900 sm:w-[400px]">
                <div className="h-[220px] w-full overflow-hidden bg-neutral-900">
                    <div className="relative h-[250px] w-full overflow-hidden">
                        <div className="absolute bottom-0 z-30 h-full w-full bg-linear-to-b from-transparent to-neutral-900 to-80%"></div>
                        <Image
                            src="/barbershop.png"
                            alt="Barbearia"
                            width={500}
                            height={200}
                            className="fill relative bottom-[70px] w-full brightness-50"
                        />
                    </div>
                </div>
                <div className="mx-auto w-[80%]">
                    <h2 className="text-sm font-bold text-neutral-500">
                        Seja Bem Vindo
                    </h2>
                    <h3 className="-mt-2 text-3xl font-bold text-emerald-700">
                        Barbearia Destak
                    </h3>
                    <p className="-mt-2 ml-1.5 text-[12px]">
                        Especializada em Cabelo - Barba - Pezinho
                    </p>
                </div>

                <div className="mt-12">
                    <p className="text-center text-[13px] text-neutral-500">
                        Agendamentos de Horários e Serviços.
                    </p>
                    <Button
                        asChild
                        className="mx-auto mt-[5px] flex w-[80%] items-center justify-center space-x-1 bg-emerald-700 text-white hover:bg-emerald-500"
                    >
                        <Link href="/client">
                            <FcGoogle />
                            Entra com gmail do google
                        </Link>
                    </Button>

                    <Link
                        className="mt-8 block text-center text-sm tracking-wide text-neutral-500 underline"
                        href="https://workspace.google.com/intl/pt-BR/gmail/"
                    >
                        Não tem Gmail? Acesse aqui!
                    </Link>
                </div>
            </div>
        </div>
    );
}
