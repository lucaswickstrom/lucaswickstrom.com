import 'pure-react-carousel/dist/react-carousel.es.css';

import { CarouselProvider, Slide, Slider } from 'pure-react-carousel';
import React from 'react';

import { CarouselDialog } from '.';

export const Carousel: React.FC<React.ComponentProps<typeof CarouselProvider>> =
  ({ children, ...props }) => {
    // const [startEvent, setStartEvent] = React.useState<React.MouseEvent>();
    const [selectedSlide, setSelectedSlide] = React.useState<number>();

    return (
      <div css={{ contain: 'layout' }}>
        <CarouselProvider
          css={{
            width: props.naturalSlideWidth / 2,
            maxWidth: 'calc(100vw - 50px)',
          }}
          {...props}
        >
          <Slider
            tabIndex={-1}
            css={{
              overflow: 'visible',
              outline: 'none',
            }}
          >
            {(Array.isArray(children) ? children : [children]).map(
              (child, index) => (
                <Slide key={index} index={index}>
                  <div
                    onMouseDown={({ clientX, clientY, target }) => {
                      target.addEventListener(
                        'click',
                        (event) => {
                          if (
                            event instanceof PointerEvent &&
                            Math.abs(event.clientX - clientX) < 10 &&
                            Math.abs(event.clientY - clientY) < 10
                          ) {
                            setSelectedSlide(index);
                          }
                        },
                        { once: true },
                      );
                    }}
                    // onClick={({ clientX, clientY }) => {
                    //   console.log(
                    //     startEvent,
                    //     startEvent?.clientX,
                    //     clientX,
                    //     startEvent?.clientY,
                    //     clientY,
                    //   );
                    //   if (
                    //     !startEvent ||
                    //     (Math.abs(startEvent.clientX - clientX) < 10 &&
                    //       Math.abs(startEvent.clientY - clientY) < 10)
                    //   ) {
                    //     setSelectedSlide(index);
                    //   }
                    //   // requestAnimationFrame(() => {
                    //   //   setStartEvent(undefined);
                    //   // });
                    // }}
                    css={{
                      cursor: 'pointer',
                      // maxWidth: 'calc(100vw - 50px)',
                      height: props.naturalSlideHeight / 2,
                    }}
                  >
                    {child}
                  </div>
                </Slide>
              ),
            )}
          </Slider>
          {typeof selectedSlide === 'number' && (
            <CarouselDialog
              currentSlide={selectedSlide}
              onClose={() => setSelectedSlide(undefined)}
              {...props}
            >
              {children}
            </CarouselDialog>
          )}
        </CarouselProvider>
      </div>
    );
  };
