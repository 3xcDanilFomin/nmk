'use client';

import { clsx } from 'clsx';
import { CircleCheck } from 'lucide-react';
import { useState } from 'react';

const items: { id: number; label: string; content: React.ReactNode[] }[] = [
  {
    id: 1,
    label: 'Деятельность',
    content: [
      <span className='text-zinc-700'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quidem aperiam quos? Debitis nobis error
        neque! Neque cupiditate deleniti, ea, at vel consequatur error velit, molestiae assumenda maxime sed debitis!
      </span>,
    ],
  },
  {
    id: 2,
    label: 'Преимущества',
    content: [
      <>
        <CircleCheck className='size-6 shrink-0 fill-emerald-400 stroke-white' />
        <span className='text-zinc-700'>
          Рост заработной платы в процессе работы. Чем опытнее работник, тем выше у него доход.
        </span>
      </>,
      <>
        <CircleCheck className='size-6 shrink-0 fill-emerald-400 stroke-white' />
        <span className='text-zinc-700'>Неограниченная сфера деятельности.</span>
      </>,
      <>
        <CircleCheck className='size-6 shrink-0 fill-emerald-400 stroke-white' />
        <span className='text-zinc-700'>
          Востребованность на рынке труда. Сегодня эта профессия является одной из самых востребованных и популярных.
        </span>
      </>,
    ],
  },
];

export const Tabs: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<number>(0);

  const handleTabClick = (index: number) => {
    setCurrentTab(index);
  };

  return (
    <div className='w-full flex flex-col items-center gap-6'>
      <div className='flex items-center gap-2 py-1.5 px-2 shadow shadow-zinc-500 rounded-lg'>
        {items.map((item, index) => (
          <button
            className={clsx(
              currentTab === index ? 'bg-blue-500 text-white' : 'text-zinc-700 hover:text-blue-500',
              'py-1 px-2 rounded-lg transition-colors duration-300',
            )}
            onClick={() => handleTabClick(index)}
            key={item.id}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className='flex flex-col gap-4'>
        {items.map((item, index) => (
          <ul
            key={item.id}
            className={`flex flex-col gap-4 opacity-0 max-h-0  overflow-hidden transition-opacity duration-500 ${
              currentTab === index ? 'opacity-100 max-h-[650px]' : 'opacity-0 max-h-0'
            }`}
          >
            {item.content.map((el, contentIndex) => (
              <li key={contentIndex} className='flex items-center gap-2'>
                {el}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};
