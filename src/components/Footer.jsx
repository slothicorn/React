import React from 'react';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="mx-auto grid max-w-[1240px] gap-4 px-4 py-8 text-gray-300 lg:grid-cols-3 lg:gap-8">
      <h2 className="w-full self-center text-3xl font-bold text-blue-400">
        REACT.
      </h2>
      <p className="">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
        reiciendis eum facere eos harum voluptatum accusantium labore voluptate
        neque perferendis.
      </p>
      <div className="my-6 flex items-center justify-center space-x-2">
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noreferrer"
          className="duration-200 hover:shadow-lg hover:shadow-blue-400">
          <FaFacebookSquare size={30} />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer"
          className="duration-200 hover:shadow-lg hover:shadow-blue-400">
          <FaInstagram size={30} />
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noreferrer"
          className="duration-200 hover:shadow-lg hover:shadow-blue-400">
          <FaTwitterSquare size={30} />
        </a>
        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
          className="duration-200 hover:shadow-lg hover:shadow-blue-400">
          <FaGithubSquare size={30} />
        </a>
        <a
          href="https://dribbble.com/"
          target="_blank"
          rel="noreferrer"
          className="duration-200 hover:shadow-lg hover:shadow-blue-400">
          <FaDribbbleSquare size={30} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
