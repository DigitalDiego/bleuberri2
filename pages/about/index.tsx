import { Flex, Heading, Text, Center } from "@chakra-ui/react";

export default function About() {
  return (
    <>
      <Flex
        w="full"
        h="40vh"
        justifyContent="center"
        direction="column"
        gap="2"
      >
        <Heading className="poppins">About</Heading>
        <Text fontSize="sm" opacity=".7">
          Welcome to Bleuberri.
        </Text>
      </Flex>
      <Center w="full" h="30vh">
        <Flex w={{ base: "full", md: "70%" }} direction="column" gap="2">
          <Text fontSize="sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            nisi nam dolores sapiente, veritatis est rem ad! Aliquam, nesciunt
            laborum voluptate fugiat quos soluta deserunt aut dolorum. Dolores
            modi placeat, quaerat repudiandae tempore perferendis natus
            similique quas reiciendis accusamus ipsam. Deleniti, recusandae
            facere! Quos voluptate quam obcaecati saepe! Hic, eaque!
          </Text>
        </Flex>
      </Center>
    </>
  );
}
