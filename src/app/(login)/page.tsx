import ButtonLogin from '@/app/_components/button-login';
import Image from 'next/image';
import Link from 'next/link';

export default async function Home() {
  return (
    <div className="flex h-full w-full items-center justify-center font-[family-name:var(--font-geist-sans)]">
      <div className="h-[500px] w-4/5 overflow-hidden rounded-3xl bg-neutral-900 sm:w-[400px]">
        <div className="h-[220px] w-full overflow-hidden bg-neutral-900">
          <div className="relative h-[250px] w-full overflow-hidden">
            <div className="absolute bottom-0 z-30 h-full w-full bg-linear-to-b from-transparent to-neutral-900 to-80%"></div>
            <Image
              src="/barbershop.png"
              alt="Barbearia"
              width={50}
              height={20}
              className="fill relative bottom-[70px] w-full brightness-50"
            />
          </div>
        </div>
        <div className="mx-auto w-[80%]">
          <h2 className="text-sm font-bold text-neutral-500">Seja Bem Vindo</h2>
          <h3 className="-mt-2 text-2xl font-bold text-emerald-700 sm:text-3xl">
            Barbearia Destak
          </h3>
          <p className="-mt-1 ml-1.5 text-[10px] sm:text-[12px]">
            Especializada em Cabelo - Barba - Pezinho
          </p>
        </div>

        <div className="mt-12">
          <p className="text-center text-[13px] text-neutral-500">
            Agendamentos de Horários e Serviços.
          </p>

          <ButtonLogin />
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
