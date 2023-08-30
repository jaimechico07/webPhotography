import React, { useState, useEffect } from 'react';
import { BsChevronCompactDown } from 'react-icons/bs';
import AOS from 'aos';

const Card = ({ cardCont }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpanded = index => {
    if (index === expandedIndex) {
      setExpandedIndex(null); // Cerrar el elemento si ya está expandido
    } else {
      setExpandedIndex(index); // Abrir el elemento seleccionado
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div className="max-w-7xl mx-auto gap-9 grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] h-full place-items-center">
      {cardCont?.map((item, index) => (
        <div
          key={item.id}
          className={`bg-black/70 rounded-3xl w-full  h-${
            expandedIndex === index ? 'auto' : '360px'
          } flex flex-col gap-4`}
        >
          <img className="bg-cover bg-center rounded-t-3xl w-full h-[180px]" src={item.image} alt="" />
          <div className="px-6 pt-6">
            <h2 className="text-dynamic-h2 text-white text-center leading-tight mb-3 lg:mb-6">{item.name}</h2>
            {expandedIndex === index && <p className="text-white text-dynamic-des font-mono">{item.description}</p>}
          </div>
          <div
            className="flex items-center justify-center  pb-3 cursor-pointer text-white"
            onClick={() => toggleExpanded(index)}
          >
            <BsChevronCompactDown
              className={`text-xl transform duration-500 transition ${expandedIndex === index ? 'rotate-180' : ''}`}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
