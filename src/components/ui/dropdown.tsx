'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { clsx } from 'clsx';

import { useOutsideClick } from '@/hooks';
import { INavigationSubLink } from '@/types/navigation';

interface IDropdownProps {
  label: React.ReactNode;
  links: INavigationSubLink[];
}

export const Dropdown: React.FC<IDropdownProps> = (props) => {
  const { label, links } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [style, setStyle] = useState<{ height: number; opacity: number }>({ height: 0, opacity: 0 });
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useOutsideClick(dropdownRef, () => setIsOpen(false));

  useEffect(() => {
    if (dropdownRef.current?.children[1]) {
      const content = dropdownRef.current?.children[1].children[0];
      setStyle({
        height: isOpen ? content.clientHeight : 0,
        opacity: isOpen ? 1 : 0,
      });
    }
  }, [isOpen]);

  const handleButtonClick = () => setIsOpen((prevState) => !prevState);

  const buttonClassName = clsx(
    isOpen
      ? 'bg-blue-600 text-white'
      : 'text-zinc-700 hover:text-blue-600 hover:after:scale-100  after:content-[""] after:absolute after:left-1/2 after:bottom-[2px] after:w-4/5 after:h-[1.5px] after:bg-blue-600 after:-translate-x-1/2 after:scale-0 after:transition-transform after:duration-500',
    'relative flex items-center gap-2 py-1 px-4 rounded transition-colors duration-300',
  );

  return (
    <div className='relative' ref={dropdownRef}>
      <button className={buttonClassName} onClick={handleButtonClick} type='button'>
        <span>{label}</span>
        <ChevronDown
          className={clsx(isOpen && 'rotate-180', 'size-4 text-current stroke-[1.5] transition-transform duration-300')}
        />
      </button>
      <div
        style={{ maxHeight: style.height, opacity: style.opacity }}
        className='absolute z-50 left-0 top-[calc(100%_+_4px)] overflow-hidden shadow shadow-zinc-700 rounded-md transition-[max-height,_opacity] duration-500'
      >
        <ul className='w-max  flex flex-col gap-2 p-2 bg-white '>
          {links.map((link) => (
            <li key={link.id}>
              <Link
                className='text-sm text-zinc-700 py-1 px-2 rounded leading-none hover:bg-blue-500 hover:text-white'
                href={link.path}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
