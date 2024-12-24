'use client';

import { MouseEventHandler, useCallback, useEffect, useRef, useState } from 'react';
import { createContainer, Portal } from './portal';
import { X } from 'lucide-react';

const MODAL_CONTAINER_ID = 'modal-container-id';

interface IModalProps {
  onClose?: () => void;
  children: React.ReactNode | React.ReactNode[];
}

export const Modal: React.FC<IModalProps> = (props) => {
  const { onClose, children } = props;

  const rootRef = useRef<HTMLDivElement>(null);
  const [isMounted, setMounted] = useState(false);

  const handleClose: MouseEventHandler<HTMLButtonElement> = useCallback(() => {
    onClose?.();
  }, [onClose]);

  useEffect(() => {
    createContainer({ id: MODAL_CONTAINER_ID });
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleWrapperClick = (event: MouseEvent) => {
      const { target } = event;

      if (target instanceof Node && rootRef.current === target) {
        onClose?.();
      }
    };

    const handleEscapePress = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose?.();
      }
    };

    window.addEventListener('click', handleWrapperClick);
    window.addEventListener('keydown', handleEscapePress);
    document.body.style.overflowY = 'hidden';

    return () => {
      document.body.style.overflowY = 'scroll';
      window.removeEventListener('click', handleWrapperClick);
      window.removeEventListener('keydown', handleEscapePress);
    };
  }, [onClose]);

  return isMounted ? (
    <Portal id={MODAL_CONTAINER_ID}>
      <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 pr-4' ref={rootRef}>
        <div className='relative'>
          <button type='button' className='absolute top-0 right-0 -translate-y-8' onClick={handleClose}>
            <X className='stroke-white size-7  opacity-50 transition-opacity duration-300 hover:opacity-100' />
          </button>
          {children}
        </div>
      </div>
    </Portal>
  ) : null;
};
