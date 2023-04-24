import React from 'react';
import Typed from 'typed.js';

const Hero = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['React', 'TailwindCSS', 'Typed.js'],
      typeSpeed: 120,
      backSpeed: 140,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="text-white">
      <div className="mx-auto mt-[-96px] flex h-screen w-full max-w-[800px] flex-col justify-center text-center">
        <p className="p-2 font-bold uppercase text-blue-400">
          Grow with React & TailwindCSS
        </p>
        <h1 className="py-2 text-4xl font-bold sm:text-6xl md:py-6 md:text-7xl">
          Develop quickly
        </h1>
        <div>
          <p className="text-xl font-bold sm:text-4xl md:text-5xl">
            Fast, flexible projects using&nbsp;
          </p>
          <div className="md:py-2">
            <span
              className="text-2xl font-bold text-blue-400 sm:text-4xl md:text-5xl"
              ref={el}
            />
          </div>
        </div>
        <p className="md:xl px-4 py-6 text-lg font-bold text-gray-500 md:text-2xl">
          This page is powered by React & TailwindCSS to try new framework
          combinations to work with.
        </p>
        <a
          className="button scroll-smooth"
          href="#top">
          Get Started
        </a>
      </div>
    </div>
  );
};

export default Hero;
