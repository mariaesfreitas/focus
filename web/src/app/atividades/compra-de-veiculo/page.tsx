'use client';
import { Contact, Footer, WhatsappButton } from '@/components';

const VehiclePurchasePage = () => {
  return (
    <main className="flex flex-col items-center">
      <header className="flex items-center justify-center bg-white w-full p-4">
        <a href="/">
          <img src="/images/focus-logo.png" alt="" className="h-12" />
        </a>
      </header>
      <section className="relative w-full">
        <div
          className={`absolute inset-0 bg-cyan-950 brightness-50 bg-cover z-0`}
        ></div>
        <div className="flex flex-col items-center relative p-12 md:p-32 z-10">
          <h1 className="text-white text-3xl font-bold">
            Adquiriu um veículo com defeito? Saiba como resolver a situação
          </h1>
          <p className="mt-4 text-white text-base font-bold text-justify">
            Comprou um veículo que apresentou problemas? Somos uma consultoria
            jurídica especializada em recuperar o valor gasto em veículos
            defeituosos.
          </p>
          <span className="mt-16">
            <WhatsappButton />
          </span>
        </div>
      </section>
      <section className="flex flex-col items-center p-8">
        <h1 className="text-3xl text-cyan-950 w-full md:w-3/4">
          Está enfrentando problemas com o seu veículo recém-adquirido devido a
          defeitos ou má qualidade?
        </h1>
        <div className="mt-8 border-customGold border-2 w-1/2"></div>
        <p className="mt-12 w-full sm:w-3/4 text-xl text-left sm:text-justify">
          Comprar um veículo novo ou usado é um momento de grande expectativa.
          Entretanto, problemas mecânicos, falhas elétricas, defeitos no sistema
          de freios ou na suspensão são apenas alguns exemplos de situações que
          podem transformar o sonho em pesadelo.
          <br /> Ainda, ao procurar resolver a situação com o vendedor, os
          consumidores apenas encontram descaso e incontáveis desculpas, a fim
          de não resolver a situação.
        </p>
        <div className="mt-8 border-customGold border-2 w-1/2"></div>
        <h1 className="uppercase font-bold text-slate-900 text-2xl mt-12 text-center">
          Nossos serviços
        </h1>
        <div className="mt-10 w-full sm:w-3/4 flex flex-col sm:flex-row items-center gap-6 sm:gap-12">
          <p className="w-full sm:w-1/2 text-left sm:text-justify">
            Temos orgulho de oferecer um serviço especializado e eficaz para
            consumidores que enfrentam problemas com veículos defeituosos. Com
            anos de experiência e uma metodologia refinada, estamos prontos para
            assegurar que seus direitos sejam respeitados e que você obtenha a
            reparação necessária.
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
              Identificado o problema no veículo, o consumidor poderá optar, por
              sua livre escolha, entre as seguintes formas de solucionar o
              problema:
            </p>
            <ol className="mt-6" type="1">
              <li className="text-slate-900">
                1. A restituição imediata da quantia paga, com o cancelamento do
                contrato de financiamento;
              </li>
              <li className="text-slate-900">
                2. A substituição do produto por outro da mesma espécie, em
                perfeitas condições de uso;
              </li>
              <li className="text-slate-900">
                3. O abatimento proporcional do preço.
              </li>
            </ol>
          </div>
        </div>
      </section>
      <Contact />
      <Footer />
    </main>
  );
};

export default VehiclePurchasePage;
