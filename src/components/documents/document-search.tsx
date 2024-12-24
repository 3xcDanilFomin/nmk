import { clsx } from 'clsx';
import { Search, X } from 'lucide-react';
import { useRef } from 'react';

interface IDocumentSearchProps {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
}

export const DocumentSearch: React.FC<IDocumentSearchProps> = ({ searchTerm, setSearchTerm }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleButtonClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
    setSearchTerm('');
  };

  return (
    <div className='absolute top-0 right-0 flex items-center gap-1 p-1 bg-blue-500 rounded'>
      <Search className='absolute top-1/2 left-2 -translate-y-1/2 size-5 stroke-blue-500' />
      <input
        className='w-96 rounded py-1 px-8 text-zinc-700 text-sm focus:outline-none placeholder:text-zinc-600'
        ref={inputRef}
        type='text'
        value={searchTerm}
        onChange={handleInputChange}
        placeholder='Введите название документа'
      />
      <button
        onClick={handleButtonClick}
        className={clsx(
          searchTerm ? 'opacity-100 visible' : 'opacity-0 invisible',
          'transition-[opacity,_visible] duration-300',
        )}
      >
        <X className='absolute top-1/2 right-2 -translate-y-1/2 stroke-blue-500 transition-colors duration-300 hover:stroke-red-600' />
      </button>
    </div>
  );
};
