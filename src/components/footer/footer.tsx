import { Logo } from '@/components';
import { Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className='bg-blue-950 pb-4'>
      <div className='max-w-screen-xl mx-auto flex flex-col gap-6 px-3'>
        <ul className='flex justify-between py-4 px-8 border-b border-blue-900'>
          <li>
            <Link className='text-blue-600 transition-colors hover:text-blue-400 hover:after:scale-100  after:content-[""] after:absolute after:left-1/2 after:-bottom-1 after:w-full after:h-[1.5px] after:bg-blue-600 after:-translate-x-1/2 after:scale-0 after:transition-transform after:duration-500' href='/'>Основные сведения</Link>
          </li>
          <li>
            <Link className='text-blue-600 transition-colors hover:text-blue-400 hover:after:scale-100  after:content-[""] after:absolute after:left-1/2 after:-bottom-1 after:w-full after:h-[1.5px] after:bg-blue-600 after:-translate-x-1/2 after:scale-0 after:transition-transform after:duration-500' href='/'>Документы</Link>
          </li>
          <li>
            <Link className='text-blue-600 transition-colors hover:text-blue-400 hover:after:scale-100  after:content-[""] after:absolute after:left-1/2 after:-bottom-1 after:w-full after:h-[1.5px] after:bg-blue-600 after:-translate-x-1/2 after:scale-0 after:transition-transform after:duration-500' href='/'>Противодействие коррупции</Link>
          </li>
          <li>
            <Link className='text-blue-600 transition-colors hover:text-blue-400 hover:after:scale-100  after:content-[""] after:absolute after:left-1/2 after:-bottom-1 after:w-full after:h-[1.5px] after:bg-blue-600 after:-translate-x-1/2 after:scale-0 after:transition-transform after:duration-500' href='/'>Карта сайта</Link>
          </li>
        </ul>
        <div className='flex justify-between'>
          <div className='flex flex-col items-center gap-3'>
            <Logo />
            <h4 className='text-sm text-white text-center'>
              Государственное бюджетное профессиональное образовательное учреждение Ростовской области
              <br />
              «Новочеркасский машиностроительный колледж»
            </h4>
            <div className='flex flex-col items-center gap-2'>
              <div className='flex items-center gap-2'>
                <span className='w-14 h-0.5 rounded bg-white' />
                <span className='text-sm text-white leading-3'>Подписаться на нас</span>
              </div>
              <div className='flex items-center gap-3'>
                <div className='p-1 flex items-center justify-center rounded-full bg-white/40'>
                  <svg className='w-6 h-6 fill-white' viewBox='0 0 192 192' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M23.073 88.132s65.458-26.782 88.16-36.212c8.702-3.772 38.215-15.843 38.215-15.843s13.621-5.28 12.486 7.544c-.379 5.281-3.406 23.764-6.433 43.756-4.54 28.291-9.459 59.221-9.459 59.221s-.756 8.676-7.188 10.185c-6.433 1.509-17.027-5.281-18.919-6.79-1.513-1.132-28.377-18.106-38.214-26.404-2.649-2.263-5.676-6.79.378-12.071 13.621-12.447 29.891-27.913 39.728-37.72 4.54-4.527 9.081-15.089-9.837-2.264-26.864 18.483-53.35 35.835-53.35 35.835s-6.053 3.772-17.404.377c-11.351-3.395-24.594-7.921-24.594-7.921s-9.08-5.659 6.433-11.693Z' />
                  </svg>
                </div>
                <div className='p-1 flex items-center justify-center rounded-full bg-white/40'>
                  <svg className='w-5 h-5 fill-white' viewBox='-2.5 0 32 32' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M16.563 15.75c-0.5-0.188-0.5-0.906-0.531-1.406-0.125-1.781 0.5-4.5-0.25-5.656-0.531-0.688-3.094-0.625-4.656-0.531-0.438 0.063-0.969 0.156-1.344 0.344s-0.75 0.5-0.75 0.781c0 0.406 0.938 0.344 1.281 0.875 0.375 0.563 0.375 1.781 0.375 2.781 0 1.156-0.188 2.688-0.656 2.75-0.719 0.031-1.125-0.688-1.5-1.219-0.75-1.031-1.5-2.313-2.063-3.563-0.281-0.656-0.438-1.375-0.844-1.656-0.625-0.438-1.75-0.469-2.844-0.438-1 0.031-2.438-0.094-2.719 0.5-0.219 0.656 0.25 1.281 0.5 1.813 1.281 2.781 2.656 5.219 4.344 7.531 1.563 2.156 3.031 3.875 5.906 4.781 0.813 0.25 4.375 0.969 5.094 0 0.25-0.375 0.188-1.219 0.313-1.844s0.281-1.25 0.875-1.281c0.5-0.031 0.781 0.406 1.094 0.719 0.344 0.344 0.625 0.625 0.875 0.938 0.594 0.594 1.219 1.406 1.969 1.719 1.031 0.438 2.625 0.313 4.125 0.25 1.219-0.031 2.094-0.281 2.188-1 0.063-0.563-0.563-1.375-0.938-1.844-0.938-1.156-1.375-1.5-2.438-2.563-0.469-0.469-1.063-0.969-1.063-1.531-0.031-0.344 0.25-0.656 0.5-1 1.094-1.625 2.188-2.781 3.188-4.469 0.281-0.5 0.938-1.656 0.688-2.219-0.281-0.625-1.844-0.438-2.813-0.438-1.25 0-2.875-0.094-3.188 0.156-0.594 0.406-0.844 1.063-1.125 1.688-0.625 1.438-1.469 2.906-2.344 4-0.313 0.375-0.906 1.156-1.25 1.031z'></path>
                  </svg>
                </div>
                <div className='p-1.5 flex items-center justify-center rounded-full bg-white/40'>
                  <svg
                    className='w-5 h-5 fill-white'
                    xmlns='http://www.w3.org/2000/svg'
                    xmlnsXlink='http://www.w3.org/1999/xlink'
                    viewBox='-271 311.2 256 179.8'
                  >
                    <path d='M-59.1,311.2h-167.8c0,0-44.1,0-44.1,44.1v91.5c0,0,0,44.1,44.1,44.1h167.8c0,0,44.1,0,44.1-44.1v-91.5 C-15,355.3-15,311.2-59.1,311.2z M-177.1,450.3v-98.5l83.8,49.3L-177.1,450.3z' />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-3 items-end'>
            <div className='flex flex-col items-end gap-2'>
              <h5 className='text-white text-sm leading-3'>Адрес колледжа</h5>
              <a
                href='#!'
                className='w-fit flex items-center gap-1.5 text-xs text-blue-400 transition-colors duration-300 hover:text-blue-600'
              >
                <MapPin className='size-4 stroke-current stroke-2' />
                <span>ул. Троицкая, 39/166, г. Новочеркасск, 346400</span>
              </a>
            </div>
            <div className='flex flex-col items-end gap-2'>
              <h5 className='text-white text-sm leading-3'>Приемная директора</h5>
              <div className='flex items-center gap-2'>
                <a
                  href='#!'
                  className='w-fit flex items-center gap-1.5 text-xs text-blue-400 transition-colors duration-300 hover:text-blue-600'
                >
                  <Phone className='size-4 stroke-current stroke-2' />
                  <span>+7 (8635) 22-25-55</span>
                </a>
                <a
                  href='#!'
                  className='w-fit flex items-center gap-1.5 text-xs text-blue-400 transition-colors duration-300 hover:text-blue-600'
                >
                  <Phone className='size-4 stroke-current stroke-2' />
                  <span>+7 (8635) 22-34-30</span>
                </a>
                <a
                  href='#!'
                  className='w-fit flex items-center gap-1.5 text-xs text-blue-400 transition-colors duration-300 hover:text-blue-600'
                >
                  <Mail className='size-4 stroke-current stroke-2' />
                  <span>nmk35@mail.ru</span>
                </a>
              </div>
            </div>
            <div className='flex flex-col items-end gap-2'>
              <h5 className='text-white text-sm leading-3'>Приемная комиссия, подготовительные курсы</h5>
              <a
                href='#!'
                className='w-fit flex items-center gap-1.5 text-xs text-blue-400 transition-colors duration-300 hover:text-blue-600'
              >
                <Phone className='size-4 stroke-current stroke-2' />
                <span>+7 (8635) 22-34-30</span>
              </a>
            </div>
          </div>
        </div>
        <div className='flex justify-between pt-2 border-t border-blue-900 text-white text-xs'>
          <p>Учредитель – Министерство общего и профессионального образования Ростовской области</p>
          <p className='text-right'>
            &copy; Государственное бюджетное профессиональное образовательное учреждение Ростовской области <br />
            «Новочеркасский машиностроительный колледж», 2014 — 2024
          </p>
        </div>
      </div>
    </footer>
  );
};
