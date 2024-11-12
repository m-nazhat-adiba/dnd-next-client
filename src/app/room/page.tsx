import Image from 'next/image';
import React from 'react';
import { Icon } from '@iconify/react';

interface CardProps {
  data?: {
    name: string;
    image: string;
  };
}

const PlayerCard: React.FC<CardProps> = ({ data }) => {
  return (
    <div className='flex items-center gap-4'>
      <Image
        src={data?.image || '/images/avatar.jpg'}
        height={100}
        width={100}
        alt='avatar'
        className='rounded-full h-12 w-12'
      />
      <span className='whitespace-nowrap'>
        {data?.name || 'Nyx Frostsmith'}
      </span>
    </div>
  );
};

const Room = () => {
  return (
    <main className='w-futo overflow-x-hidden h-full'>
      <section className='relative w-screen h-screen flex flex-col'>
        {/* Cover Image */}
        <figure className='bg-[url(/images/room.jpg)] h-[75%] w-full bg-cover'>
          <div className='w-full h-full bg-gradient-to-t from-black to-[rgb(0,0,0,0)_70%]'></div>
        </figure>

        {/* Content */}
        <div className='w-full h-full absolute'>
          <div className='container mx-auto flex flex-col justify-between h-full w-full py-12'>
            {/* nav */}
            <nav className='flex justify-between items-center w-full'>
              <Image
                src='/logo.png'
                alt='logo'
                width={200}
                height={100}
                className='h-auto w-32'
              />
              <div className='flex gap-8 text-xl h-auto items-center'>
                <button className='bg-transparent rounded-full border-2 border-white w-full h-full px-2 py-2'>
                  Leave World
                </button>
                <div className='flex items-center gap-4'>
                  <span className='whitespace-nowrap'>Nyx Frozensmith</span>
                  <Image
                    src='/images/avatar.jpg'
                    height={100}
                    width={100}
                    alt='avatar'
                    className='rounded-full h-12 w-12'
                  />
                </div>
              </div>
            </nav>

            {/* details */}
            <div className='px-8 flex justify-between'>
              <div className='flex flex-col gap-6 w-[60%]'>
                <h1 className='text-6xl font-bold'>
                  Curse of Niflheim, The Land of Winter
                </h1>
                <p className='text-xl font-medium'>
                  In the distant, frostbound realm of Niflheim, an ancient curse
                  grips the land in perpetual winter. Once vibrant and mystical,
                  it now echoes with silence and shadows, where icy winds carry
                  whispers of forgotten legends. Adventurers are drawn by tales
                  of a powerful artifact said to lift the curse and bring warmth
                  back to the frozen expanse. But lurking in the snow-choked
                  ruins are unimaginable horrors and Skadi, the merciless Winter
                  Queen who guards her realm with eyes cold as death. As your
                  party steps into the frozen unknown, will you unravel the
                  secrets and break the curse, or succumb to the unforgiving
                  grip of Niflheim?
                </p>
                <div className='flex gap-2 mt-2'>
                  <Icon icon='akar-icons:play' className='h-6 w-auto' />
                  <span className='text-xl italic'>Eternal Frost</span>
                </div>
              </div>
              <div>
                <div className='bg-gray-700 bg-opacity-50 pl-6 pr-12 py-6 flex flex-col items-start justify-center h-auto gap-5'>
                  <span>Adventurers</span>
                  <PlayerCard />
                  <PlayerCard />
                  <PlayerCard />
                  <PlayerCard />
                  <PlayerCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Room;
