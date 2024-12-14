import Image from 'next/image';
import Link from 'next/link';

import { Title } from '@/components';
import { photoGalleryLinks } from '@/assets/data/photo-gallery-links';

export default function CollegePhotoGalleryPage() {
  return (
    <main className='flex flex-col gap-24 py-12'>
      <div className='w-full flex flex-col gap-12 items-center max-w-screen-xl mx-auto px-3'>
        <Title className='self-start' label='Фотогалерея' />
        <ul className='grid grid-cols-4 auto-rows-[360px] gap-6'>
          {photoGalleryLinks.map((link) => (
            <li className='gallery-link-item' key={link.id}>
              <Link className='group relative block w-full h-full' href={link.urlPath}>
                <figure className='w-full h-full'>
                  <Image
                    className='relative -z-10 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110'
                    src={link.imagePath}
                    alt={link.alt}
                    width={360}
                    height={360}
                    unoptimized
                  />
                  <figcaption className='absolute z-20 left-6 bottom-6 text-xl font-medium text-white transition-colors duration-300 group-hover:text-blue-500'>
                    {link.label}
                  </figcaption>
                </figure>
                <div className='absolute z-10 w-full left-0 bottom-0 h-44 bg-gradient-to-b from-transparent to-black' />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
