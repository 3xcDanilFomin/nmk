import { clsx } from 'clsx';

import { socialsLink } from '@/assets/data/socials-link';

interface ISocialsProps {
  variant: 'dark' | 'light';
}

interface ISocialsLinkProps extends ISocialsLink {
  variant: 'dark' | 'light';
}

export const SocialsLink: React.FC<ISocialsLinkProps> = ({ id, icon, path, variant }) => {
  const linkClassName = clsx(
    id === 3 ? 'p-1.5' : 'p-1',
    'flex items-center justify-center rounded-full transition-colors duration-300',
    {
      dark: 'text-blue-200 bg-blue-900 hover:text-white hover:bg-blue-800',
      light: 'text-white bg-white/40 hover:text-blue-800 hover:bg-white',
    }[variant],
  );

  return (
    <li>
      <a className={linkClassName} href={path}>
        {icon}
      </a>
    </li>
  );
};

export const Socials: React.FC<ISocialsProps> = ({ variant }) => {
  return (
    <ul className='flex items-center gap-3'>
      {socialsLink.map((link) => (
        <SocialsLink key={link.id} icon={link.icon} id={link.id} path={link.path} variant={variant} />
      ))}
    </ul>
  );
};
