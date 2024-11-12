import Image from 'next/image';
import React from 'react';

const Home = () => {
  return (
    <main className='w-auto overflow-x-hidden flex flex-col h-full'>
      <section className='w-screen h-screen bg-[url(/images/hero.jpg)] bg-cover bg-center py-12 overflow-hidden'>
        <div className='container mx-auto w-full h-full relative'>
          <nav className='flex justify-between items-center absolute w-full z-10 top-0'>
            <Image
              src='/logo.png'
              alt='logo'
              width={200}
              height={100}
              className='h-auto w-32'
            />
            <div className='flex gap-4 text-xl h-full items-center'>
              <button className='bg-transparent rounded-full border-2 border-white w-full h-full px-4 py-2'>
                Login
              </button>
              <button className='text-nowrap bg-red-800 px-4 py-2 rounded-full border-2 border-red-800'>
                Sign Up
              </button>
            </div>
          </nav>
          <div className='absolute right-0 z-10 top-0 w-[50%] h-full flex flex-col justify-center items-end gap-14 translate-y-[8%] pr-16'>
            <h1 className='text-7xl text-right font-bold'>
              IMMERSIVE WORLD BUILDING STARTS FROM HERE
            </h1>
            <button className='text-xl font-semibold bg-red-800 rounded-full px-10 py-4'>
              create your world
            </button>
          </div>
        </div>
        <div className='w-full h-full absolute bottom-0 bg-gradient-to-t from-black to-transparent'></div>
      </section>
    </main>
  );
};

export default Home;
