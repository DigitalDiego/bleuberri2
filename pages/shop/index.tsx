import { Flex, Heading, Text, Select, SimpleGrid } from "@chakra-ui/react";
import { Item } from "@/components";
import { items } from "@/data";

export default function Shop() {
  return (
    <>
      <Flex
        w="full"
        h="40vh"
        justifyContent="center"
        direction="column"
        gap="2"
      >
        <Heading className="poppins">Shop</Heading>
        <Text fontSize="sm" opacity=".7">
          Revamp your style with the latest designer trends in modern
          <br />
          furniture and achieve a perfectly crafted home thanks to
          <br />
          our line-up of limitless pieces.
        </Text>
      </Flex>
      <SimpleGrid columns={{ base: 1, md: 3 }} gap="10" pb="4">
        {items.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </SimpleGrid>
    </>
  );
}
