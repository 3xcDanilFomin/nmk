import { Search } from 'lucide-react';

export const FieldSearch: React.FC = () => {
  return (
    <div className='relative w-full'>
      <Search className='absolute top-1/2 left-2 -translate-y-1/2 size-4 stroke-zinc-400' />
      <input
        className='w-full max-w-96 text-zinc-400 text-sm bg-gray-200 py-2.5 px-10 rounded [box-shadow:0_0_0_1px_transparent] transition-shadow duration-300placeholder:text-sm placeholder:text-zinc-400 focus:outline-none focus:[box-shadow:0_0_0_0.5px_#2563eb]'
        type='text'
        placeholder='Поиск'
      />
    </div>
  );
};
