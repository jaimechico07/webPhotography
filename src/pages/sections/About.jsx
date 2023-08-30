import React from 'react';
import Card from '../../components/Card';

const About = () => {
  const cardCont = [
    {
      id: 1,
      image: '/assets/images/cardIntitucional.png',
      name: 'Fotografía Institucional',
      description:
        'Todas las empresas, sean grandes, medianas o pequeñas, tienen una filosofía de trabajo y unos valores que conforman su propia cultura. La Fotografía Corporativa es la mejor manera de comunicar y dar a conocer esta cultura.',
    },
    {
      id: 2,
      image: '/assets/images/cardRetrato.jpg',
      name: 'Retratos / Headshot',
      description:
        'Actualmente todos debemos preocuparnos por gestionar nuestra imagen personal y profesional en internet. Contar con retratos especializados nos ayudará a proyectar confianza, seguridad y profesionalismo.',
    },
    {
      id: 3,
      image: '/assets/images/cardPublicity.webp',
      name: 'Fotografía publicitaria',
      description:
        'Diariamente somos bombardeados por un sin número de avisos publicitarios que buscan llamar nuestra atención y promover el consumo de sus productos.',
    },
    {
      id: 4,
      image: '/assets/images/cardEventos.jpg',
      name: 'Fotografía de eventos',
      description:
        'Las compañías realizan numerosos eventos y activaciones que posteriormente son comunicados en redes sociales. En este tipo de iniciativas complementan y acercan aún más tus contenidos a tus audiencias',
    },
  ];

  return (
    <section
      id="section-about"
      className="bg-about grayscale duration-300 transition hover:grayscale-0 bg-fixed bg-cover bg-center p-6 lg:p-32 w-full  2xl:h-[100vh]"
    >
      <Card cardCont={cardCont} />
    </section>
  );
};

export default About;
