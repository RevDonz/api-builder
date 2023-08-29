import React from 'react';
import Image from 'next/image';
import Jason from '@/assets/profile-picture/jason.png';
import Halima from '@/assets/profile-picture/halima.png';
import Ricardo from '@/assets/profile-picture/ricardo.png';
import Olawale from '@/assets/profile-picture/olawale.png';
import Maria from '@/assets/profile-picture/maria.png';

export default function Section7() {
  return (
    <section className="bg-black text-white">
      <div>
        <h1 className="text-center text-5xl pt-28 pb-10">
          Developers Love Apidog
        </h1>
        <h3 className="text-center pb-10">
          Many teams don't adopt advanced development practices simply because
          they lack the corresponding advanced tools. <br />A good tool is the
          embodiment of advanced productivity.
        </h3>
      </div>
      <div className="justify-center items-center">
        <div className="grid gap-10 sm:px-24 px-5 lg:px-40 md:grid-cols-2">
          <div className="bg-blue-950 py-10 px-10 rounded-2xl">
            <p>
              “Apidog has helped me realize the advantages of taking an API
              design-first approach. By defining APIs for each endpoint,
              Apidog's response validation tool enables me to quickly catch and
              fix errors, which boosts my productivity and saves me time.”
            </p>
            <div className="flex space-x-44">
              <div className="flex pt-6 space-x-4">
                <Image src={Jason} alt="jason" width={48} height={48} />
                <div>
                  <p>Jason Clark</p>
                  <p className="text-indigo-500">Back-End Developer</p>
                </div>
              </div>
              <div className="pt-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="32"
                  fill="none"
                >
                  <path
                    fill="#7F66FF"
                    fill-opacity="0.08"
                    d="M35.291 4 36 5.054c-.567 2.331-1.307 4.822-2.22 7.473a161.07 161.07 0 0 1-2.882 7.952A157.891 157.891 0 0 1 27.732 28h-8.126a312.27 312.27 0 0 0 1.89-8.048 310.62 310.62 0 0 0 1.748-8.431c.535-2.778.96-5.285 1.276-7.521H35.29Zm-19.7 0 .661 1.054c-.567 2.331-1.307 4.822-2.22 7.473a161.07 161.07 0 0 1-2.882 7.952A157.922 157.922 0 0 1 7.984 28H0c.44-1.884.898-3.864 1.37-5.94.473-2.108.913-4.216 1.323-6.323.44-2.14.835-4.2 1.181-6.18.378-2.012.677-3.864.898-5.557H15.59Z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="bg-blue-950 py-10 px-10 rounded-2xl">
            <p>
              “My favorite feature of Apidog is the automated testing for
              regression testing. Whenever there is a change in the API, I can
              automatically synchronize the latest definition without having to
              modify my test cases each time, which used to be the most tedious
              part of my work.”
            </p>
            <div className="flex space-x-44">
              <div className="flex pt-6 space-x-4">
                <Image src={Halima} alt="jason" width={48} height={48} />
                <div>
                  <p>Halima Bello</p>
                  <p className="text-indigo-500">QA Engineer</p>
                </div>
              </div>
              <div className="pt-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="32"
                  fill="none"
                >
                  <path
                    fill="#7F66FF"
                    fill-opacity="0.08"
                    d="M35.291 4 36 5.054c-.567 2.331-1.307 4.822-2.22 7.473a161.07 161.07 0 0 1-2.882 7.952A157.891 157.891 0 0 1 27.732 28h-8.126a312.27 312.27 0 0 0 1.89-8.048 310.62 310.62 0 0 0 1.748-8.431c.535-2.778.96-5.285 1.276-7.521H35.29Zm-19.7 0 .661 1.054c-.567 2.331-1.307 4.822-2.22 7.473a161.07 161.07 0 0 1-2.882 7.952A157.922 157.922 0 0 1 7.984 28H0c.44-1.884.898-3.864 1.37-5.94.473-2.108.913-4.216 1.323-6.323.44-2.14.835-4.2 1.181-6.18.378-2.012.677-3.864.898-5.557H15.59Z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="grid sm:grid-cols-3 gap-10 pt-9 px-5 lg:px-40 md:grid-cols-3">
          <div className="bg-blue-950 py-10 px-10 rounded-2xl">
            <p>
              “I don't have to concatenate API request parameters or fabricate
              mock data. With the API specification in hand, everything is
              readily available, and just a single click solves all the painful
              issues.”
            </p>
            <div className="flex space-x-3">
              <div className="flex pt-6 space-x-4">
                <Image src={Ricardo} alt="jason" width={48} height={48} />
                <div>
                  <p>Ricardo Da Silva</p>
                  <p className="text-indigo-500">Front-end Developer</p>
                </div>
              </div>
              <div className="pt-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="32"
                  fill="none"
                >
                  <path
                    fill="#7F66FF"
                    fill-opacity="0.08"
                    d="M35.291 4 36 5.054c-.567 2.331-1.307 4.822-2.22 7.473a161.07 161.07 0 0 1-2.882 7.952A157.891 157.891 0 0 1 27.732 28h-8.126a312.27 312.27 0 0 0 1.89-8.048 310.62 310.62 0 0 0 1.748-8.431c.535-2.778.96-5.285 1.276-7.521H35.29Zm-19.7 0 .661 1.054c-.567 2.331-1.307 4.822-2.22 7.473a161.07 161.07 0 0 1-2.882 7.952A157.922 157.922 0 0 1 7.984 28H0c.44-1.884.898-3.864 1.37-5.94.473-2.108.913-4.216 1.323-6.323.44-2.14.835-4.2 1.181-6.18.378-2.012.677-3.864.898-5.557H15.59Z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="bg-blue-950 py-10 px-10 rounded-2xl">
            <p>
              “With Apidog's automated testing and documentation features, I can
              focus on creating high-quality APIs and delivering exceptional
              products.”
            </p>
            <div className="flex space-x-10">
              <div className="flex pt-6 space-x-4">
                <Image src={Olawale} alt="jason" width={48} height={48} />
                <div>
                  <p>Olawale Adegoke</p>
                  <p className="text-indigo-500">Full-stack Engineer</p>
                </div>
              </div>
              <div className="pt-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="32"
                  fill="none"
                >
                  <path
                    fill="#7F66FF"
                    fill-opacity="0.08"
                    d="M35.291 4 36 5.054c-.567 2.331-1.307 4.822-2.22 7.473a161.07 161.07 0 0 1-2.882 7.952A157.891 157.891 0 0 1 27.732 28h-8.126a312.27 312.27 0 0 0 1.89-8.048 310.62 310.62 0 0 0 1.748-8.431c.535-2.778.96-5.285 1.276-7.521H35.29Zm-19.7 0 .661 1.054c-.567 2.331-1.307 4.822-2.22 7.473a161.07 161.07 0 0 1-2.882 7.952A157.922 157.922 0 0 1 7.984 28H0c.44-1.884.898-3.864 1.37-5.94.473-2.108.913-4.216 1.323-6.323.44-2.14.835-4.2 1.181-6.18.378-2.012.677-3.864.898-5.557H15.59Z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="bg-blue-950 py-10 px-10 rounded-2xl">
            <p>
              “Our engineers proactively maintain standardized API documentation
              because they have found it enhances the efficiency of every team
              member. ”
            </p>
            <div className="flex space-x-9">
              <div className="flex pt-6 space-x-4">
                <Image src={Maria} alt="jason" width={48} height={48} />
                <div>
                  <p>Maria Gonzalez</p>
                  <p className="text-indigo-500">Tech Manager</p>
                </div>
              </div>
              <div className="pt-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="32"
                  fill="none"
                >
                  <path
                    fill="#7F66FF"
                    fill-opacity="0.08"
                    d="M35.291 4 36 5.054c-.567 2.331-1.307 4.822-2.22 7.473a161.07 161.07 0 0 1-2.882 7.952A157.891 157.891 0 0 1 27.732 28h-8.126a312.27 312.27 0 0 0 1.89-8.048 310.62 310.62 0 0 0 1.748-8.431c.535-2.778.96-5.285 1.276-7.521H35.29Zm-19.7 0 .661 1.054c-.567 2.331-1.307 4.822-2.22 7.473a161.07 161.07 0 0 1-2.882 7.952A157.922 157.922 0 0 1 7.984 28H0c.44-1.884.898-3.864 1.37-5.94.473-2.108.913-4.216 1.323-6.323.44-2.14.835-4.2 1.181-6.18.378-2.012.677-3.864.898-5.557H15.59Z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
