import { navigationLinks } from '@/assets/data/navigation-links';
import { Dropdown } from '../ui/dropdown';

export const NavigationMenu = () => {
  return (
    <nav className='flex items-center gap-3'>
      {navigationLinks.map((item) => (
        <Dropdown key={item.id} label={item.label} links={item.links} />
      ))}
    </nav>
  );
};
