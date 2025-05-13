import {Box, Button, Flex, Heading} from "@chakra-ui/react";
import {type SerializeFrom} from "@remix-run/node";
import {type AdminBlogsQuery} from "gql/graphql";
import {DeleteButton} from "../delete-blog";
import {useIndex} from "./useIndex";
import {Card} from "~/components/card";
import {Link} from "~/components/link";

export const AdminBlogs = ({
  blogs,
}: {
  blogs: SerializeFrom<AdminBlogsQuery["blogs"]>;
}) => {
  const {t} = useIndex();

  return (
    <Box py="20px">
      <Box p="16px">
        <Flex justifyContent="space-between">
          <Heading mb="16px" textAlign="center" fontWeight={600}>
            {t("Blogs")}
          </Heading>
          <Button
            as={Link}
            to="/admin/add-blog"
            variant="solid"
            colorScheme="teal"
          >
            Add
          </Button>
        </Flex>
        <Flex direction="column" gap="16px">
          {blogs.map(({id, title, detail}) => {
            return (
              <Card key={id}>
                <Card.Stack>
                  <Card.Body>
                    <Card.Heading>{title}</Card.Heading>
                    <Card.Text>{detail}</Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Button
                      as={Link}
                      to={`/admin/blogs/${id}/edit`}
                      variant="solid"
                      colorScheme="green"
                    >
                      Edit
                    </Button>
                    <DeleteButton id={id} />
                  </Card.Footer>
                </Card.Stack>
              </Card>
            );
          })}
        </Flex>
      </Box>
    </Box>
  );
};
