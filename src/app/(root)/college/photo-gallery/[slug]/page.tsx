import Image from 'next/image';

const images = [
  {
    id: 1,
    urlPath: '/news-1.webp',
    alt: 'описание',
  },
  {
    id: 2,
    urlPath: '/news-2.webp',
    alt: 'описание',
  },
  {
    id: 3,
    urlPath: '/news-3.webp',
    alt: 'описание',
  },
  {
    id: 4,
    urlPath: '/news-4.webp',
    alt: 'описание',
  },
  {
    id: 5,
    urlPath: '/news-5.webp',
    alt: 'описание',
  },
  {
    id: 6,
    urlPath: '/news-1.webp',
    alt: 'описание',
  },
  {
    id: 7,
    urlPath: '/news-1.webp',
    alt: 'описание',
  },
  {
    id: 8,
    urlPath: '/news-2.webp',
    alt: 'описание',
  },
  {
    id: 9,
    urlPath: '/news-3.webp',
    alt: 'описание',
  },
  {
    id: 10,
    urlPath: '/news-4.webp',
    alt: 'описание',
  },
  {
    id: 11,
    urlPath: '/news-5.webp',
    alt: 'описание',
  },
  {
    id: 12,
    urlPath: '/news-1.webp',
    alt: 'описание',
  },
];

export default async function PhotoGallerySlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  console.log(slug);

  return (
    <main className='flex flex-col gap-24 py-12'>
      <div className='w-full max-w-screen-xl mx-auto px-3 flex gap-8'>
        <ul className='w-full min-h-screen grid grid-cols-3 auto-rows-[240px] gap-3'>
          {images.map((image) => (
            <li key={image.id} className='group gallery-image cursor-pointer'>
              <Image
                className='w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110'
                src={image.urlPath}
                alt={image.alt}
                width={360}
                height={260}
                unoptimized
              />
              <div className='absolute inset-0 bg-black opacity-15 transition-opacity duration-500 group-hover:opacity-0' />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
