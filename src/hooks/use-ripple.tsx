'use client';

import { useState } from 'react';
import uuid from 'react-uuid';

export const useRipple = () => {
  const [rippleElements, setRippleElements] = useState<JSX.Element[]>([]);

  function onAnimationEnd(key: string) {
    setRippleElements((rippleElements) => rippleElements.filter((element) => element.key !== key));
  }

  function onRippleClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    const rect = event.currentTarget.getBoundingClientRect();

    const d = Math.max(event.currentTarget.clientWidth, event.currentTarget.clientHeight);
    const left = event.clientX - rect.left - d / 2 + 'px';
    const top = event.clientY - rect.top - d / 2 + 'px';
    const rippleElement = newRippleElement(d, left, top);

    setRippleElements([...rippleElements, rippleElement]);
  }

  function newRippleElement(d: number, left: string, top: string) {
    const key = uuid();
    return (
      <div
        key={key}
        className='ripple'
        style={{ width: d, height: d, left, top }}
        onAnimationEnd={() => onAnimationEnd(key)}
      ></div>
    );
  }

  function renderRippleElements() {
    return rippleElements;
  }

  return {
    onRippleClick,
    renderRippleElements,
  };
};
