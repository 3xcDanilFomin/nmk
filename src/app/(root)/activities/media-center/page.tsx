'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';

import { DocumentList, FieldSearch, Modal, Title } from '@/components';

export default function MediaCenterPage() {
  const [isModalActive, setModalActive] = useState(false);

  const handleModalOpen = () => {
    setModalActive(true);
  };

  const handleModalClose = () => {
    setModalActive(false);
  };

  return (
    <main className='flex flex-col gap-12 py-12'>
      <div className='w-full max-w-screen-xl mx-auto px-3'>
        <Title label='Медиацентр' className='self-start' />
      </div>
      <section className='w-full flex flex-col gap-8 max-w-screen-xl mx-auto px-3'>
        <div className='flex flex-col gap-4'>
          <div>
            <FieldSearch />
          </div>
          <ul className='flex items-center gap-3'>
            <li>
              <button className='text-sm text-white bg-blue-500 py-2 px-4 rounded'>Все медиа</button>
            </li>
            <li>
              <button className='text-sm text-zinc-400 bg-gray-200 py-2 px-4 rounded transition-colors duration-300 hover:bg-gray-300 hover:text-blue-500'>
                Фотографии
              </button>
            </li>
            <li>
              <button className='text-sm text-zinc-400 bg-gray-200 py-2 px-4 rounded transition-colors duration-300 hover:bg-gray-300 hover:text-blue-500'>
                Видео
              </button>
            </li>
          </ul>
        </div>
        <ul className='grid grid-cols-3 gap-4'>
          <li className='flex flex-col gap-4 font-medium'>
            <div className='relative rounded-lg overflow-hidden'>
              <Image
                className='w-full h-72  object-cover object-center'
                src='/news-1.webp'
                alt='dsdsd'
                width={450}
                height={300}
              />
              <div className='absolute inset-0 flex justify-center items-center bg-black bg-opacity-40'>
                <button
                  className='group bg-gray-200 bg-opacity-30 py-1 px-3 border border-white/50 rounded-md transition-colors duration-300 hover:bg-blue-500 hover:border-blue-500'
                  onClick={handleModalOpen}
                >
                  <Play className='size-5 stroke-white stroke-[1.5px] transition-colors duration-300 group-hover:fill-white' />
                </button>
              </div>
            </div>
            <p className='text-sm line-clamp-3 shrink-0 text-zinc-600'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <time className='text-xs text-zinc-400 mt-auto' dateTime='2021-10-12'>
              12 октября 2021
            </time>
          </li>
          <li className='flex flex-col gap-4 font-medium'>
            <div className='relative rounded-lg overflow-hidden'>
              <Image
                className='w-full h-72  object-cover object-center'
                src='/news-2.webp'
                alt='dsdsd'
                width={450}
                height={300}
              />
              <div className='absolute inset-0 flex justify-center items-center bg-black bg-opacity-40'>
                <button
                  className='group bg-gray-200 bg-opacity-30 py-1 px-3 border border-white/50 rounded-md transition-colors duration-300 hover:bg-blue-500 hover:border-blue-500'
                  onClick={handleModalOpen}
                >
                  <Play className='size-5 stroke-white stroke-[1.5px] transition-colors duration-300 group-hover:fill-white' />
                </button>
              </div>
            </div>
            <p className='text-sm line-clamp-3 shrink-0 text-zinc-600'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur alias, accusamus cumque ipsa explicabo
              non minus, hic deleniti deserunt ipsam laboriosam, fugiat fugit omnis nemo itaque dicta neque totam
              laudantium!
            </p>
            <time className='text-xs text-zinc-400 mt-auto' dateTime='2021-10-12'>
              12 октября 2021
            </time>
          </li>
          <li className='flex flex-col gap-4 font-medium'>
            <div className='relative rounded-lg overflow-hidden'>
              <Image
                className='w-full h-72  object-cover object-center'
                src='/news-3.webp'
                alt='dsdsd'
                width={450}
                height={300}
              />
              <div className='absolute inset-0 flex justify-center items-center bg-black bg-opacity-40'>
                <button
                  className='group bg-gray-200 bg-opacity-30 py-1 px-3 border border-white/50 rounded-md transition-colors duration-300 hover:bg-blue-500 hover:border-blue-500'
                  onClick={handleModalOpen}
                >
                  <Play className='size-5 stroke-white stroke-[1.5px] transition-colors duration-300 group-hover:fill-white' />
                </button>
              </div>
            </div>
            <p className='text-sm line-clamp-3 shrink-0 text-zinc-600'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur alias, accusamus cumque ipsa explicabo
              non minus.
            </p>
            <time className='text-xs text-zinc-400 mt-auto' dateTime='2021-10-12'>
              12 октября 2021
            </time>
          </li>
          <li className='flex flex-col gap-4 font-medium'>
            <div className='relative rounded-lg overflow-hidden'>
              <Image
                className='w-full h-72  object-cover object-center'
                src='/news-4.webp'
                alt='dsdsd'
                width={450}
                height={300}
              />
              <div className='absolute inset-0 flex justify-center items-center bg-black bg-opacity-40'>
                <button
                  className='group bg-gray-200 bg-opacity-30 py-1 px-3 border border-white/50 rounded-md transition-colors duration-300 hover:bg-blue-500 hover:border-blue-500'
                  onClick={handleModalOpen}
                >
                  <Play className='size-5 stroke-white stroke-[1.5px] transition-colors duration-300 group-hover:fill-white' />
                </button>
              </div>
            </div>
            <p className='text-sm line-clamp-3 shrink-0 text-zinc-600'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur alias, accusamus cumque ipsa explicabo
              non minus, hic deleniti deserunt ipsam laboriosam, fugiat fugit omnis nemo itaque dicta neque totam
              laudantium!
            </p>
            <time className='text-xs text-zinc-400 mt-auto' dateTime='2021-10-12'>
              12 октября 2021
            </time>
          </li>
          <li className='flex flex-col gap-4 font-medium'>
            <div className='relative rounded-lg overflow-hidden'>
              <Image
                className='w-full h-72  object-cover object-center'
                src='/news-5.webp'
                alt='dsdsd'
                width={450}
                height={300}
              />
              <div className='absolute inset-0 flex justify-center items-center bg-black bg-opacity-40'>
                <button
                  className='group bg-gray-200 bg-opacity-30 py-1 px-3 border border-white/50 rounded-md transition-colors duration-300 hover:bg-blue-500 hover:border-blue-500'
                  onClick={handleModalOpen}
                >
                  <Play className='size-5 stroke-white stroke-[1.5px] transition-colors duration-300 group-hover:fill-white' />
                </button>
              </div>
            </div>
            <p className='text-sm line-clamp-3 shrink-0 text-zinc-600'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur alias, accusamus cumque ipsa explicabo
              non minus, hic deleniti deserunt ipsam laboriosam, fugiat fugit omnis nemo itaque dicta neque totam
              laudantium!
            </p>
            <time className='text-xs text-zinc-400 mt-auto' dateTime='2021-10-12'>
              12 октября 2021
            </time>
          </li>
        </ul>
      </section>
      <section className='w-full flex flex-col gap-2 max-w-screen-xl mx-auto px-3'>
        <DocumentList label='Документы' />
      </section>
      <div>
        {isModalActive && (
          <Modal onClose={handleModalClose}>
            <iframe
              className='rounded-md'
              src='https://vk.com/video_ext.php?oid=-6145033&id=456239231&hd=2'
              width='853'
              height='480'
              allow='encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;'
              frameBorder='0'
              allowFullScreen
            ></iframe>
            <div className='absolute inset-0 -z-40 bg-zinc-950 rounded-md' />
          </Modal>
        )}
      </div>
    </main>
  );
}
