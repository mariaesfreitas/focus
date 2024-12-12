'use client';
import { Contact, Footer, WhatsappButton } from '@/components';
import Image from 'next/image';

const SearchAndSeizurePage = () => {
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
            Está enfrentando uma ação de busca e apreensão?
          </h1>
          <p className="mt-4 text-white text-base font-bold text-justify">
            Proteja seus direitos e evite a perda do seu veículo. Nossa equipe
            especializada está pronta para ajudá-lo a buscar soluções legais e
            garantir a defesa dos seus interesses. Envie agora a documentação
            para uma análise detalhada.
          </p>
          <span className="mt-16">
            <WhatsappButton />
          </span>
        </div>
      </section>
      <section className="flex flex-col items-center p-8">
        <h1 className="text-3xl text-cyan-950 w-full md:w-3/4">
          Tem dúvidas sobre como funciona o processo de busca e apreensão?
          Podemos orientá-lo para preservar seus direitos.
        </h1>
        <div className="mt-8 border-customGold border-2 w-1/2"></div>
        <p className="mt-12 w-full sm:w-3/4 text-xl text-left sm:text-justify">
          A busca e apreensão pode ser um processo complexo e, muitas vezes,
          repleto de irregularidades. Nossa equipe está aqui para verificar se
          os requisitos legais foram cumpridos e oferecer suporte para que você
          possa lidar com a situação da melhor forma possível.
        </p>
        <div className="mt-8 border-customGold border-2 w-1/2"></div>
        <h1 className="uppercase font-bold text-slate-900 text-2xl mt-12 text-center">
          Nossos serviços
        </h1>
        <div className="mt-10 w-full sm:w-3/4 flex flex-col sm:flex-row items-center gap-6 sm:gap-12">
          <p className="w-full sm:w-1/2 text-left sm:text-justify">
            Oferecemos um serviço completo para aqueles que enfrentam processos
            de busca e apreensão. Analisamos a legalidade da ação, verificamos
            possíveis abusos e trabalhamos para que seus direitos sejam
            plenamente garantidos.
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
              Saiba como identificar irregularidades em processos de busca e
              apreensão:
            </p>
            <ol className="mt-6" type="1">
              <li className="text-slate-900">
                1. Falta de notificação prévia ao consumidor;
              </li>
              <li className="text-slate-900">
                2. Juros abusivos aplicados ao contrato de financiamento;
              </li>
              <li className="text-slate-900">
                3. Ausência de cláusulas obrigatórias no contrato;
              </li>
              <li className="text-slate-900">
                4. Descumprimento de normas do Código de Defesa do Consumidor.
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

export default SearchAndSeizurePage;
