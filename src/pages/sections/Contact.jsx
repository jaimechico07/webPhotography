import React, { useEffect, useState } from 'react';
import AOS from 'aos';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <section className="bg-contact bg-fixed bg-cover bg-center p-6 lg:p-32 w-full h-auto md:h-[100vh] grayscale duration-300 transition hover:grayscale-0">
      <div className="max-w-7xl mx-auto gap-9 grid h-full  place-items-center ">
        <h1 className="text-center text-dynamic-h3 text-white font-bold">Nos Encantaria conocerte!</h1>
        <div
          className="w-full rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:py-16 md:px-12 "
          data-aos="fade-up"
        >
          <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
            <form method="post">
              <div className="relative mb-6">
                <input
                  required
                  type="text"
                  name="name"
                  className="block w-full px-4 py-2  border rounded-lg bg-transparent border-gray-300 focus:outline-none focus:border-indigo-500 transition-all duration-300 ease-in-out text-white"
                  value={formData.name}
                  onChange={handleInputChange}
                />
                <label
                  className={`pointer-events-none absolute top-2 m-auto left-4 text-white/60 transition-all duration-300 ease-in-out ${
                    formData.name ? '-top-5 -left-1 text-gray-600 text-sm px-1' : ''
                  }`}
                >
                  Nombre
                </label>
              </div>
              <div className="relative mb-6">
                <input
                  required
                  type="text"
                  name="email"
                  className="block w-full px-4 py-2  border rounded-lg bg-transparent border-gray-300 focus:outline-none focus:border-indigo-500 transition-all duration-300 ease-in-out text-white"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <label
                  className={` pointer-events-none absolute top-2 m-auto left-4 text-white/60 transition-all duration-300 ease-in-out ${
                    formData.email ? '-top-5 -left-1 text-gray-600 text-sm px-1' : ''
                  }`}
                >
                  Email address
                </label>
              </div>
              <div className="relative mb-6">
                <textarea
                  required
                  type="text"
                  name="message"
                  className="block w-full px-4 py-2  border rounded-lg bg-transparent border-gray-300 focus:outline-none focus:border-indigo-500 transition-all duration-300 ease-in-out text-white"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="3"
                ></textarea>
                <label
                  className={`pointer-events-none absolute top-2 m-auto left-4 text-white/60 transition-all duration-300 ease-in-out ${
                    formData.message ? '-top-5 -left-1 text-gray-600 text-sm px-1' : ''
                  }`}
                >
                  Message
                </label>
              </div>
              <button
                type="submit"
                data-te-ripple-init
                data-te-ripple-color="light"
                className="mb-6 inline-block w-full rounded bg-white px-6 pt-2.5 pb-2 text-xs font-bold uppercase leading-normal text-black "
              >
                Send
              </button>
            </form>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full place-items-center">
              <div className="flex items-start">
                <div className="grow">
                  <p className="mb-2 font-bold dark:text-white">Technical support</p>
                  <p className="text-neutral-500 dark:text-neutral-200">support@example.com</p>
                  <p className="text-neutral-500 dark:text-neutral-200">+1 234-567-89</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="grow">
                  <p className="mb-2 font-bold dark:text-white">Sales questions</p>
                  <p className="text-neutral-500 dark:text-neutral-200">sales@example.com</p>
                  <p className="text-neutral-500 dark:text-neutral-200">+1 234-567-89</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="grow">
                  <p className="mb-2 font-bold dark:text-white">Press</p>
                  <p className="text-neutral-500 dark:text-neutral-200">press@example.com</p>
                  <p className="text-neutral-500 dark:text-neutral-200">+1 234-567-89</p>
                </div>
              </div>
              <div className="align-start flex">
                <div className="grow">
                  <p className="mb-2 font-bold dark:text-white">Bug report</p>
                  <p className="text-neutral-500 dark:text-neutral-200">bugs@example.com</p>
                  <p className="text-neutral-500 dark:text-neutral-200">+1 234-567-89</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
