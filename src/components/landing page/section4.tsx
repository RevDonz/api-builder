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
      <div>
        <h1 className="text-center text-5xl pt-28 pb-10">
          Efficient API development platform
        </h1>
        <h3 className="text-center">
          Quality tools have the power to unite your entire team, while ensuring
          that no task is needlessly repeated.
        </h3>
      </div>
      <div className="relative flex justify-center py-16 space-x-36">
        <div className="flex space-x-12">
          <div>
            <p className="text-indigo-600">API Developing Toolkit</p>
            <h1 className="text-5xl py-14">
              Design & Develop <br /> APIs Faster & <br /> Together
            </h1>
            <p>
              Effortlessly describe your API as you test it, and <br /> generate
              JSON/XML schemas with a simple click.
            </p>
          </div>
          <div className="flex justify-end">
            <Image
              src="/feature-design.webp"
              alt="design"
              width="748"
              height="600"
            />
          </div>
        </div>
        <div className="absolute mt-96 mr-11" data-aos="fade-up">
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
