import React, { useRef, useState } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const GalerySwiper = ({ galeryImages, modal }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const arrowLeftRef = useRef();
  const arrowRightRef = useRef();

  const handleImageClick = image => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const handleMouseEnter = () => {
    arrowRightRef.current.classList.remove('hidden');
    arrowLeftRef.current.classList.remove('hidden');

    arrowRightRef.current.classList.add('block');
    arrowLeftRef.current.classList.add('block');
  };

  const handleMouseLeave = () => {
    arrowRightRef.current.classList.add('hidden');
    arrowLeftRef.current.classList.add('hidden');

    arrowRightRef.current.classList.remove('block');
    arrowLeftRef.current.classList.remove('block');
  };

  const swiperProps = {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: '.button-next-right',
      prevEl: '.button-prev-left',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  };

  return (
    <div className="" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Swiper {...swiperProps} modules={[Navigation, Autoplay]} className="swiper-galery h-auto ">
        {galeryImages?.map(item => (
          <SwiperSlide key={item.id}>
            <img
              className="grayscale duration-300 transition hover:grayscale-0 cursor-pointer"
              src={item.image}
              alt=""
              onClick={() => handleImageClick(item.image)}
            />
          </SwiperSlide>
        ))}
        <div
          id="arrowLeft"
          ref={arrowLeftRef}
          className="hidden button-prev-left absolute z-10 inset-y-0 m-auto -left-10 text-[#3483fa]  w-20 h-20 text-3xl   bg-white rounded-full shadow-lg"
        >
          <HiChevronLeft className="absolute m-auto inset-y-0 right-2" />
        </div>
        <div
          id="arrowRightProduct"
          ref={arrowRightRef}
          className="hidden button-next-right absolute z-10 inset-y-0 m-auto -right-10 text-[#3483fa] w-20 h-20 text-3xl   bg-white rounded-full shadow-lg"
        >
          <HiChevronRight className="absolute m-auto inset-y-0 left-2 " />
        </div>
      </Swiper>

      {modal && selectedImage !== null && (
        <div
          className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black/70 z-50"
          onClick={handleCloseModal}
        >
          <div className="relative bg-white rounded-lg shadow-inner shadow-black">
            <img src={selectedImage} alt="" className="w-[80vh] h-auto object-cover" />
          </div>
        </div>
      )}
    </div>
  );
};

export default GalerySwiper;
