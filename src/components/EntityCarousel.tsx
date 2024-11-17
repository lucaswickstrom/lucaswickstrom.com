'use client';

import * as Dialog from '@radix-ui/react-dialog';
import { motion, useMotionValue } from 'framer-motion';
import { X } from 'lucide-react';
import Image, { type StaticImageData } from 'next/image';
import {
  Children,
  type MouseEvent,
  type ReactElement,
  cloneElement,
  useRef,
  useState,
} from 'react';
import { useWindowSize } from 'usehooks-ts';
import { Carousel } from './Carousel';

export const EntityCarousel = ({
  children,
  data,
}: { children: ReactElement[]; data: StaticImageData[] }) => {
  const { width, height } = useWindowSize();
  const [open, setOpen] = useState(false);
  const [animate, setAnimate] = useState<`point${number}`>();

  const x = useMotionValue(0);

  const startEventTime = useRef(0);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Carousel data={data} contentHeight={256}>
        {Children.map(children, (child, index) =>
          cloneElement(child, {
            onMouseDown(event: MouseEvent) {
              startEventTime.current = event.timeStamp;
            },
            onClick(event: MouseEvent) {
              console.log(
                startEventTime.current,
                event.timeStamp,
                startEventTime.current + 200 > event.timeStamp,
              );
              if (startEventTime.current + 200 > event.timeStamp) {
                setAnimate(`point${index}`);
                setOpen(true);
              }
            },
          }),
        )}
      </Carousel>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/30 fixed inset-0" asChild>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        </Dialog.Overlay>
        <Dialog.Content className="fixed inset-0" asChild>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Carousel
              data={data.map(() => ({ width, height }))}
              contentHeight={height}
              x={x}
              animate={animate}
            >
              {data.map((image, index) => (
                <Image
                  key={image.src}
                  src={image}
                  alt={`Image ${index + 1}`}
                  objectFit="contain"
                  objectPosition="center"
                  width={width}
                  height={height}
                  className="p-0 md:p-12 h-screen w-screen object-contain"
                  placeholder="blur"
                />
              ))}
            </Carousel>
            <Dialog.Close className="absolute top-0 right-0 m-4">
              <X />
            </Dialog.Close>
          </motion.div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
