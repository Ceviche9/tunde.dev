import { HStack, Text } from "@chakra-ui/react";

import { SiGithub as Github } from "react-icons/si";

export function Footer(): JSX.Element {
  return (
    <HStack mt="16" as="footer" align="flex-start" justify="center">
      <Text fontSize="xs" color="gray.100">
        Made by Tundê Cavalcante
      </Text>
      <Github />
    </HStack>
  );
}
