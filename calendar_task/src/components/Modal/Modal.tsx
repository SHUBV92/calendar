import { useEffect, KeyboardEventHandler } from 'react';

import './Modal.css';

const Modal = (props: any) => {
  const closeOnEscapeKeyDown = (e: any) => {
    if ((e.charCode || e.keyCode) === 27) {
      props.onClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener('keydown', closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener('keydown', closeOnEscapeKeyDown);
    };
  }, []);

  if (!props.show) {
    return null;
  }

  return (
    <div className='modal' onClick={props.onClose}>
      <div className='modal-contnet' onClick={(e) => e.stopPropagation()}>
        <div className='modal-body'>{props.children}</div>
        <div className='modal-footer'>
          {props.button ? (
            <button onClick={props.onClose} className='button'>
              {props.buttonName}
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Modal;
