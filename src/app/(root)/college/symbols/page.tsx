import Image from 'next/image';

import { Title } from '@/components';
import flagImage from '../../../../../public/flag.jpg';

export default function CollegeSymbolsPage() {
  return (
    <main className='flex flex-col gap-24 py-12'>
      <div className='w-full flex flex-col gap-12 items-center max-w-screen-xl mx-auto px-3'>
        <Title className='self-start' label='Символы колледжа' />
        <article className='w-full flex gap-12 text-zinc-700 indent-12'>
          <Image className='max-w-lg w-full h-full rounded-lg' src={flagImage} alt='Флаг НМК' />
          <section className=''>
            <a
              className='w-fit  text-lg text-blue-500 border-b border-blue-500 font-medium transition-colors duration-300 hover:text-blue-700'
              href='https://nmk35.ru/sites/default/files/upload/gimn_0.pdf'
              target='_blank'
            >
              Слова гимна колледжа
            </a>
          </section>
        </article>
      </div>
    </main>
  );
}
