import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';

const Hero = () => {
  const moveScroll = () => {
    const element = document.querySelector('#section-about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <section className="bg-hero grayscale duration-300 transition hover:grayscale-0 bg-fixed bg-cover bg-center  w-full h-[100vh]">
      <div className="grid max-w-7xl mx-auto grid-rows-1 grid-cols-1 p-6 h-full lg:grid-cols-2 place-items-center ">
        <div className=" col-start-2 col-end-3 grid gap-3 lg:gap-6  z-10">
          <div className="grid gap-3 lg:gap-6" data-aos="fade-down">
            <h1 className="text-white text-dynamic-h1  font-bold ">Photography</h1>
            <p className="text-white text-dynamic-des font-mono">
              Somos un estudio fotográfico especializado en la producción y realización del servicio de fotografía
              profesional para empresas y emprendedores en Perú, en todas las categorías de productos y servicios.
            </p>
            <p className="text-white text-dynamic-des font-mono">
              Actualmente, en cualquier línea de negocio el primer contacto con los clientes tiene un predominante
              componente visual, es por ello que contar con imágenes profesionales y de alta calidad.
            </p>
          </div>
          <Link
            onClick={moveScroll}
            className=" text-white text-dynamic-btn px-14 py-2 w-fit hover:duration-300 hover:ease-in hover:transform hover:-translate-y-1 bg-red-btn min-w-min rounded-md transition duration-500 hover:bg-red-500"
            data-aos="fade-left"
          >
            Explore...
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
