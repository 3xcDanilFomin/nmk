import { useCallback, useEffect, useRef, useState } from 'react';
import { StaticImageData } from 'next/image';

export const useSlider = (slides: StaticImageData[], autoPlay: boolean, autoPlayTime: number) => {
  const timer = useRef<NodeJS.Timeout | null>(null);
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const handleNextSlide = useCallback(() => {
    setCurrentSlide((prevState) => (prevState < slides.length - 1 ? prevState + 1 : 0));
  }, [slides.length]);

  const startAutoPlay = useCallback(() => {
    if (timer.current) {
      clearInterval(timer.current);
    }
    timer.current = setInterval(() => {
      handleNextSlide();
    }, autoPlayTime);
  }, [autoPlayTime, handleNextSlide]);

  const handlePrevSlide = () => {
    setCurrentSlide((prevState) => (prevState > 0 ? prevState - 1 : slides.length - 1));
  };

  useEffect(() => {
    if (autoPlay) {
      startAutoPlay();
    }

    return () => {
      clearInterval(timer.current!);
    };
  }, [autoPlay, startAutoPlay]);

  return {
    currentSlide,
    handleNextSlide,
    handlePrevSlide,
    startAutoPlay,
    setCurrentSlide,
    countDots: slides.length,
    clearTimer: () => {
      if (timer.current) {
        clearInterval(timer.current);
      }
    },
  };
};
