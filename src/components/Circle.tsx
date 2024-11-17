import Image, { type ImageProps } from 'next/image';
import { twMerge } from 'tailwind-merge';

const sizes = {
  sm: 4,
  md: 6,
  lg: 12,
};

export const Circle = ({
  src,
  alt,
  size,
  className,
}: Pick<ImageProps, 'alt' | 'className'> &
  Partial<Pick<ImageProps, 'src'>> & {
    size: 'sm' | 'md' | 'lg';
  }) => {
  if (!src) {
    return (
      <div
        style={{ width: sizes[size] * 16, height: sizes[size] * 16 }}
        className={twMerge('flex items-center justify-center', className)}
      >
        <div
          className={twMerge(
            'border border-foreground bg-background rounded-full',
            size === 'sm' ? 'h-5 w-5' : 'h-full w-full',
          )}
        />
      </div>
    );
  }
  return (
    <Image
      src={src}
      alt={alt}
      width={sizes[size] * 16}
      height={sizes[size] * 16}
      className={twMerge(
        'p-1 rounded-full border border-foreground bg-background',
        className,
      )}
    />
  );
};
