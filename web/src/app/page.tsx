import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import logo from '../../public/images/focus-logo.png';
import { Header } from '@/components';

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
    </main>
  );
}
