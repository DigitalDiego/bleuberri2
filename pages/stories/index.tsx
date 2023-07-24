import { Flex, Text, Heading } from "@chakra-ui/react";
import { Story } from "@/components";
import { stories } from "@/constants";

export default function Stories() {
  return (
    <>
      <Flex
        w="full"
        h="40vh"
        justifyContent="center"
        direction="column"
        gap="2"
      >
        <Heading className="poppins">Stories</Heading>
        <Text fontSize="sm" opacity=".7">
          See what people have to say about our products.
        </Text>
      </Flex>
      <Flex direction="column">
        {stories.map((story) => (
          <Story key={story.id} {...story} />
        ))}
      </Flex>
    </>
  );
}
