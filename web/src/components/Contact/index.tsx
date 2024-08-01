'use client';
import { useState } from 'react';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { contactSchema } from '@/utils';
import { Input } from '../Input';
import api from '@/services/api';
import { SuccessModal } from '../SuccessModal';

interface IFormInput {
  name: string;
  email: string;
  phone: string;
}

export function Contact() {
  const [isModalOpen, setModalOpen] = useState(false);
  const methods = useForm<IFormInput>({
    resolver: yupResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = (data: IFormInput) => {
    const payload = {
      name: data.name,
      email: data.email,
      phone: data.phone,
    };
    api
      .post('/send', payload)
      .then(function (response) {
        setModalOpen(true);
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
        alert(
          'Erro ao enviar o e-mail. Por favor, tente novamente mais tarde.',
        );
      });
  };

  return (
    <section className="w-full">
      {isModalOpen && <SuccessModal setModalOpen={setModalOpen} />}
      <div className="flex flex-col gap-12 md:flex-row justify-between mt-12 w-full bg-cyan-950 py-12 px-24">
        <div className="flex items-center justify-center flex-col">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="w-12 h-12 text-customGold"
          />
          <p className="mt-4 text-customGold text-base font-medium">
            Nos escreva:
          </p>
          <p className="text-customGold text-base">
            focusconsultoriajuridica@gmail.com
          </p>
        </div>
        <div className="flex items-center justify-center flex-col">
          <FontAwesomeIcon
            icon={faPhone}
            className="w-12 h-12 text-customGold"
          />
          <p className="mt-4 text-customGold text-base font-medium">
            Nos ligue:
          </p>
          <p className="text-customGold text-base">(42) 3223-7728</p>
        </div>
        <div className="flex items-center justify-center flex-col">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="w-12 h-12 text-customGold"
          />
          <p className="mt-4 text-customGold text-base font-medium">
            Nos visite:
          </p>
          <p className="text-customGold text-base">
            Rua Balduíno Taques, 480
            <br />
            Ponta Grossa, PR
          </p>
        </div>
      </div>
      <div className="mt-12 flex flex-col items-center">
        <h1 className="text-cyan-950 text-3xl">Vamos agendar uma reunião? </h1>
        <p className="mt-6 text-cyan-950 text-base w-1/2">
          Fale com nossa equipe para isto, deixe suas informações no formulário
          abaixo e entraremos em contato o mais breve possível.
        </p>
        <FormProvider {...methods}>
          <form
            action=""
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-center w-full"
          >
            <Input
              placeholder="Nome"
              type="text"
              name="name"
              register={register}
              errorMessage={errors.name?.message}
            />
            <Input
              placeholder="E-mail"
              type="email"
              name="email"
              register={register}
              errorMessage={errors.email?.message}
            />
            <Input
              placeholder="Whatsapp"
              type="text"
              name="phone"
              register={register}
              errorMessage={errors.phone?.message}
            />
            <button
              type="submit"
              className="mt-6 w-3/4 md:w-1/2 p-3 bg-cyan-950"
            >
              <p className="text-customGold text-base">Entrar em contato</p>
            </button>
          </form>
        </FormProvider>
      </div>
    </section>
  );
}
