import Image from "next/image";

export function MdxImage(props: { src: string; alt: string }) {
  // eslint-disable-next-line jsx-a11y/alt-text
  return <Image {...props} />;
}
