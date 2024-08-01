'use client';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { SpecialtiesButton } from '../SpecialtiesButton';

import './style.css';

interface Specialtie {
  slug: string;
  titulo: string;
  descricao: string;
}

interface SpecialtiesCarouselProps {
  specialties: Specialtie[];
  currentSpecialtySlug: string;
}

export function SpecialtiesCarousel({
  specialties,
  currentSpecialtySlug,
}: SpecialtiesCarouselProps) {
  // Filtra as especialidades para remover a da página atual
  const filteredSpecialties = specialties.filter(
    specialty => specialty.slug !== currentSpecialtySlug,
  );

  return (
    <Swiper
      modules={[Pagination]}
      pagination={{ clickable: true }}
      slidesPerView={1}
      breakpoints={{
        810: {
          slidesPerView: 2,
        },
        1400: {
          slidesPerView: 3,
        },
      }}
    >
      {filteredSpecialties.map(specialty => (
        <SwiperSlide key={specialty.slug}>
          <SpecialtiesButton
            href={`/especialidades/${specialty.slug}`}
            title={specialty.titulo}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
