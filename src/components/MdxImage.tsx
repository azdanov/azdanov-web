import Image, { ImageProps } from "next/image";

export function MdxImage(props: ImageProps) {
  // eslint-disable-next-line jsx-a11y/alt-text
  return <Image {...props} />;
}
