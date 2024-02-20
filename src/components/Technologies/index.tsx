import { HStack, Text } from "@chakra-ui/react";

type TechnologiesProps = {
  title: string;
};

export const Technologies = ({ title }: TechnologiesProps): JSX.Element => {
  return (
    <HStack justifySelf="flex-start">
      <Text fontSize="md" fontWeight="400" color="pink.400">
        {">"}
      </Text>
      <Text
        fontSize={["sm", "md"]}
        fontWeight="bold"
        color="gray.100"
        _hover={{
          color: "gray.50",
          fontSize: "lg",
          cursor: "pointer",
        }}
      >
        {title}
      </Text>
    </HStack>
  );
};
