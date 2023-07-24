import { useCart, Item } from "react-use-cart";
import { Flex, Image, Text, Heading } from "@chakra-ui/react";
import { formatCurrency } from "../utils";
import Link from "next/link";

export default function CartItem(props: Item) {
  const { removeItem, updateItemQuantity } = useCart();

  return (
    <Flex gap="4">
      <Image
        w="100px"
        h="100px"
        objectFit="cover"
        src={props?.image}
        alt={props?.name}
      />
      <Flex w="full" justifyContent="space-between">
        <Flex direction="column" justifyContent="center">
          <Link href={`/shop/${props?.id}`}>
            <Heading className="poppins" fontSize="md">
              {props?.name}
            </Heading>
          </Link>
          <Text fontSize="sm">Quantity: {props?.quantity}</Text>
          <Text fontSize="sm">{formatCurrency(props?.price, "USD")}</Text>
        </Flex>
        <Flex justifyContent="end" alignItems="end" h="full">
          <Text
            fontSize="sm"
            textDecoration="underline"
            cursor="pointer"
            onClick={() => removeItem(props?.id)}
          >
            Remove
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
