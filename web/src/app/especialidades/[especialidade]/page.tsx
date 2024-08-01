'use client';
import {
  Footer,
  InformationsRange,
  SectionDivision,
  SpecialtiesCarousel,
} from '@/components';
import { specialtiesJson } from '@/utils/specialties';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

interface Specialtie {
  slug: string;
  titulo: string;
  descricao: string;
}

const SpecialtiePage = () => {
  const params = useParams();
  const specialtie = params.especialidade;

  const [data, setData] = useState<Specialtie | null>(null);

  useEffect(() => {
    const fetchData = () => {
      const especialidades: Specialtie[] = specialtiesJson;
      const especialidadeData = especialidades.find(
        item => item.slug === specialtie,
      );
      setData(especialidadeData || null);
    };

    if (specialtie) {
      fetchData();
    }
  }, [specialtie]);

  if (!data) {
    return <p>Carregando...</p>;
  }

  return (
    <main className="flex flex-col items-center">
      <InformationsRange />
      <img
        src="/images/focus-logo.png"
        alt="Logo Focus Consultoria"
        className="mt-4"
      />
      <section className="mt-6 w-full bg-backgroundRange bg-cover py-10 px-6">
        <h1 className="mt-12 text-customGold text-3xl">{data.titulo}</h1>
        <p className="mt-4 text-white text-base">
          Home / Especialidades / {data.titulo}
        </p>
      </section>
      <section className="flex p-10 gap-4">
        <div className="flex flex-col w-full md:w-1/2">
          <h1 className="text-4xl text-black font-medium">{data.titulo}</h1>
          <p className="mt-6 text-base text-black text-light">
            {data.descricao}
          </p>
        </div>
        <div className="w-0 md:w-1/2">
          <img
            src="/images/lawyer-image-specialties.jpg"
            alt="Logo Focus Consultoria"
            className="hidden md:block"
          />
        </div>
      </section>
      <SectionDivision title={'Outras especialidades'} />
      <section className="w-full px-12 mt-12">
        <SpecialtiesCarousel
          specialties={specialtiesJson}
          currentSpecialtySlug={specialtie.toString()}
        />
      </section>
      <Footer />
    </main>
  );
};

export default SpecialtiePage;