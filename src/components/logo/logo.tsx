import Link from 'next/link';

import { LogoIcon } from './logo-icon';

interface ILogoProps {
  variant?: 'light' | 'dark';
}

export const Logo: React.FC<ILogoProps> = ({ variant }) => {
  return (
    <Link href='/'>
      <LogoIcon variant={variant} />
    </Link>
  );
};
