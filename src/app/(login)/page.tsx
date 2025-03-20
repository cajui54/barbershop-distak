import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';

export default function Home() {
    return (
        <div className="flex h-full w-full items-center justify-center font-[family-name:var(--font-geist-sans)]">
            <div className="h-[400px] w-[85%] overflow-hidden rounded-3xl bg-neutral-900 sm:w-[300px]">
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
                    <h2 className="text-2xl font-bold text-neutral-500">
                        Destak Barbearia
                    </h2>
                    <h3 className="-mt-2.5 ml-1.5 text-sm">
                        Especializada em cortes
                    </h3>
                </div>
                <Button className="mx-auto mt-[30px] flex w-[80%] items-center justify-center space-x-1 bg-emerald-700 text-white hover:bg-emerald-500">
                    <FcGoogle />
                    Entra com gmail do google
                </Button>

                <Link
                    className="mt-8 block text-center text-sm tracking-wide text-neutral-500 underline"
                    href="https://workspace.google.com/intl/pt-BR/gmail/"
                >
                    Não tem Gmail? Acesse aqui!
                </Link>
            </div>
        </div>
    );
}
