import { Dropdown } from '@/components';

export default function CollegePage() {
  return (
    <main className='flex flex-col gap-24 py-12'>
      <div className='max-w-screen-xl mx-auto px-3 '>
        <Dropdown label='Наш колледж' />
      </div>
    </main>
  );
}