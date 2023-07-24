import { useState } from "react";
import { GetServerSidePropsContext } from "next";
import { items } from "@/data";
import { ItemProps } from "@/types";
import {
  Flex,
  Heading,
  Text,
  Image,
  Button,
  Center,
  IconButton,
} from "@chakra-ui/react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { formatCurrency } from "@/utils";
import { useCart, Item } from "react-use-cart";
import { useRouter } from "next/navigation";

type Params = {
  id: string | undefined;
};

export default function Item({ id }: Params) {
  const [qty, setQty] = useState<number>(1);
  const item: ItemProps = items.filter((item) => item.id === id)[0];
  const router = useRouter();
  const { addItem } = useCart();

  const addToCart = (id: Item, qty: number) => {
    addItem(id, qty);
    setQty(1);
    router.push("/cart");
  };

  const descrease = () => {
    setQty((qty) => qty - 1);
  };
  const increase = () => {
    setQty((qty) => qty + 1);
  };
  return (
    <Flex
      w="full"
      h={{ md: "90vh" }}
      gap="4"
      direction={{ base: "column", md: "row" }}
      py={{ base: "5vh", md: "0" }}
    >
      <Center w={{ base: "full", md: "50%" }} h="full">
        <Image
          w="400px"
          h="400px"
          objectFit="cover"
          src={item.image}
          alt={item.name}
        />
      </Center>
      <Flex
        direction="column"
        gap="2"
        justifyContent="center"
        w={{ base: "full", md: "50%" }}
      >
        <Heading className="poppins" w={{ base: "full", md: "60%" }}>
          {item.name}
        </Heading>
        <Text>{formatCurrency(item.price, "USD")}</Text>
        <Text fontSize="sm" opacity=".7" w={{ base: "full", md: "80%" }}>
          Lorem ipsum dolor, sit amet consectetur <br />
          adipisicing elit. Fugit labore ea, velit iusto modi atque!
        </Text>
        <Flex
          alignItems="center"
          justifyContent="space-between"
          w={{ base: "full", md: "40%" }}
          borderWidth="1px"
          borderColor="black"
        >
          <IconButton
            aria-label="subtract"
            icon={<AiOutlineMinus />}
            bg="transparent"
            _hover={{ bg: "transparent" }}
            onClick={descrease}
            isDisabled={qty === 1}
          />
          <Text>{qty}</Text>
          <IconButton
            aria-label="add"
            icon={<AiOutlinePlus />}
            bg="transparent"
            _hover={{ bg: "transparent" }}
            onClick={increase}
          />
        </Flex>
        <Button
          w={{ base: "full", md: "40%" }}
          variant="outline"
          colorScheme="blackAlpha"
          rounded="none"
          onClick={() => addToCart(item, qty)}
        >
          Add to Cart
        </Button>
      </Flex>
    </Flex>
  );
}

export const getServerSideProps = async ({
  params,
}: GetServerSidePropsContext) => {
  const id = params?.id;

  return {
    props: {
      id,
    },
  };
};
