import {type ReactNode} from "react";
import {Card as CardBase, CardBody, Stack, Text} from "@chakra-ui/react";
import {Footer} from "./footer";
import {Heading} from "./heading";
import {Image} from "./image";

// TODO: refactor structure of Card
export const Card = ({children}: {children: ReactNode}) => {
  return (
    <CardBase
      direction={{base: "column", md: "row"}}
      overflow="hidden"
      variant="outline"
    >
      {children}
    </CardBase>
  );
};

Card.Image = Image;
Card.Stack = Stack;
Card.Body = CardBody;
Card.Heading = Heading;
Card.Text = Text;
Card.Footer = Footer;
