'use client';
import { Contact, Footer, WhatsappButton } from '@/components';
import Image from 'next/image';

const FinancingPage = () => {
  return (
    <main className="flex flex-col items-center">
      <header className="flex items-center justify-center bg-white w-full p-4">
        <a href="/">
          <Image
            src="/images/focus-logo.png"
            alt="Logo Focus Consultoria"
            width={200}
            height={200}
            className="mt-4"
            priority
          />
        </a>
      </header>
      <section className="relative w-full">
        <div
          className={`absolute inset-0 bg-cyan-950 brightness-50 bg-cover z-0`}
        ></div>
        <div className="flex flex-col items-center relative p-12 md:p-32 z-10">
          <h1 className="text-white text-3xl font-bold">
            Está pagando altas taxas no seu financiamento?
          </h1>
          <p className="mt-4 text-white text-base font-bold text-justify">
            Reduza a taxa de juros de seu contrato e recupere os valores pagos
            em tarifas de serviços não contratados. Encaminhe agora seu contrato
            de financiamento para nossa equipe de especialistas analisar.
          </p>
          <span className="mt-16">
            <WhatsappButton />
          </span>
        </div>
      </section>
      <section className="flex flex-col items-center p-8">
        <h1 className="text-3xl text-cyan-950 w-full md:w-3/4">
          Tem dúvidas sobre as taxas de juros aplicadas no seu financiamento?
          Podemos orientá-lo para garantir condições mais justas.
        </h1>
        <div className="mt-8 border-customGold border-2 w-1/2"></div>
        <p className="mt-12 w-full sm:w-3/4 text-xl text-left sm:text-justify">
          Embora o Banco Central estabeleça um percentual, os bancos e
          instituições financeiras continuam a cobrar juros acima do mercado o
          que acaba impactando diretamente no custo dos empréstimos e
          financiamentos, tornando o crédito mais caro para os consumidores e
          dificultando o acesso a condições mais justas.
        </p>
        <div className="mt-8 border-customGold border-2 w-1/2"></div>
        <h1 className="uppercase font-bold text-slate-900 text-2xl mt-12 text-center">
          Nossos serviços
        </h1>
        <div className="mt-10 w-full sm:w-3/4 flex flex-col sm:flex-row items-center gap-6 sm:gap-12">
          <p className="w-full sm:w-1/2 text-left sm:text-justify">
            Temos orgulho de oferecer um serviço especializado e eficaz para
            consumidores que enfrentam problemas com condições de financiamento
            inadequadas. Com anos de experiência e uma metodologia refinada,
            estamos prontos para assegurar que seus direitos sejam respeitados e
            que você obtenha as condições de crédito justas e necessárias.
          </p>
          <span className="flex justify-center w-full sm:w-1/2">
            <WhatsappButton />
          </span>
        </div>
        <div className="mt-8 border-customGold border-2 w-1/2"></div>
        <h1 className="uppercase font-bold text-slate-900 text-2xl mt-12 text-center">
          Conheça seus direitos
        </h1>
        <div className="mt-10 w-full sm:w-3/4 flex flex-col-reverse sm:flex-row items-center gap-6 sm:gap-12">
          <span className="flex justify-center w-full sm:w-1/2">
            <WhatsappButton />
          </span>
          <div className="w-full sm:w-1/2">
            <p className="mt-6 text-slate-900 bold text-left sm:text-justify">
              Conheça onde estão as irregularidades do seu contrato de
              financiamento:
            </p>
            <ol className="mt-6" type="1">
              <li className="text-slate-900">
                1. Taxas de juros acima da média estabelecida pelo Banco
                Central;
              </li>
              <li className="text-slate-900">
                2. Venda de seguros sem o consentimento do consumidor;
              </li>
              <li className="text-slate-900">
                3. Cobrança de tarifas de cadastro e de avaliação;
              </li>
              <li className="text-slate-900">4. IOF.</li>
            </ol>
          </div>
        </div>
      </section>
      <Contact />
      <Footer />
    </main>
  );
};

export default FinancingPage;
