import React, { useEffect } from 'react';
import AOS from 'aos';

const More = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <section className="bg-more bg-fixed bg-cover bg-center p-6 lg:p-32 w-full h-auto md:h-[100vh] grayscale duration-300 transition hover:grayscale-0 ">
      <div className="max-w-7xl h-full mx-auto gap-9 grid grid-cols-1 lg:grid-cols-2 place-items-center ">
        <div className="p-6 text-center bg-white/70 rounded-3xl max-w-[500px]" data-aos="flip-down">
          <h2 className="text-dynamic-h2 text-black italic font-bold">Rapidez</h2>
          <p className="text-dynamic-des text-black font-mono">
            Trabajaremos juntos en un cronograma optimizado para que tengas tus fotos listas, justo cuando las
            necesitas.
          </p>
        </div>
        <div className="p-6 lg:p-10 text-center bg-white/70 rounded-3xl max-w-[500px]" data-aos="flip-down">
          <h2 className="text-dynamic-h2 text-black italic font-bold">Retoque y HD</h2>
          <p className="text-dynamic-des text-black font-mono">
            Todas las fotografías que entregamos pasan por procesos de retoque y ajuste principales.
          </p>
        </div>
        <div className="p-6 lg:p-10 text-center bg-white/70 rounded-3xl max-w-[500px]" data-aos="flip-down">
          <h2 className="text-dynamic-h2 text-black italic font-bold">Entrega online</h2>
          <p className="text-dynamic-des text-black font-mono">
            Tus fotos estarán disponibles en un servidor al que podrás acceder desde cualquier dispositivo en todo
            momento.
          </p>
        </div>
        <div className="p-6 lg:p-10 text-center bg-white/70 rounded-3xl max-w-[500px]" data-aos="flip-down">
          <h2 className="text-dynamic-h2 text-black italic font-bold">Garantía</h2>
          <p className="text-dynamic-des text-black font-mono">
            Nuestro equipo de trabajo está calificado para garantizar la más alta calidad en el desarrollo de tu
            proyecto.
          </p>
        </div>
      </div>
    </section>
  );
};

export default More;
