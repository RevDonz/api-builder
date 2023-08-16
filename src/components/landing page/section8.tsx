import React from 'react';
import Image from 'next/image';

export default function Section8() {
  return (
    <section className="text-white bg-black">
      <div className="relative flex justify-center py-28">
        <div className="flex justify-center">
          <Image
            src={'/bg-practice.webp'}
            alt="Background Practice"
            objectFit="cover"
            height={400}
            width={1156}
          />
        </div>
        <div className="text-center text-white absolute py-24">
          <h1 className="text-6xl mb-4">Practice API Design-first in Apidog</h1>
          <h3 className="text-2xl mb-8">
            Discover an easier way to build and use APIs
          </h3>
          <div className="flex justify-center space-x-4">
            <button className="flex px-6 py-3 rounded bg-violet-400 hover:bg-violet-500 text-white">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-width="3"
                viewBox="0 0 24 24"
                width={20}
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="mr-1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
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
