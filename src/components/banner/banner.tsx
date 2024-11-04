import Image from 'next/image';
import { GearIcon } from './icons/gear-icon';
import Link from 'next/link';
import { ArrowRight, Play } from 'lucide-react';
import { ArrowIcon } from './icons/arrow-icon';

export const Banner = () => {
  return (
    <div className='flex flex-col gap-6'>
      <div className='flex items-center gap-12'>
        <h1 className='w-3/5 text-3xl font-medium text-blue-500'>
          Государственное бюджетное профессиональное образовательное учреждение Ростовской области <br />
          «Новочеркасский машиностроительный колледж»
        </h1>
        <div className='flex flex-col items-center'>
          <div className='flex'>
            <GearIcon className='w-32 h-32 animate-[gear-rotate_10s_linear_infinite]' />
            <GearIcon className='w-24 h-2w-24 animate-[gear-rotate-reverse_10s_linear_infinite] mt-6 -ml-1' />
            <GearIcon className='w-16 h-16 animate-[gear-rotate_8s_linear_infinite] -ml-1 mt-[17.5px]' />
          </div>
          <div className='flex'>
            <GearIcon className='w-16 h-16 animate-[gear-rotate_10s_linear_infinite] ml-[188px] -mt-[22px]' />
          </div>
        </div>
      </div>
      <div className='flex justify-between gap-12'>
        <div className='relative w-full'>
          <Image
            className='w-full h-auto rounded-md'
            unoptimized
            src='/banner-image-1.webp'
            alt='banner'
            width={650}
            height={500}
          />
          <div className='absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 p-2.5 bg-blue-600 border-[12px] border-white shadow-[0_0_15px_rgba(0,0,0,0.5)] rounded-full cursor-pointer'>
            <Play className='w-5 h-5 fill-white stroke-none' />
          </div>
        </div>
        <div className='relative w-2/3 flex flex-col gap-4'>
          <div className='absolute -top-16 -left-20 -scale-y-100'>
            <ArrowIcon className='size-20' />
          </div>
          <div className='flex items-center gap-2'>
            <span className='w-20 h-[3px] bg-blue-600 rounded' />
            <h2 className='text-xl text-blue-600 font-semibold  leading-3'>Почему именно мы</h2>
          </div>
          <p className='text-sm text-zinc-600'>
            Выбор Новочеркасского машиностроительного колледжа — это шаг к успешному будущему. С богатой историей,
            которая насчитывает более 130 лет, мы гордимся высоким уровнем подготовки специалистов, сочетающим традиции
            и современные технологии. Наши преподаватели — опытные профессионалы, многие из которых имеют награды и
            признание в сфере образования, что обеспечивает качественное обучение и индивидуальный подход к каждому
            студенту. Выбирая нас, вы выбираете надежный путь к карьере в машиностроительной отрасли!
          </p>
          <Link
            href='/history'
            className='group w-fit flex items-center gap-2 text-white bg-blue-600 px-6 py-3 rounded transition duration-300 hover:bg-blue-700'
          >
            <span>Наша история</span>
            <ArrowRight className='w-5 h-5 stroke-current transition-transform group-hover:translate-x-1' />
          </Link>
        </div>
      </div>
    </div>
  );
};
