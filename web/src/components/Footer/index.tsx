export function Footer() {
  return (
    <footer className="mt-12 w-full flex flex-col gap-6 md:flex-row justify-between bg-cyan-950 p-8">
      <div className="flex flex-col">
        <h1 className="text-customGold font-bold uppercase">Mapa do Site</h1>
        <a href="#home" className="text-white font-base">
          Home
        </a>
        <a href="#quem-somos" className="text-white font-base">
          Quem somos
        </a>
        <a href="#especialidades" className="text-white font-base">
          Especialidades
        </a>
        <a href="#contato" className="text-white font-base">
          Contato
        </a>
      </div>
      <div className="flex flex-col">
        <h1 className="text-customGold font-bold uppercase">Especialidades</h1>
        <a href="/especialidades/credito">
          <p className="text-white font-base">
            Cobrança e recuperação de crédito
          </p>
        </a>
        <a href="/especialidades/contratos">
          <p className="text-white font-base">Contratos empresariais</p>
        </a>
        <a href="/especialidades/bancario">
          <p className="text-white font-base">Bancário</p>
        </a>
        <a href="/especialidades/civil">
          <p className="text-white font-base">Civil</p>
        </a>
        <a href="/especialidades/empresarial">
          <p className="text-white font-base">Empresarial</p>
        </a>
        <a href="/especialidades/imobiliario">
          <p className="text-white font-base">Imobiliário</p>
        </a>
      </div>
      <div className="flex flex-col">
        <h1 className="text-customGold font-bold uppercase">Endereço</h1>
        <p className="text-white font-base">
          Rua Balduíno Taques, 480
          <br />
          Ponta Grossa, PR
        </p>
        <h1 className="mt-6 text-customGold font-bold uppercase">Contato</h1>
        <a href="tel:+554232237728" target="blank">
          <p className="text-white font-base">(42) 3223-7728</p>
        </a>
        <a href="mailto:focusconsultoriajuridica@gmail.com" target="blank">
          <p className="text-white font-base">
            focusconsultoriajuridica@gmail.com
          </p>
        </a>
      </div>
    </footer>
  );
}
