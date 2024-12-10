import clsx from 'clsx';

interface ISliderDotsProps {
  countDots: number;
  currentSlide: number;
  setCurrentSlide: (index: number) => void;
  autoPlay: boolean;
  startAutoPlay: () => void;
}

export const SliderDots: React.FC<ISliderDotsProps> = (props) => {
  const { autoPlay, countDots, currentSlide, setCurrentSlide, startAutoPlay } = props;

  return (
    <div className='absolute w-full z-10 left-0 -bottom-6 flex items-center justify-center gap-2'>
      {new Array(countDots).fill(0).map((_, index) => (
        <button
          className={clsx(
            currentSlide === index ? 'w-6 bg-blue-500 border-transparent' : 'border-blue-500 hover:bg-blue-400',
            'size-2.5 rounded-full border transition-all duration-500',
          )}
          key={index}
          onClick={() => {
            setCurrentSlide(index);
            if (autoPlay) {
              startAutoPlay();
            }
          }}
        ></button>
      ))}
    </div>
  );
};
