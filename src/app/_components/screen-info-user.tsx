import React, { Suspense } from 'react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import SkeletonUser from './skeleton-user';
import { signInSession } from '../_actions/session/signin';

const ScreenInfoUser = async () => {
  const { user } = await signInSession();

  return (
    <div className="mx-auto mt-4 flex h-[100px] w-[90%] items-center justify-between rounded-2xl bg-neutral-900 pl-2.5 sm:ml-8 sm:w-[500px]">
      {user ? (
        <Suspense fallback={<SkeletonUser />}>
          <div className="flex h-[90%] w-[60%] items-center gap-x-2">
            <Avatar className="flex h-[60px] w-[60px] items-center justify-center">
              <AvatarImage
                src={
                  user?.image ? user?.image : 'https://github.com/shadcn.png'
                }
              />
              <AvatarFallback>Image Profile</AvatarFallback>
            </Avatar>

            <div className="flex h-[98%] w-[75%] flex-col justify-center">
              <p className="text-sm">Seja bem vindo!</p>
              <p className="-mt-2 text-2xl font-bold text-emerald-500">
                {user?.name}
              </p>
              <p className="-mt-1 text-sm text-neutral-400 italic">
                {user?.email}
              </p>
            </div>
          </div>
        </Suspense>
      ) : (
        <p className="ml-3 text-neutral-400">Usuário não encontrado!</p>
      )}

      <div className="flex h-[90%] w-[30%] flex-col items-center justify-center">
        <span className="text-[12px] text-neutral-300 capitalize">
          {format(new Date(), 'MMMM', {
            locale: ptBR,
          })}
        </span>
        <span className="-mt-2 text-3xl font-bold text-emerald-400">
          {format(new Date(), 'dd')}
        </span>
        <span className="-mt-2 text-neutral-300">
          {format(new Date(), 'EEEE', { locale: ptBR })}
        </span>
      </div>
    </div>
  );
};

export default ScreenInfoUser;
