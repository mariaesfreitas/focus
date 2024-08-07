import { SpecialtiesButton } from '../SpecialtiesButton';

export function Specialties() {
  return (
    <section
      id="especialidades"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mt-12"
    >
      <SpecialtiesButton
        href={'/especialidades/credito'}
        title={'Cobrança e recuperação de crédito'}
      />
      <SpecialtiesButton
        href={'especialidades/contratos'}
        title={'Contratos Empresariais'}
      />
      <SpecialtiesButton href={'especialidades/bancario'} title={'Bancário'} />
      <SpecialtiesButton href={'especialidades/civil'} title={'Civil'} />
      <SpecialtiesButton
        href={'especialidades/empresarial'}
        title={'Empresarial'}
      />
      <SpecialtiesButton
        href={'especialidades/imobiliario'}
        title={'Imobiliário'}
      />
    </section>
  );
}
