import React from 'react';
import { ImageObject } from 'sharp-loader/src/types';

export type Picture = Required<ImageObject>[];

// eslint-disable-next-line no-redeclare
export const Picture = ({
  picture,
  eager,
  ...props
}: {
  picture: Picture;
  eager?: boolean;
} & React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>) => {
  const imageTypes: Record<string, Picture> = {};
  for (const image of picture) {
    imageTypes[image.format] = [...(imageTypes[image.type] ?? []), image];
  }

  return imageTypes.jpeg ? (
    <picture>
      {Object.entries(imageTypes).map(([key, images]) => (
        <source
          key={key}
          srcSet={images.map(({ url, width }) => `${url} ${width}w`).join(', ')}
          type={images[0].type}
          // sizes="(min-width: 1024px) 1024px, 100vw"
        />
      ))}
      <img
        src={imageTypes.jpeg[0].url}
        // srcSet={responsiveImage.srcSet}
        // width={lastImage.width}
        // height={lastImage.height}
        // sizes="(min-width: 1024px) 1024px, 100vw"
        loading={eager ? 'eager' : 'lazy'}
        {...props}
      />
    </picture>
  ) : null;
};
