import { Banner, News, Partners, Specialties } from '@/components';

export default function HomePage() {
  return (
    <main className='flex flex-col gap-24 py-12'>
      <div className='max-w-screen-xl mx-auto px-3 '>
        <Banner />
      </div>
      <Specialties />
      <div className='max-w-screen-xl mx-auto px-3 '>
        <News />
      </div>
      <Partners />
    </main>
  );
}
