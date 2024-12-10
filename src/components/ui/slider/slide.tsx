import clsx from 'clsx';
import Image, { StaticImageData } from 'next/image';

interface ISliderSlideProps {
  isSlideActive: boolean;
  imagePath: StaticImageData;
  alt: string;
}

export const SliderSlide: React.FC<ISliderSlideProps> = (props) => {
  const { isSlideActive, imagePath, alt } = props;

  return (
    <Image
      className={clsx(
        isSlideActive ? 'scale-100 opacity-100 translate-x-0' : 'scale-95 opacity-0',
        'absolute w-full h-full object-cover rounded-lg transition-[transform,_opacity] duration-500',
      )}
      src={imagePath}
      alt={alt}
    />
  );
};
