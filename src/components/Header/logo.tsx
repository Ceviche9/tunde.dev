import { HStack, Text } from "@chakra-ui/react";
import { LiaDev as Dev } from "react-icons/lia";

export function Logo(): JSX.Element {
  return (
    <HStack spacing={0}>
      <Text fontWeight="bold" fontSize={["xl", "2xl"]}>
        Tundê
      </Text>
      <Text color="pink.400" fontWeight="bold" fontSize={["xl", "2xl"]}>
        .
      </Text>
      <Dev size={45} />
    </HStack>
  );
}
