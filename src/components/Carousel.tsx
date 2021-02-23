import 'pure-react-carousel/dist/react-carousel.es.css';

import { CarouselProvider, Slide, Slider } from 'pure-react-carousel';
import React from 'react';

// import { mq } from './Layout';

export const Carousel: React.FC<
  Partial<React.ComponentProps<typeof CarouselProvider>>
> = ({ children, ...props }) => (
  <div css={{ contain: 'layout' }}>
    <CarouselProvider
      naturalSlideWidth={16 * 28}
      naturalSlideHeight={9 * 28}
      totalSlides={Array.isArray(children) ? children.length : 1}
      css={{
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
                css={{
                  height: '100%',
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
);
