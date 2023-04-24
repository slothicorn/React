import React from 'react';
import Dev from '../assets/development.png';

const About = () => {
  return (
    <div
      id="about"
      className="w-full bg-white px-4 py-16">
      <div className="mx-auto grid max-w-[1240px] gap-8 md:grid-cols-2">
        <img
          className="mx-auto w-[500px]"
          src={Dev}
          alt="development illustration"
        />
        <div className="flex flex-col justify-center">
          <h2 className="text-blue-500">Lorem ipsum</h2>
          <h3>Lorem ipsum dolor sit amet</h3>
          <p className="mb-4 text-justify text-lg md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            nisi nihil cumque ipsa recusandae, eaque inventore sunt, deleniti
            voluptatum id et delectus commodi, assumenda velit reiciendis? Fuga
            natus quod sequi accusamus nobis, voluptatem dolores et voluptates
            sapiente explicabo eos dicta tempora quaerat quasi dolor.
          </p>
          <a
            className="button"
            href="#top">
            See more
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
