'use client';

import {
  DragHandlers,
  MotionValue,
  animate,
  motion,
  useMotionValue,
} from 'framer-motion';
import {
  Children,
  ReactElement,
  cloneElement,
  useCallback,
  useMemo,
} from 'react';

export const Carousel = ({
  contentHeight,
  children,
  data,
  x: _x,
  animate: _animate,
}: {
  children: ReactElement[];
  data: { width: number; height: number }[];
  contentHeight: number;
  x?: MotionValue<number>;
  animate?: `point${number}`;
}) => {
  const x = _x || useMotionValue(0);

  const snapPoints = useMemo(() => {
    let left = 0;
    return [
      0,
      ...data.slice(0, -1).map(({ width, height }) => {
        left -= (width * contentHeight) / height + 12;
        return left;
      }),
    ];
  }, [data, contentHeight]);

  const onDragEnd: DragHandlers['onDragEnd'] = useCallback(() => {
    const currentX = x.get() + x.getVelocity() / 2;
    const closest = snapPoints.reduce((prev, curr) => {
      return Math.abs(curr - currentX) < Math.abs(prev - currentX)
        ? curr
        : prev;
    }, 0);

    animate(x, closest);
  }, [snapPoints]);

  return (
    <motion.div
      drag='x'
      dragConstraints={{ left: snapPoints[snapPoints.length - 1], right: 0 }}
      animate={_animate}
      variants={Object.fromEntries(
        snapPoints.map((point, index) => [`point${index}`, { x: point }]),
      )}
      onDragEnd={onDragEnd}
      className='flex gap-3'
      style={{ width: 'max-content', x }}
    >
      {Children.map(children, (child) =>
        cloneElement(child, {
          onDragStart: (event: DragEvent) => event.preventDefault(),
        }),
      )}
    </motion.div>
  );
};
