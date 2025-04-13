import React from 'react';
import { BiError } from 'react-icons/bi';
import ButtonLogout from '../_components/button-logout';

const AccessNotAllow = () => {
  return (
    <div className="flex h-full w-full items-center justify-between">
      <div className="mx-auto flex h-[400px] w-[95%] flex-col items-center justify-center gap-x-8 gap-y-5 rounded-2xl bg-neutral-900 text-neutral-200 sm:w-[600px] sm:flex-row">
        <BiError className="text-[150px] text-yellow-500" />
        <div>
          <h2 className="text-center text-3xl font-bold text-yellow-500">
            Acesso Negado!
          </h2>
          <h3 className="text-center text-neutral-300">
            Você não tem permissão para acessar esta página.
          </h3>
          <div className="mx-auto mt-5">
            <ButtonLogout
              text="Voltar para o ínicio!"
              color="bg-yellow-600 !text-neutral-900"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessNotAllow;
