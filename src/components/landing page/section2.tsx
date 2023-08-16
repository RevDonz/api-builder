'use client';

import React from 'react';
import Image from 'next/image';
import autoTesting from '@/assets/section1/auto-testing.webp';
import qaEngineer from '@/assets/section1/qa-engineer.webp';
import jsonSchema from '@/assets/section1/json-schema.webp';
import apiDesigner from '@/assets/section1/api-designer.webp';
import apiMock from '@/assets/section1/api-mock.webp';
import frontendDeveloper from '@/assets/section1/frontend-developer.webp';
import beckendDeveloper from '@/assets/section1/backend-developer.webp';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Section2() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="bg-black">
      <div className="flex items-center justify-center relative">
        <Image
          src={'/main-interface.webp'}
          alt="main interface"
          width={1280}
          height={700}
        />
        <Image
          src={beckendDeveloper}
          alt="beckend developer"
          width={150}
          height={32}
          className="absolute mb-72 ms-96 -me-96"
          data-aos="fade-left"
        />
        <div className="absolute flex items-center space-x-96 pt-96">
          <div className="relative flex" data-aos="fade-right">
            <Image
              src={autoTesting}
              alt="auto testing"
              width={250}
              height={145}
            />
            <Image
              src={qaEngineer}
              alt="qa engineer"
              width={109}
              height={35}
              className="absolute mt-32 ms-48"
            />
          </div>
          <div className="relative flex" data-aos="fade-up">
            <Image
              src={jsonSchema}
              alt="json schema"
              width={217}
              height={255}
            />
            <Image
              src={apiDesigner}
              alt="api designer"
              width={109}
              height={35}
              className="absolute mt-36 ms-36"
            />
          </div>
          <div className="relative flex" data-aos="fade-left">
            <Image src={apiMock} alt="api mock" width={204} height={190} />
            <Image
              src={frontendDeveloper}
              alt="frontend developer"
              width={155}
              height={35}
              className="absolute mt-40 -mx-14"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
