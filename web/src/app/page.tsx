'use client';
import {
  Contact,
  DeveloperCredit,
  Footer,
  Header,
  SectionDivision,
  Specialties,
} from '@/components';

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Header />
      <img
        src="/images/focus-logo.png"
        alt="Logo Focus Consultoria"
        className="mt-4"
      />
      <section
        id="home"
        className="w-full mt-6 p-32 bg-background bg-cover"
      ></section>
      <SectionDivision title={'Quem somos'} />
      <section
        id="quem-somos"
        className="flex items-center mt-12 bg-customGold w-full"
      >
        <img
          src="/images/lawyer-image.jpg"
          alt="Aperto de mão entre advogados"
          className="hidden lg:flex w-1/2 h-auto"
        />
        <p className="text-white text-xl font-medium py-12 px-16">
          Combinamos nossa experiência, especialização e um compromisso sólido
          com a excelência para fornecer soluções jurídicas sob medida e
          eficazes. Com anos de atuação no mercado, asseguramos a proteção dos
          seus negócios e a defesa dos seus direitos com transparência, rapidez
          e resultados comprovados. Confie em quem compreende e prioriza seus
          interesses.
        </p>
      </section>
      <SectionDivision title={'Nossas especialidades'} />
      <Specialties />
      <SectionDivision title={'Contato'} />
      <Contact />
      <Footer />
      <DeveloperCredit />
    </main>
  );
}
