import {
  Card as CardBase,
  Image,
  Stack,
  type ImageProps,
  type CardProps,
  CardBody,
  Heading,
  type HeadingProps,
  Text,
  type CardFooterProps,
  CardFooter,
} from "@chakra-ui/react";

export const Card = {
  Root: (props: CardProps) => {
    return (
      <CardBase
        {...props}
        direction={{base: "column", md: "row"}}
        overflow="hidden"
        variant="outline"
      />
    );
  },
  Image: (props: ImageProps) => {
    return (
      <Image
        {...props}
        objectFit="cover"
        maxW={{base: "100%", md: "200px"}}
        maxH="200px"
      />
    );
  },
  Stack,
  Body: CardBody,
  Heading: (props: HeadingProps) => {
    return <Heading {...props} size="md" />;
  },
  Text,
  Footer: (props: CardFooterProps) => {
    return <CardFooter {...props} gap="8px" />;
  },
};
