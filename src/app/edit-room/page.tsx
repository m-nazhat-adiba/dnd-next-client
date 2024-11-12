import Image from 'next/image';
import React from 'react';
import { Icon } from '@iconify/react';

const EditRoom = () => {
  return (
    <main className='w-futo overflow-x-hidden h-full'>
      <section className='relative w-screen h-screen flex flex-col'>
        {/* Cover Image */}
        <figure className='bg-[url(/images/room.jpg)] h-[75%] w-full bg-cover relative'>
          <div className='w-full h-full bg-gradient-to-t from-black to-[rgb(0,0,0,0)_70%]'></div>
          <div className='absolute top-0 h-2/3 w-full flex items-center justify-center z-10 group'>
            <button className='bg-black hidden gap-1 items-center px-4 py-2 rounded-full origin-right bg-opacity-50 group-hover:flex'>
              <Icon icon='akar-icons:edit' className='h-10 w-10' />
              <span>Edit Cover Image</span>
            </button>
          </div>
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
                <button className='bg-transparent rounded-full border-2 border-white w-full h-auto px-4 py-2'>
                  Cancel
                </button>
                <div className='flex w-full'>
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
            <div className='px-8 flex justify-between h-full'>
              {/* info */}
              <div className='flex flex-col gap-6 w-[60%] h-full items-start justify-end'>
                <button>
                  <Icon icon='akar-icons:edit' className='h-10 w-10' />
                </button>
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
              {/* control */}
              <div className='flex h-full items-center'>
                <div className='flex flex-col gap-5 px-3 py-12 rounded-full bg-gray-800 bg-opacity-50'>
                  <button className='flex flex-col items-center justify-center gap-1 text-gray-400'>
                    <Icon icon='akar-icons:pencil' className='w-10 h-auto' />
                    <span>General</span>
                  </button>
                  <button className='flex flex-col items-center justify-center gap-1'>
                    <Icon
                      icon='akar-icons:music-note'
                      className='w-10 h-auto'
                    />
                    <span>Tracks</span>
                  </button>
                  <button className='flex flex-col items-center justify-center gap-1'>
                    <Icon
                      icon='akar-icons:arrow-forward-thick'
                      className='w-10 h-auto'
                    />
                    <span>Share</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default EditRoom;
