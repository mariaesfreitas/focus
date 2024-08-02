'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Contact, Footer, WhatsappButton } from '@/components';
import { activitiesJson } from '@/utils/activities';

interface Activity {
  slug: string;
  title: string;
  subtitle: string;
  title2: string;
  description: string;
  bgImage: string;
}

const ActivitiesPage = () => {
  const params = useParams();
  const activity = params.atividade;

  const [data, setData] = useState<Activity | null>(null);

  useEffect(() => {
    const fetchData = () => {
      const atividades: Activity[] = activitiesJson;
      const atividadeData = atividades.find(item => item.slug === activity);
      setData(atividadeData || null);
    };

    if (activity) {
      fetchData();
    }
  }, [activity]);

  if (!data) {
    return <p>Carregando...</p>;
  }

  return (
    <main className="flex flex-col items-center">
      <section className="relative w-full">
        <div
          className={`absolute inset-0 ${data.bgImage} brightness-50 bg-cover z-0`}
        ></div>
        <div className="flex flex-col items-center relative p-16 md:p-48 z-10">
          <h1 className="text-white text-3xl font-bold">{data.title}</h1>
          <p className="mt-4 text-white text-base font-bold text-justify">
            {data.subtitle}
          </p>
          <span className="mt-36">
            <WhatsappButton />
          </span>
        </div>
      </section>
      <section className="flex flex-col items-center p-8">
        <h1 className="text-3xl text-cyan-950 w-full md:w-3/4">
          {data.title2}
        </h1>
        <div className="mt-8 border-customGold border-2 w-1/2"></div>
        <div className="mt-14 flex flex-col md:flex-row items-center">
          <span className="flex justify-center w-full md:w-1/2">
            <WhatsappButton />
          </span>
          <p className="mt-8 md:mt-0 w-full md:w-1/2 text-xl text-justify">
            {data.description.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            ))}
          </p>
        </div>
      </section>
      <Contact />
      <Footer />
    </main>
  );
};

export default ActivitiesPage;
