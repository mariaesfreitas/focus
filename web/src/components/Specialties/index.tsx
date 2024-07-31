import { SpecialtiesButton } from '../SpecialtiesButton';

export function Specialties() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mt-12">
      <SpecialtiesButton
        href={'#'}
        title={'Cobrança e recuperação de crédito'}
      />
      <SpecialtiesButton href={'#'} title={'Contratos Empresariais'} />
      <SpecialtiesButton href={'#'} title={'Bancário'} />
      <SpecialtiesButton href={'#'} title={'Civil'} />
      <SpecialtiesButton href={'#'} title={'Empresarial'} />
      <SpecialtiesButton href={'#'} title={'Imobiliário'} />
    </section>
  );
}
