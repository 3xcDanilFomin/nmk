import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ISliderControlsProps {
  handlePrevSlide: () => void;
  handleNextSlide: () => void;
}

export const SliderControls: React.FC<ISliderControlsProps> = (props) => {
  const { handleNextSlide, handlePrevSlide } = props;

  return (
    <div className='absolute w-full top-1/2 left-0 -translate-y-1/2 flex items-center justify-between px-1'>
      <button
        className='p-2 bg-blue-600 rounded-full opacity-65 transition-opacity duration-300 hover:opacity-100'
        onClick={handlePrevSlide}
      >
        <ChevronLeft className='size-5 stroke-white' />
      </button>
      <button
        className='p-2 bg-blue-600 rounded-full opacity-65 transition-opacity duration-300 hover:opacity-100'
        onClick={handleNextSlide}
      >
        <ChevronRight className='size-5 stroke-white' />
      </button>
    </div>
  );
};
