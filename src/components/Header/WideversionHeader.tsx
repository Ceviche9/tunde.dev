import { HStack, Text, Link } from "@chakra-ui/react";

import { Logo } from "./logo";
import { LinkComponent } from "./Link";

type HeaderProps = {
  isHomePage?: boolean;
};

export const WideVersionHeader = ({ isHomePage = false }: HeaderProps) => {
  if (isHomePage) {
    return (
      <HStack px={["", "30px"]} justify="space-between">
        <Logo />
        <HStack spacing={["4", "8"]}>
          <LinkComponent title="About" href="/" />

          <LinkComponent isSelected title="Projects" href="/projects" />

          <Link href="https://tunde-blog.vercel.app/" isExternal>
            <Text
              fontSize={["xs", "md"]}
              fontWeight="400"
              color="gray.300"
              _hover={{
                cursor: "pointer",
                borderBottomRadius: "4",
                borderBottomWidth: "medium",
                borderColor: "gray.500",
              }}
            >
              Blog
            </Text>
          </Link>
        </HStack>
      </HStack>
    );
  }
  return (
    <HStack px={["", "30px"]} justify="space-between">
      <Logo />
      <HStack spacing={["4", "8"]}>
        <LinkComponent isSelected title="About" href="/" />

        <LinkComponent title="Projects" href="/projects" />

        <Link href="https://tunde-blog.vercel.app/" isExternal>
          <Text
            fontSize={["xs", "md"]}
            fontWeight="400"
            color="gray.300"
            _hover={{
              cursor: "pointer",
              borderBottomRadius: "4",
              borderBottomWidth: "medium",
              borderColor: "gray.500",
            }}
          >
            Blog
          </Text>
        </Link>
      </HStack>
    </HStack>
  );
};
