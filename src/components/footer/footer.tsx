import { Logo, Socials } from '@/components';
import { Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className='bg-blue-950 pb-4'>
      <div className='max-w-screen-xl mx-auto flex flex-col gap-6 px-3'>
        <ul className='flex justify-between py-4 px-8 border-b border-blue-900'>
          <li>
            <Link
              className='relative text-blue-600 transition-colors hover:text-blue-400 hover:after:scale-100  after:content-[""] after:absolute after:left-1/2 after:-bottom-1 after:w-full after:h-[1.5px] after:bg-blue-600 after:-translate-x-1/2 after:scale-0 after:transition-transform after:duration-500'
              href='/'
            >
              Основные сведения
            </Link>
          </li>
          <li>
            <Link
              className='relative text-blue-600 transition-colors hover:text-blue-400 hover:after:scale-100  after:content-[""] after:absolute after:left-1/2 after:-bottom-1 after:w-full after:h-[1.5px] after:bg-blue-600 after:-translate-x-1/2 after:scale-0 after:transition-transform after:duration-500'
              href='/'
            >
              Документы
            </Link>
          </li>
          <li>
            <Link
              className='relative text-blue-600 transition-colors hover:text-blue-400 hover:after:scale-100  after:content-[""] after:absolute after:left-1/2 after:-bottom-1 after:w-full after:h-[1.5px] after:bg-blue-600 after:-translate-x-1/2 after:scale-0 after:transition-transform after:duration-500'
              href='/'
            >
              Противодействие коррупции
            </Link>
          </li>
          <li>
            <Link
              className='relative text-blue-600 transition-colors hover:text-blue-400 hover:after:scale-100  after:content-[""] after:absolute after:left-1/2 after:-bottom-1 after:w-full after:h-[1.5px] after:bg-blue-600 after:-translate-x-1/2 after:scale-0 after:transition-transform after:duration-500'
              href='/'
            >
              Карта сайта
            </Link>
          </li>
        </ul>
        <div className='flex justify-between'>
          <div className='flex flex-col items-center gap-3'>
            <Logo variant='light' />
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
              <Socials variant='dark' />
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
