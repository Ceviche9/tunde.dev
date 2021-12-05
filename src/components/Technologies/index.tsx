import {HStack, Text} from "@chakra-ui/react"

type TechnologiesProps = {
  title: string
}

export const Technologies = ({title}: TechnologiesProps) => {
  return(
    <HStack justifySelf="flex-start">
      <Text fontSize="md" fontWeight="400" color="purple.300">{'>'}</Text>
      <Text 
        fontSize="md" 
        fontWeight="bold" 
        color="gray.100"
        _hover={{
          color: "gray.50",
          fontSize: "lg",
          cursor: "pointer"
        }}
      >
        {title}
      </Text>
    </HStack>
  )
}