'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import DropdownMenuResources from './landing page/dropdown-resources';
import { MenuAlt1Icon } from '@heroicons/react/solid';

export default function Navbar() {
  const [isTransparent, setIsTransparent] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const shouldTransparent = window.scrollY < 100;
      setIsTransparent(shouldTransparent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`text-white ${
        isTransparent ? 'bg-transparent' : 'bg-black'
      } fixed w-full top-0 left-0 z-50 transition-all duration-300 ease-in-out`}
    >
      <div className="flex justify-between items-center py-4 sm:justify-center">
        <div className="hidden xl:flex justify-center items-center space-x-14">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="144"
              height="32"
              fill="none"
            >
              <path
                fill="url(#logo-text_svg__a)"
                d="m24.8 22.546-.549-.548-.102-.094a11.71 11.71 0 0 0-8.165-3.313 11.71 11.71 0 0 0-8.164 3.313l-.071.07-.541.548-1.161 1.158a3.53 3.53 0 0 1-2.51 1.048 3.542 3.542 0 0 1-2.501-1.033 3.523 3.523 0 0 1 0-4.99l2.501-2.495-2.47-2.457A3.528 3.528 0 0 1 0 11.228c0-.936.373-1.833 1.036-2.495a3.542 3.542 0 0 1 5.003 0l1.812 1.807a11.719 11.719 0 0 0 8.165 3.31c3.05 0 5.98-1.188 8.164-3.31a.37.37 0 0 1 .079-.079l1.027-1.032.683-.673a3.497 3.497 0 0 1 2.494-1.032c.938 0 1.837.371 2.5 1.033a3.523 3.523 0 0 1 .765 3.858c-.182.431-.45.821-.787 1.147l-2.478 2.472 2.478 2.472A3.505 3.505 0 0 1 32 21.224c0 .935-.373 1.832-1.036 2.494a3.534 3.534 0 0 1-4.995 0l-1.177-1.172h.008Z"
              ></path>
              <path
                fill="url(#logo-text_svg__b)"
                d="M22.34.267c.43.177.82.437 1.148.765a3.523 3.523 0 0 1-.008 4.983L20.98 8.51l-.063.055a7.068 7.068 0 0 1-9.867 0l-.063-.055-2.502-2.495A3.523 3.523 0 0 1 8.5 1.04a3.534 3.534 0 0 1 4.988-.008l2.502 2.496 2.494-2.496A3.538 3.538 0 0 1 20.986 0a3.53 3.53 0 0 1 1.355.267Z"
              ></path>
              <path
                fill="url(#logo-text_svg__c)"
                d="M9.64 31.733a3.52 3.52 0 0 1-1.148-.765 3.523 3.523 0 0 1 .008-4.983l2.502-2.495.063-.055a7.069 7.069 0 0 1 9.866 0l.063.055 2.502 2.495a3.523 3.523 0 0 1-.016 4.975 3.534 3.534 0 0 1-4.988.008l-2.502-2.496-2.494 2.495A3.538 3.538 0 0 1 10.994 32a3.53 3.53 0 0 1-1.354-.267Z"
              ></path>
              <path
                fill="#fff"
                d="M51.64 20.902h-9.383l-1.396 3.18a1.452 1.452 0 0 1-.54.66 1.527 1.527 0 0 1-.828.258c-.248 0-.492-.06-.71-.173a1.473 1.473 0 0 1-.54-.48 1.412 1.412 0 0 1-.118-1.369l6.649-14.554c.191-.423.507-.783.906-1.036a2.52 2.52 0 0 1 2.693 0c.4.253.718.613.912 1.036l6.544 14.509a1.427 1.427 0 0 1-.116 1.4 1.502 1.502 0 0 1-.552.492 1.562 1.562 0 0 1-1.575-.079 1.49 1.49 0 0 1-.559-.665l-1.386-3.179Zm-1.234-2.757-3.505-7.993-3.514 7.993h7.019ZM74.143 13.138c0 4.061-2.693 6.432-7.376 6.432h-4.292v3.914c0 .402-.166.788-.46 1.072a1.6 1.6 0 0 1-1.11.444c-.417 0-.816-.16-1.111-.444a1.49 1.49 0 0 1-.46-1.072V8.516c0-.402.165-.788.46-1.072A1.599 1.599 0 0 1 60.904 7h5.863c4.654-.01 7.376 2.224 7.376 6.138Zm-3.007.073c0-2.361-1.628-3.491-4.502-3.491h-4.16v7.12h4.188c2.856 0 4.474-1.185 4.474-3.629ZM80.33 8.516v14.968c0 .402-.165.788-.46 1.072a1.607 1.607 0 0 1-1.115.444c-.418 0-.818-.16-1.114-.444a1.488 1.488 0 0 1-.461-1.072V8.516c0-.402.166-.788.461-1.072A1.607 1.607 0 0 1 78.755 7c.418 0 .819.16 1.114.444.296.284.462.67.462 1.072ZM102.381 16.005c0 5.191-4.06 8.995-9.684 8.995h-5.976c-.415 0-.813-.16-1.106-.444a1.492 1.492 0 0 1-.459-1.072V8.516a1.513 1.513 0 0 1 .458-1.072A1.609 1.609 0 0 1 86.722 7h6.052c5.577 0 9.608 3.776 9.608 9.005Zm-3.158 0a5.96 5.96 0 0 0-.448-2.438A6.117 6.117 0 0 0 97.37 11.5a6.35 6.35 0 0 0-2.136-1.36 6.51 6.51 0 0 0-2.517-.43h-4.43v12.543h4.563a6.4 6.4 0 0 0 2.477-.434 6.24 6.24 0 0 0 2.097-1.349 6.014 6.014 0 0 0 1.374-2.043 5.86 5.86 0 0 0 .426-2.404v-.018ZM124.556 15.977c0 5.08-4.306 9.023-9.868 9.023-5.561 0-9.868-3.944-9.868-9.023S109.127 7 114.688 7c5.562 0 9.868 3.889 9.868 8.977Zm-16.551 0c0 .84.174 1.672.512 2.447a6.353 6.353 0 0 0 1.457 2.07 6.692 6.692 0 0 0 2.179 1.375 6.924 6.924 0 0 0 2.564.469c1.765 0 3.457-.67 4.705-1.863 1.248-1.193 1.949-2.81 1.949-4.498a6.026 6.026 0 0 0-.505-2.424 6.273 6.273 0 0 0-1.445-2.05 6.61 6.61 0 0 0-2.162-1.358 6.836 6.836 0 0 0-2.542-.455 6.82 6.82 0 0 0-4.716 1.817c-1.258 1.18-1.976 2.787-1.996 4.47ZM142.611 16.12c.364 0 .713.138.971.383.259.245.405.578.407.926v5.25a13.053 13.053 0 0 1-7.244 2.317 9.902 9.902 0 0 1-3.707-.608 9.569 9.569 0 0 1-3.17-1.935 9.095 9.095 0 0 1-2.137-2.959 8.748 8.748 0 0 1-.768-3.519c0-5.087 4.335-8.975 9.972-8.975a11.75 11.75 0 0 1 5.876 1.59c.172.098.32.23.436.386a1.313 1.313 0 0 1-.037 1.603l-.067.091c-.22.27-.541.448-.895.497a1.438 1.438 0 0 1-1.006-.233 8.311 8.311 0 0 0-4.345-1.272 6.928 6.928 0 0 0-2.576.443c-.82.309-1.567.77-2.199 1.358a6.37 6.37 0 0 0-1.48 2.063 6.123 6.123 0 0 0-.532 2.45 6.11 6.11 0 0 0 .521 2.47c.345.78.849 1.489 1.485 2.081a6.693 6.693 0 0 0 2.214 1.368c.826.31 1.708.46 2.596.44a8.954 8.954 0 0 0 4.278-1.218v-3.634a1.26 1.26 0 0 1 .093-.524 1.32 1.32 0 0 1 .303-.447c.132-.127.29-.227.463-.295.174-.067.36-.1.548-.096Z"
              ></path>
              <defs>
                <linearGradient
                  id="logo-text_svg__a"
                  x1="0"
                  x2="32"
                  y1="7.999"
                  y2="24.999"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#3BF"></stop>
                  <stop offset="1" stop-color="#73F"></stop>
                </linearGradient>
                <linearGradient
                  id="logo-text_svg__b"
                  x1="25"
                  x2="6.5"
                  y1="11"
                  y2="-0.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#99C2FF"></stop>
                  <stop offset="1" stop-color="#fff"></stop>
                </linearGradient>
                <linearGradient
                  id="logo-text_svg__c"
                  x1="15.98"
                  x2="11.5"
                  y1="32"
                  y2="22"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#99C2FF"></stop>
                  <stop offset="1" stop-color="#fff"></stop>
                </linearGradient>
              </defs>
            </svg>
          </button>
          <DropdownMenuResources />
          <button className="inline-flex items-center border-0 py-2 px-3 rounded hover:bg-purple-950">
            Download
          </button>
          <button className="inline-flex items-center border-0 py-2 px-3 rounded hover:bg-purple-950">
            Pricing
          </button>
          <button className="inline-flex items-center border-0 py-2 px-3 rounded hover:bg-purple-950">
            API Hub
          </button>
          <div className="flex space-x-4 justify-end px-32 pr-10">
            <Link href={'/login'}>
              <button className="inline-flex items-center bg-gray-700 border-0 py-2 px-3 focus:outline-none hover:bg-purple-950 rounded">
                Sign in
              </button>
            </Link>
            <Link href={'/register'}>
              <button className="bg-violet-400 hover:bg-violet-500 text-white font-bold py-2 px-4 rounded-xl">
                Sign up for free
              </button>
            </Link>
          </div>
        </div>
        <button
          onClick={toggleMobileMenu}
          className="xl:hidden p-2 focus:outline-none"
        >
          <MenuAlt1Icon className="h-6 w-6 text-white" />
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-black py-4 px-8">
          <DropdownMenuResources />
          <button className="block mb-4 text-white border-0 py-2 px-3 rounded hover:bg-purple-950">
            Download
          </button>
          <button className="block mb-4 text-white border-0 py-2 px-3 rounded hover:bg-purple-950">
            Pricing
          </button>
          <button className="block mb-4 text-white border-0 py-2 px-3 rounded hover:bg-purple-950">
            API Hub
          </button>
          <Link href="/login">
            <button className="block mb-2 bg-gray-700 border-0 py-2 px-3 w-full focus:outline-none hover:bg-purple-950 rounded">
              Sign in
            </button>
          </Link>
          <Link href="/register">
            <button className="block text-white font-bold py-2 px-4 w-full bg-violet-400 hover:bg-violet-500 rounded-xl">
              Sign up for free
            </button>
          </Link>
        </div>
      )}
    </header>
  );
}
