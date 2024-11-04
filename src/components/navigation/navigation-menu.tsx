import { navigationLinks } from '@/assets/data/navigation-links';
import { NavigationLink } from '@/components';

export const NavigationMenu = () => {
  return (
    <nav>
      <ul className='flex items-center gap-2'>
        {navigationLinks.map((link) => (
          <NavigationLink key={link.id} label={link.label} path={link.path} />
        ))}
      </ul>
    </nav>
  );
};
