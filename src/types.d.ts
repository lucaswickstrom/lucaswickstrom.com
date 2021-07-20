declare module '*.svg' {
  const srcOrHref: string;
  export default srcOrHref;
}

declare module '*.png' {
  import { ImageObject } from 'sharp-loader/src/types';
  const imageObject: ImageObject[];
  export default imageObject;
}

declare module '*.jpg' {
  const imageObject: ImageObject[];
  export default imageObject;
}
