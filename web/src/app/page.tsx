import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import logo from '../../public/images/focus-logo.png';
import lawyer from '../../public/images/lawyer-image.jpg';
import { Header, SectionDivision, Specialties } from '@/components';

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Header />
      <img src={logo.src} alt="Logo Focus Consultoria" className="mt-4" />
      <section className="w-full mt-6 p-12 bg-background bg-cover">
        <h1 className="text-cyan-950 text-2xl font-bold">
          Se você estiver com algum problema legal em sua vida...
        </h1>
        <div className="mt-4 inline-flex items-center bg-cyan-950 p-3 rounded-lg">
          <p className=" text-white font-bold">Nós estamos disponíveis.</p>
        </div>
        <button className="mt-4 flex items-center bg-cyan-950 py-4 px-6 gap-3 rounded-lg">
          <FontAwesomeIcon icon={faWhatsapp} className="w-8 h-8 text-white" />
          <p className="flex text-white text-center text-lg font-bold uppercase">
            Fale conosco
          </p>
        </button>
      </section>
      <SectionDivision title={'Quem somos'} />
      <section
        id="quem-somos"
        className="flex items-center mt-12 bg-customGold w-full"
      >
        <img
          src={lawyer.src}
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
    </main>
  );
}
