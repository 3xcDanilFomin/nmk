import { clsx } from 'clsx';

interface ITitleProps {
  label: string;
  className?: string;
}

export const Title: React.FC<ITitleProps> = (props) => {
  const { label, className } = props;

  const titleClassName = clsx('text-5xl text-blue-600 font-bold leading-none', className);
  return <h1 className={titleClassName}>{label}</h1>;
};
