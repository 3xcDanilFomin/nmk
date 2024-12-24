import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface IPortalProps {
  id: string;
  children: React.ReactNode;
}

interface IContainerOptions {
  id: string;
  mountNode?: HTMLElement;
}

const PORTAL_ERROR_MSG =
  'There is no portal container in markup. Please add portal container with proper id attribute.';

export const createContainer = (options: IContainerOptions) => {
  if (document.getElementById(options.id)) {
    return;
  }

  const { id, mountNode = document.body } = options;

  const portalContainer = document.createElement('div');

  portalContainer.setAttribute('id', id);
  mountNode.appendChild(portalContainer);
};

export const Portal = (props: IPortalProps) => {
  const { id, children } = props;
  const [container, setContainer] = useState<HTMLElement>();

  useEffect(() => {
    if (id) {
      const portalContainer = document.getElementById(id);

      if (!portalContainer) {
        throw new Error(PORTAL_ERROR_MSG);
      }

      setContainer(portalContainer);
    }
  }, [id]);

  return container ? createPortal(children, container) : null;
};
