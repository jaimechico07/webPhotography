import React from 'react';
import GalerySwiper from '../../components/GalerySwiper';

const Galery = () => {
  const galeryImages = [
    {
      id: 1,
      image: '/assets/images/gallery-img-01-tn.jpg',
    },
    {
      id: 2,
      image: '/assets/images/gallery-img-02-tn.jpg',
    },
    {
      id: 3,
      image: '/assets/images/gallery-img-03-tn.jpg',
    },
    {
      id: 4,
      image: '/assets/images/gallery-img-04-tn.jpg',
    },
    {
      id: 5,
      image: '/assets/images/gallery-img-05-tn.jpg',
    },
    {
      id: 6,
      image: '/assets/images/gallery-img-06-tn.jpg',
    },
    {
      id: 7,
      image: '/assets/images/gallery-img-07-tn.jpg',
    },
    {
      id: 8,
      image: '/assets/images/gallery-img-08-tn.jpg',
    },
    {
      id: 9,
      image: '/assets/images/gallery-img-09-tn.jpg',
    },
  ];

  return (
    <section className="bg-galery bg-fixed bg-cover bg-center w-full h-[100vh] grayscale duration-300 transition hover:grayscale-0">
      <div className="flex flex-col gap-20 py-32 justify-center h-full">
        <div>
          <h1 className="text-center text-dynamic-h3 text-white font-bold">Galeria</h1>
          <h2 className="text-center text-dynamic-h1 text-white font-bold">Algunas de nuestras fotos</h2>
        </div>
        <GalerySwiper galeryImages={galeryImages} modal={true} />
      </div>
    </section>
  );
};

export default Galery;
