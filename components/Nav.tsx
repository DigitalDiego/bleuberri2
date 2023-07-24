import {
  Center,
  Flex,
  Container,
  Heading,
  Text,
  InputGroup,
  InputLeftElement,
  Input,
  IconButton,
  Box,
} from "@chakra-ui/react";
import Link from "next/link";
import { navLinks } from "../constants";
import {
  AiOutlineSearch,
  AiOutlineShopping,
  AiOutlineMenu,
  AiFillShopping,
} from "react-icons/ai";
import { useCart } from "react-use-cart";
import { useMenuStore } from "../store/menuStore";

export default function Nav() {
  const { isEmpty } = useCart();
  const { handleInitialState } = useMenuStore();

  return (
    <Center
      w="full"
      borderBottomWidth="1px"
      borderColor="lightgray"
      h="10vh"
      position="sticky"
      top="0"
      right="0"
      bg="white"
      zIndex="10"
    >
      <Container maxW={{ base: "6xl", md: "7xl" }}>
        <Flex w="full" justifyContent="space-between" alignItems="center">
          <Flex alignItems="center" gap="10">
            <Link href="/">
              <Heading
                className="lobster"
                fontSize={{ base: "3em", md: "2.5em" }}
              >
                Bleuberri
              </Heading>
            </Link>
            {navLinks.map((link) => (
              <Text
                display={{ base: "none", md: "inline" }}
                fontSize="sm"
                key={link.id}
              >
                <Link href={link.link}>{link.text}</Link>
              </Text>
            ))}
            <InputGroup display={{ base: "none", md: "flex" }}>
              <InputLeftElement>
                <AiOutlineSearch />
              </InputLeftElement>
              <Input
                type="text"
                placeholder="Search"
                border="none"
                outline="none"
                focusBorderColor="transparent"
                fontSize="sm"
              />
            </InputGroup>
          </Flex>
          <Flex
            alignItems="center"
            gap="10"
            display={{ base: "none", md: "flex" }}
          >
            <Link href="/cart">
              {isEmpty ? <AiOutlineShopping /> : <AiFillShopping />}
            </Link>
            <Text fontSize="sm">Login</Text>
          </Flex>
          <Box onClick={handleInitialState} display={{ md: "none" }}>
            <AiOutlineMenu />
          </Box>
        </Flex>
      </Container>
    </Center>
  );
}
