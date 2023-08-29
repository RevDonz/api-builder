'use client';

import React from 'react';
import Image from 'next/image';
import featureDesign from '@/assets/section1/feature-design-sub.webp';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Section4() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="bg-black text-white">
      <div className="px-6 md:px-20 lg:px-32 xl:px-60">
        <h1 className="text-center text-5xl pt-16 md:pt-28 pb-6 md:pb-10">
          Efficient API development platform
        </h1>
        <h3 className="text-center pb-10">
          Quality tools have the power to unite your entire team, while ensuring
          that no task is needlessly repeated.
        </h3>
      </div>
      <div className="relative flex justify-center py-16 space-x-36">
        <div className="flex flex-col md:flex-row md:space-x-12 md:px-20">
          <div className="md:w-1/2 mt-10 md:mt-0 order-2 md:order-1">
            <p className="text-indigo-600">API Developing Toolkit</p>
            <h1 className="text-5xl py-14">
              Design & Develop <br /> APIs Faster & <br /> Together
            </h1>
            <p>
              Effortlessly describe your API as you test it, and <br /> generate
              JSON/XML schemas with a simple click.
            </p>
          </div>
          <div className="flex justify-end md:w-1/2 order-1 md:order-2">
            <Image
              src="/feature-design.webp"
              alt="design"
              width="748"
              height="600"
            />
          </div>
        </div>
        <div className="absolute mt-40 mr-11" data-aos="fade-up">
          <Image
            src={featureDesign}
            alt="Feature Design"
            width={331}
            height={280}
          />
        </div>
      </div>
    </section>
  );
}
