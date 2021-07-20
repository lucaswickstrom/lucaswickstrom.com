import { CarouselProvider, Slide, Slider } from 'pure-react-carousel';
import React from 'react';
import ReactDOM from 'react-dom';

export const CarouselDialog: React.FC<
  { onClose(): void } & React.ComponentProps<typeof CarouselProvider>
> = ({ onClose, children, ...props }) => {
  function handleKeydown(event: KeyboardEvent) {
    if (event.code === 'Escape') {
      onClose();
    }
  }

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeydown, false);
    return () => document.removeEventListener('keydown', handleKeydown);
  }, []);

  return ReactDOM.createPortal(
    <div
      css={{
        position: 'fixed',
        right: 0,
        top: 0,
        left: 0,
        bottom: 0,
        background: 'rgba(0,0,0,.6)',
      }}
    >
      <button
        onClick={onClose}
        css={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          opacity: 0,
        }}
      >
        close
      </button>
      <div>
        <CarouselProvider {...props}>
          <Slider
            tabIndex={-1}
            css={{
              pointerEvents: 'none',
              overflow: 'visible',
              outline: 'none',
            }}
          >
            {(Array.isArray(children) ? children : [children]).map(
              (child, index) => (
                <Slide key={index} index={index}>
                  <div
                    css={{
                      width: 'calc(100vw - 32px * 4)',
                      height: 'calc(100vh - 32px * 4)',
                      margin: 32 * 2,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      img: {
                        pointerEvents: 'all',
                        maxWidth: 'calc(100vw - 32px * 4)',
                        maxHeight: 'calc(100vh - 32px * 4)',
                      },
                    }}
                  >
                    {child}
                  </div>
                </Slide>
              ),
            )}
          </Slider>
        </CarouselProvider>
      </div>
    </div>,
    document.body,
  );
};
