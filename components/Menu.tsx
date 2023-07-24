import { useMenuStore } from "../store/menuStore";
import { Container, Text, Flex } from "@chakra-ui/react";
import Link from "next/link";
import { AiOutlinePlus } from "react-icons/ai";
import { navLinks } from "../constants";
import { useCart } from "react-use-cart";
import { AiOutlineShopping, AiFillShopping } from "react-icons/ai";

export default function Menu() {
  const { handleInitialState } = useMenuStore();
  const { isEmpty } = useCart();

  return (
    <Container maxW="6xl">
      <Flex
        w="full"
        h="10vh"
        justifyContent="end"
        alignItems="center"
        borderBottomWidth="1px"
        borderColor="lightgray"
      >
        <AiOutlinePlus
          style={{ transform: "rotate(45deg)" }}
          onClick={handleInitialState}
        />
      </Flex>
      <Flex w="full" direction="column">
        <Link href="/" onClick={handleInitialState}>
          <Text py="4" borderBottomWidth="1px" borderColor="lightgray">
            Home
          </Text>
        </Link>
        {navLinks.map((link) => (
          <Link href={link.link} key={link.id} onClick={handleInitialState}>
            <Text py="4" borderBottomWidth="1px" borderColor="lightgray">
              {link.text}
            </Text>
          </Link>
        ))}
        <Link
          href="/cart"
          onClick={handleInitialState}
          style={{ width: "100%" }}
        >
          <Flex
            py="4"
            borderBottomWidth="1px"
            borderColor="lightgray"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            w="full"
          >
            <Text>Cart</Text>
            {isEmpty ? <AiOutlineShopping /> : <AiFillShopping />}
          </Flex>
        </Link>
        <Link href="/" onClick={handleInitialState}>
          <Text py="4" borderBottomWidth="1px" borderColor="lightgray">
            Login
          </Text>
        </Link>
      </Flex>
    </Container>
  );
}
