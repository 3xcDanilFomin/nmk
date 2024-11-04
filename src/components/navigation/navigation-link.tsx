'use client';

import { clsx } from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const NavigationLink: React.FC<Pick<INavigationLink, 'label' | 'path'>> = ({ label, path }) => {
  const pathname = usePathname();
  const linkClassName = clsx(
    pathname === path
      ? 'bg-blue-600 text-white'
      : 'relative text-zinc-700 transition-colors hover:text-blue-600 hover:after:scale-100  after:content-[""] after:absolute after:left-1/2 after:bottom-[2px] after:w-3/4 after:h-[1.5px] after:bg-blue-600 after:-translate-x-1/2 after:scale-0 after:transition-transform after:duration-500',
    ' py-1 px-4 rounded',
  );

  return (
    <li className={linkClassName}>
      <Link href={path}>{label}</Link>
    </li>
  );
};
