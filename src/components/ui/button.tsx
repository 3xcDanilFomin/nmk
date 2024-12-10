'use client';

import { ButtonHTMLAttributes } from 'react';
import { clsx } from 'clsx';

import { useRipple } from '@/hooks';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: 'filled' | 'ghost' | 'dark' | 'none';
  size?: 'sm' | 'md' | 'lg' | 'none';
  onClick?: () => void;
}

export const Button: React.FC<IButtonProps> = ({
  children,
  className,
  variant = 'filled',
  size = 'lg',
  onClick,
  ...rest
}) => {
  const { renderRippleElements, onRippleClick } = useRipple();

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    onRippleClick(event);
    if (onClick) {
      onClick();
    }
  };

  const buttonClassName = clsx(
    className,
    {
      filled: 'text-white bg-blue-600 transition hover:bg-blue-700',
      ghost: 'text-blue-600 transition-colors hover:bg-blue-600 hover:text-white',
      dark: 'text-white font-light bg-blue-950 transition-colors hover:bg-blue-800',
      none: '',
    }[variant],
    {
      sm: 'py-1 px-4 rounded-md',
      md: 'py-2 px-4 rounded-lg',
      lg: 'py-3 px-6 rounded',
      none: '',
    }[size],
    'gap-2 with-ripple relative overflow-hidden flex items-center duration-300',
  );

  return (
    <button {...rest} className={buttonClassName} onClick={handleButtonClick}>
      {children}
      {renderRippleElements()}
    </button>
  );
};
