import {Button} from "@chakra-ui/react";
import {useIndex} from "./useIndex";
import {Card} from "~/components/card";

export const CardContent = ({
  title,
  detail,
  href,
  linkText,
}: {
  title: string;
  detail: string;
  href: string;
  linkText: string;
}) => {
  const {t, noOfLines, showFullDetail} = useIndex();

  return (
    <Card.Stack>
      <Card.Body>
        <Card.Heading>{title}</Card.Heading>
        <Card.Text lineClamp={noOfLines}>{detail}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button onClick={showFullDetail} w="110px">
          {noOfLines === undefined ? t("Fold") : t("Read more")}
        </Button>
        <Button variant="solid" colorScheme="teal">
          <a href={href} target="_blank" rel="noreferrer">
            {linkText}
          </a>
        </Button>
      </Card.Footer>
    </Card.Stack>
  );
};
