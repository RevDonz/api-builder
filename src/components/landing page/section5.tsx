import React from 'react';
import DevTeam from '../../public/development-team.png';
import Image from 'next/image';

export default function Section5() {
  return (
    <section className="bg-black text-white">
      <div>
        <h1 className="text-center text-5xl pt-28 pb-10">
          Implement REAL API Design-first
        </h1>
        <h3 className="text-center">
          Apidog implements API Design-first, facilitating the effortless
          synchronization of API, specifications and modifications across the
          entire API lifecycle.
        </h3>
      </div>
      <div className="flex justify-center items-center">
        <Image
          src={'/development-team.png'}
          alt="development team"
          width={1280}
          height={200}
        />
      </div>
    </section>
  );
}
