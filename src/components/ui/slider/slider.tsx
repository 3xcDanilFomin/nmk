'use client';

import { StaticImageData } from 'next/image';

import image1 from '../../../../public/news-1.webp';
import image2 from '../../../../public/news-2.webp';
import image3 from '../../../../public/news-3.webp';
import image4 from '../../../../public/news-4.webp';
import image5 from '../../../../public/news-5.webp';
import { useSlider } from '@/hooks';
import { SliderDots } from './dots';
import { SliderControls } from './controls';
import { SliderSlide } from './slide';

interface ISliderProps {
  autoPlay?: boolean;
  autoPlayTime?: number;
}

const slides: StaticImageData[] = [image1, image2, image3, image4, image5];

export const Slider: React.FC<ISliderProps> = (props) => {
  const { autoPlay = true, autoPlayTime = 15000 } = props;

  const { currentSlide, handleNextSlide, handlePrevSlide, startAutoPlay, clearTimer, setCurrentSlide, countDots } =
    useSlider(slides, autoPlay, autoPlayTime);

  return (
    <div
      className='relative w-full h-full rounded-lg bg-blue-50'
      onMouseEnter={clearTimer}
      onMouseLeave={startAutoPlay}
    >
      {slides.map((slide, index) => (
        <SliderSlide key={index} imagePath={slide} alt={'img'} isSlideActive={index === currentSlide} />
      ))}
      <div className='absolute inset-0 bg-black bg-opacity-5 rounded-lg' />
      <SliderControls handlePrevSlide={handlePrevSlide} handleNextSlide={handleNextSlide} />
      <SliderDots
        countDots={countDots}
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
        autoPlay={autoPlay}
        startAutoPlay={startAutoPlay}
      />
    </div>
  );
};
