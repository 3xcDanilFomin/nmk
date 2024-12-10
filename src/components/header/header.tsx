import { Button, Logo, NavigationMenu, Socials } from '@/components';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className='sticky top-0 z-50 bg-color-header pt-3 mb-10'>
      <div className='max-w-screen-xl mx-auto flex flex-col gap-2 items-center px-3'>
        <div className='w-full flex justify-between items-center text-white text-sm font-medium'>
          <a
            href='tel:+79999999999'
            className='flex items-center gap-1 py-1 px-2 rounded transition-colors duration-300 hover:bg-blue-800'
          >
            <div className='p-1 flex items-center justify-cente rounded-full bg-white/40'>
              <svg
                className='w-4 h-4 stroke-current stroke-2'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M14.05 6C15.0268 6.19057 15.9244 6.66826 16.6281 7.37194C17.3318 8.07561 17.8095 8.97326 18 9.95M14.05 2C16.0793 2.22544 17.9716 3.13417 19.4163 4.57701C20.8609 6.01984 21.7721 7.91101 22 9.94M18.5 21C9.93959 21 3 14.0604 3 5.5C3 5.11378 3.01413 4.73086 3.04189 4.35173C3.07375 3.91662 3.08968 3.69907 3.2037 3.50103C3.29814 3.33701 3.4655 3.18146 3.63598 3.09925C3.84181 3 4.08188 3 4.56201 3H7.37932C7.78308 3 7.98496 3 8.15802 3.06645C8.31089 3.12515 8.44701 3.22049 8.55442 3.3441C8.67601 3.48403 8.745 3.67376 8.88299 4.05321L10.0491 7.26005C10.2096 7.70153 10.2899 7.92227 10.2763 8.1317C10.2643 8.31637 10.2012 8.49408 10.0942 8.64506C9.97286 8.81628 9.77145 8.93713 9.36863 9.17882L8 10C9.2019 12.6489 11.3501 14.7999 14 16L14.8212 14.6314C15.0629 14.2285 15.1837 14.0271 15.3549 13.9058C15.5059 13.7988 15.6836 13.7357 15.8683 13.7237C16.0777 13.7101 16.2985 13.7904 16.74 13.9509L19.9468 15.117C20.3262 15.255 20.516 15.324 20.6559 15.4456C20.7795 15.553 20.8749 15.6891 20.9335 15.842C21 16.015 21 16.2169 21 16.6207V19.438C21 19.9181 21 20.1582 20.9007 20.364C20.8185 20.5345 20.663 20.7019 20.499 20.7963C20.3009 20.9103 20.0834 20.9262 19.6483 20.9581C19.2691 20.9859 18.8862 21 18.5 21Z' />
              </svg>
            </div>
            <span>+7(999)-999-99-99</span>
          </a>
          <a
            href='mailto:mail@mail.com'
            className='flex items-center gap-1 py-1 px-2 rounded transition-colors duration-300 hover:bg-blue-800'
          >
            <div className='p-1.5 flex items-center justify-cente rounded-full bg-white/40'>
              <svg className='w-3.5 h-3.5 fill-current' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'>
                <path
                  fillRule='evenodd'
                  d='M0 3.25A2.25 2.25 0 012.25 1h11.5A2.25 2.25 0 0116 3.25v9.5A2.25 2.25 0 0113.75 15H2.25A2.25 2.25 0 010 12.75v-9.5zm2.25-.75a.75.75 0 00-.748.69L8 8.297l6.498-5.105a.75.75 0 00-.748-.691H2.25zm-.75 9.885V5.097l3.865 3.037L1.5 12.385zM2.514 13.5h10.972L9.452 9.063l-.989.777a.75.75 0 01-.926 0l-.99-.777L2.515 13.5zm8.12-5.366l3.866 4.251V5.097l-3.865 3.037z'
                />
              </svg>
            </div>
            <span>mail@mail.com</span>
          </a>
          <a
            href='#!'
            className='flex items-center gap-1 py-1 px-2 rounded transition-colors duration-300 hover:bg-blue-800'
          >
            <div className='p-1 flex items-center justify-cente rounded-full bg-white/40'>
              <svg
                className='w-4 h-4 stroke-current stroke-2'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z' />
                <path d='M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z' />
              </svg>
            </div>
            <span>г. Новочеркасск, ул. Троицкая, 39/166</span>
          </a>
          <Socials variant='light' />
        </div>
        <div className='w-full flex items-center justify-between py-2 px-6 rounded-md bg-white shadow-lg -mb-10'>
          <Logo />
          <NavigationMenu />
          <Link href='/contacts'>
            <Button>Контакты</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};
