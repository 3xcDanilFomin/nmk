import { ArrowRight, CalendarDays } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const News: React.FC = () => {
  return (
    <section className='flex flex-col gap-6'>
      <header className='flex items-center justify-between gap-7'>
        <div className='flex items-center gap-2'>
          <span className='w-28 h-1 rounded bg-blue-600' />
          <h2 className='text-4xl font-semibold text-blue-600 text-nowrap leading-3'>Наши последние новости</h2>
        </div>
      </header>
      <div className='flex gap-4'>
        <article className='group relative w-full rounded-lg overflow-hidden'>
          <Image
            className='w-full h-full object-cover object-center'
            src='/news-1.webp'
            alt='Новость 1'
            width={600}
            height={600}
            unoptimized
          />
          <div className='absolute inset-0 flex items-end bg-gradient-to-t to-transparent from-black/70'>
            <div className='flex flex-col gap-2 p-6 text-white'>
              <h4 className='text-2xl font-semibold truncate'>Новость 1</h4>
              <div className='flex items-center gap-2'>
                <CalendarDays className='size-5 stroke-zinc-300' />
                <span className='text-zinc-300'>10.10.2024</span>
              </div>
            </div>
          </div>
          <Link
            className='absolute inset-0 flex items-center justify-center bg-neutral-900/55 opacity-0 transition-opacity duration-500 group-hover:opacity-100'
            href='/'
          >
            <div className='group flex items-center gap-1 text-white font-light bg-blue-950 py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-blue-800'>
              <span>Подробнее</span>
              <ArrowRight className='size-5 stroke-[1.5px]' />
            </div>
          </Link>
        </article>
        <ul className='grid grid-cols-[repeat(2,_280px)] gap-4'>
          <li className='group rounded-lg shadow-[0_0_6px_rgba(0,0,0,0.2)] overflow-hidden'>
            <article className='relative w-full rounded-lg overflow-hidden'>
              <Image
                className='w-full h-40 object-cover object-center'
                src='/news-2.webp'
                alt='Новость 2'
                width={600}
                height={600}
                unoptimized
              />
              <div className='flex flex-col gap-2 p-3'>
                <h4 className='text-blue-800 font-medium truncate'>Новость 2</h4>
                <div className='flex items-center gap-2'>
                  <CalendarDays className='size-4 stroke-blue-600' />
                  <span className='text-sm text-blue-600'>10.10.2024</span>
                </div>
              </div>
              <Link
                className='absolute inset-0 flex items-center justify-center bg-neutral-900/55 opacity-0 transition-opacity duration-500 group-hover:opacity-100'
                href='/'
              >
                <div className='group flex items-center gap-1 text-white font-light bg-blue-950 py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-blue-800'>
                  <span>Подробнее</span>
                  <ArrowRight className='size-5 stroke-[1.5px]' />
                </div>
              </Link>
            </article>
          </li>
          <li className='group rounded-lg shadow-[0_0_6px_rgba(0,0,0,0.2)] overflow-hidden'>
            <article className='relative w-full rounded-lg overflow-hidden'>
              <Image
                className='w-full h-40 object-cover object-center'
                src='/news-3.webp'
                alt='Новость 3'
                width={600}
                height={600}
                unoptimized
              />
              <div className='flex flex-col gap-2 p-3'>
                <h4 className='text-blue-800 font-medium truncate'>Новость 3</h4>
                <div className='flex items-center gap-2'>
                  <CalendarDays className='size-4 stroke-blue-600' />
                  <span className='text-sm text-blue-600'>10.10.2024</span>
                </div>
              </div>
              <Link
                className='absolute inset-0 flex items-center justify-center bg-neutral-900/55 opacity-0 transition-opacity duration-500 group-hover:opacity-100'
                href='/'
              >
                <div className='group flex items-center gap-1 text-white font-light bg-blue-950 py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-blue-800'>
                  <span>Подробнее</span>
                  <ArrowRight className='size-5 stroke-[1.5px]' />
                </div>
              </Link>
            </article>
          </li>
          <li className='group rounded-lg shadow-[0_0_6px_rgba(0,0,0,0.2)] overflow-hidden'>
            <article className='relative w-full rounded-lg overflow-hidden'>
              <Image
                className='w-full h-40 object-cover object-center'
                src='/news-4.webp'
                alt='Новость 4'
                width={600}
                height={600}
                unoptimized
              />
              <div className='flex flex-col gap-2 p-3'>
                <h4 className='text-blue-800 font-medium truncate'>Новость 4</h4>
                <div className='flex items-center gap-2'>
                  <CalendarDays className='size-4 stroke-blue-600' />
                  <span className='text-sm text-blue-600'>10.10.2024</span>
                </div>
              </div>
              <Link
                className='absolute inset-0 flex items-center justify-center bg-neutral-900/55 opacity-0 transition-opacity duration-500 group-hover:opacity-100'
                href='/'
              >
                <div className='group flex items-center gap-1 text-white font-light bg-blue-950 py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-blue-800'>
                  <span>Подробнее</span>
                  <ArrowRight className='size-5 stroke-[1.5px]' />
                </div>
              </Link>
            </article>
          </li>
          <li className='group rounded-lg shadow-[0_0_6px_rgba(0,0,0,0.2)] overflow-hidden'>
            <article className='relative w-full rounded-lg overflow-hidden'>
              <Image
                className='w-full h-40 object-cover object-center'
                src='/news-5.webp'
                alt='Новость 5'
                width={600}
                height={600}
                unoptimized
              />
              <div className='flex flex-col gap-2 p-3'>
                <h4 className='text-blue-800 font-medium truncate'>Новость 5</h4>
                <div className='flex items-center gap-2'>
                  <CalendarDays className='size-4 stroke-blue-600' />
                  <span className='text-sm text-blue-600'>10.10.2024</span>
                </div>
              </div>
              <Link
                className='absolute inset-0 flex items-center justify-center bg-neutral-900/55 opacity-0 transition-opacity duration-500 group-hover:opacity-100'
                href='/'
              >
                <div className='group flex items-center gap-1 text-white font-thin bg-blue-950 py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-blue-800'>
                  <span>Подробнее</span>
                  <ArrowRight className='size-5 stroke-[1.5px]' />
                </div>
              </Link>
            </article>
          </li>
        </ul>
      </div>
      <Link
        href='/news'
        className='w-fit self-center text-white bg-blue-600 px-6 py-3 rounded transition duration-300 hover:bg-blue-700'
      >
        Все новости
      </Link>
    </section>
  );
};
