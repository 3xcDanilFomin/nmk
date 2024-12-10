import { Slider } from '@/components';

export default async function NewsDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id;
  console.log(id);
  return (
    <main className='flex flex-col gap-24 py-12'>
      <div className='w-full max-w-screen-xl mx-auto px-3 '>
        <div className='w-2/4 h-[460]'>
          <Slider />
        </div>
      </div>
    </main>
  );
}
