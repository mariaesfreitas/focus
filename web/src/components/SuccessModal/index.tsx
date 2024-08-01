import { Dispatch, SetStateAction } from 'react';

type SuccessModalProps = {
  setModalOpen: Dispatch<SetStateAction<boolean>>;
};

export function SuccessModal({ setModalOpen }: SuccessModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="flex flex-col w-9/12 sm:w-1/4 bg-white rounded-lg p-6 shadow-custom relative">
        <h1 className="font-bold text-xl">E-mail enviado com sucesso!</h1>
        <p className="mt-2 font-medium text-lg">
          Logo alguém de nossa equipe entrará em contato.
        </p>
        <button className="m-4" onClick={() => setModalOpen(false)}>
          <p className="font-bold text-xl">Fechar</p>
        </button>
      </div>
    </div>
  );
}
