import React from 'react';

export default function Section8() {
  return (
    <section
      className="text-white bg-black bg-cover my-12 mx-6 rounded-xl lg:my-40 lg:mx-40"
      style={{
        backgroundImage: `url('/bg-practice.webp')`,
        backgroundPosition: 'center top',
      }}
    >
      <div className="flex flex-col md:flex-row justify-center py-14 md:py-28">
        <div className="text-center md:text-left md:w-1/2 relative z-10">
          <h1 className="text-3xl md:text-5xl lg:text-6xl mb-4 text-center">
            Practice API Design-first in Apidog
          </h1>
          <h3 className="text-lg md:text-2xl mb-8 text-center">
            Discover an easier way to build and use APIs
          </h3>
          <div className="flex flex-col md:flex-row justify-center items-center lg:justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-4">
            <button className="flex px-6 py-3 rounded bg-violet-400 hover:bg-violet-500 text-white">
              <svg
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                viewBox="0 0 24 24"
                width={20}
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="mr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                ></path>
              </svg>
              Download
            </button>
            <button className="px-6 py-3 rounded text-indigo-500 bg-slate-100 hover:bg-slate-50">
              Sign up for free
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
