import React from 'react'
import Image from 'next/image';
import nile from '@/images/nile.jpg';
import nilemap from '@/images/nilemap.png';

const page = () => {
  return (
    <>
      <div className="about flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-10 md:py-20">
        <div className="about-left text-lg md:text-xl text-gray-800 leading-relaxed space-y-4 md:max-w-xl">
          <h1 className="text-2xl font-semibold text-black">The Nile River</h1>
          <p className="text-base md:text-lg">
            The Nile (also known as the Nile River or River Nile) is a major north-flowing river in northeastern Africa.
            It flows into the Mediterranean Sea and is historically considered the longest river in the world, though
            this has been contested by research suggesting that the Amazon River might be slightly longer.
          </p>
          <p className="text-base md:text-lg">
            The Nile's drainage basin covers eleven countries: the Democratic Republic of the Congo, Tanzania, Burundi,
            Rwanda, Uganda, Kenya, Ethiopia, Eritrea, South Sudan, Sudan, and Egypt. It is the primary water source of
            Egypt, Sudan, and South Sudan, and plays a vital economic role in agriculture and fishing in these countries.
          </p>
        </div>
        <div className="about-right flex flex-col items-center space-y-4 md:space-y-6 mt-8 md:mt-0">
          <Image src={nile} className="h-[40vh] w-[40vw] object-cover rounded-lg " alt="nile"/>
          <Image src={nilemap} className="h-[40vh] w-[60vw] object-contain rounded-lg " alt="nilemap"/>
        </div>
      </div>
    </>
  );
};

export default page;
