import React from 'react';

const Newsletter = () => {
  const [input, setInput] = React.useState('');

  function validateEmail() {
    const regex = new RegExp(/^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/);
    if (regex.test(input)) {
      alert('Thank you for signing up!');
      setInput('');
    } else {
      alert('Please enter valid email address');
    }
  }

  return (
    <div className="w-full px-4 py-16 text-white">
      <div className="mx-auto grid max-w-[1240px] lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h2>Want tips & tricks to stay on top of the most recent trends?</h2>
          <p className="mb-4 text-lg md:text-xl">Sign up to our newsletter</p>
        </div>
        <div className="my-4 flex flex-col items-center gap-4 sm:flex-row sm:justify-end sm:gap-8 lg:col-start-3 lg:row-start-2">
          <input
            type="email"
            placeholder="Enter your email address"
            className="text-md w-full rounded-md py-2 pl-4 pr-8 text-left text-black focus:outline-none sm:w-auto sm:text-lg md:text-xl"
            required
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <button
            onClick={validateEmail}
            type="submit"
            className="text-md rounded-md bg-gray-200 px-4 py-2  font-bold uppercase text-blue-500  duration-200 hover:bg-gray-500 hover:text-blue-200 sm:text-lg md:text-xl">
            Sign me&nbsp;up
          </button>
        </div>
        <p className="lg:row-start-2">
          We care about the protection of your data. Read our{' '}
          <a
            href="#top"
            className="text-blue-500">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Newsletter;
