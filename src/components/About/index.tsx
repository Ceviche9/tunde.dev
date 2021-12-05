import {HStack, Text, Flex} from "@chakra-ui/react"

type TitleProps = {
  title: string
  about: string
}

export const About = ({title, about}: TitleProps) => {
  return(
    <>
      <HStack justifySelf="flex-start">
        <Text fontSize="2xl" fontWeight="400" color="purple.400">{'>'}</Text>
        <Text fontSize="lg" fontWeight="bold" color="gray.50">{title}</Text>
      </HStack>

      <Flex mt="2" px="5">
        <Text color="gray.100" fontSize="sm">{about}</Text>
      </Flex>
    </>

  )
}