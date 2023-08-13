import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

export const Container = (props: ComponentProps<'div'>) => (
  <div
    {...props}
    className={twMerge(
      'max-w-4xl mx-auto w-full border-l border-foreground pt-12',
      props.className,
    )}
  />
);
