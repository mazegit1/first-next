import React from 'react';
import Image from 'next/image';
import image from '@/images/image.jpg';

const Page: React.FC = () => {
  return (
    <div className="home bg-[#e6ffe6] flex items-center justify-between gap-20 px-20 py-48">
      <div className="home-left">
        <h1 className="text-8xl">Nature | The long river</h1>
      </div>
      <div className="home-right">
        <Image src={image} alt="Mazegit First Next App" className='w-[100vh] rounded-3xl overflow-hidden h-[50vh]'/>
      </div>
    </div>
  );
};

export default Page;
