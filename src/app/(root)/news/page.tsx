import { Button, Title } from '@/components';
import newsImage from '../../../../public/news-1.webp';
import Image from 'next/image';
import Link from 'next/link';
import { CalendarDays, MoveRight } from 'lucide-react';
import { ROUTES_CONFIG } from '@/config';

export default function NewsPage() {
  return (
    <main className='flex flex-col gap-24 py-12'>
      <div className='w-full max-w-screen-xl mx-auto px-3 '>
        <section className='flex flex-col gap-8'>
          <Title label='Последние новости' />
          <ul className='grid grid-cols-3 gap-6'>
            {new Array(6).fill(0).map((el, i) => (
              <li key={i} className='flex flex-col gap-4 p-4 rounded-lg shadow shadow-zinc-700'>
                <Image className='w-full h-auto rounded-lg' src={newsImage} alt='Новость' />
                <div className='flex flex-col gap-2 px-3'>
                  <h2 className='text-lg text-blue-800 font-medium truncate leading-none'>
                    Какой-то очень длинный заголовок для новости
                  </h2>
                  <p className='text-sm text-zinc-600 font-normal line-clamp-3'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat enim dolorum quo. Saepe esse
                    doloribus labore, quam molestiae excepturi voluptatibus delectus aspernatur nobis eveniet dolorum
                    quas optio qui aperiam debitis! Molestias eaque vel, magni nemo atque eveniet recusandae nobis sunt
                    soluta perferendis reprehenderit! A cupiditate laborum natus facere iure reiciendis commodi, ea
                    quidem incidunt omnis harum itaque magni, accusantium vero.
                  </p>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-2'>
                      <CalendarDays className='size-4 stroke-blue-600' />
                      <span className='text-sm text-blue-600'>10.10.2024</span>
                    </div>
                    <Link href={`${ROUTES_CONFIG.NEWS}/${i}`}>
                      <Button className='group text-blue-900' size='sm' variant='filled'>
                        <span className='text-sm'>Подробнее</span>
                        <MoveRight className='size-5 stroke-[1.5px] stroke-current transition-transform duration-300 group-hover:translate-x-1' />
                      </Button>
                    </Link>
                  </div>
                </div>
              </li>
            ))}
            {new Array(6).fill(0).map((el, i) => (
              <li key={i} className='h-96  rounded-lg shadow bg-zinc-500 animate-pulse'></li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
