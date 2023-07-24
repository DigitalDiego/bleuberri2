import { Center, Flex, Heading, Text } from "@chakra-ui/react";

type Props = {
  id: number;
  name: string;
  heading: string;
};

export default function Story(props: Props) {
  return (
    <Center w="full" h={{ base: "50vh", md: "40vh" }}>
      <Flex w={{ base: "full", md: "70%" }} direction="column" gap="2">
        <Flex w="full" justifyContent="space-between" alignItems="center">
          <Heading className="poppins" fontSize="2xl">
            {props.heading}
          </Heading>
          <Text fontSize="sm">{props.name}</Text>
        </Flex>
        <Text fontSize="sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          nisi nam dolores sapiente, veritatis est rem ad! Aliquam, nesciunt
          laborum voluptate fugiat quos soluta deserunt aut dolorum. Dolores
          modi placeat, quaerat repudiandae tempore perferendis natus similique
          quas reiciendis accusamus ipsam. Deleniti, recusandae facere! Quos
          voluptate quam obcaecati saepe! Hic, eaque!
        </Text>
        <Text fontSize="sm" opacity=".7">
          Was this review helpful? | Flag as inappropiate
        </Text>
      </Flex>
    </Center>
  );
}
