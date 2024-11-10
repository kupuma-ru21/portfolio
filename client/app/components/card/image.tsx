import { Image as ImageBase, type ImageProps } from "@chakra-ui/react";

export const Image = (props: ImageProps) => {
  return (
    <ImageBase
      {...props}
      objectFit="cover"
      maxW={{ base: "100%", md: "200px" }}
      maxH="200px"
    />
  );
};
