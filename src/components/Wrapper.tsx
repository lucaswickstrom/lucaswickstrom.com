import type { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

export const Wrapper = (props: ComponentProps<'div'>) => (
  <div
    {...props}
    className={twMerge(
      'max-w-2xl w-full mx-auto prose dark:prose-invert pl-4 sm:pr-4',
      props.className,
    )}
  />
);
