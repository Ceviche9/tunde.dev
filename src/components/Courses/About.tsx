import {HStack, Text, Flex, Link} from "@chakra-ui/react"

type AboutProps = {
  title: string
  about: string
  href: string
}

export function AboutCourse({title, about, href}: AboutProps): JSX.Element {
  return(
    <>
      <Link href={href} isExternal _hover={{
        textDecoration: "none",
      }}>
        <HStack justifySelf="flex-start">
          <Text fontSize="2xl" fontWeight="400" color="purple.400">{'>'}</Text>
          <Text 
            fontSize="lg" 
            fontWeight="bold" 
            color="gray.50"
            _hover={{
              color: "purple.300"
            }}
          >{title}</Text>
        </HStack>
      </Link>

      <Flex mt={["1", "2"]} px="2">
        <Text color="gray.100" fontSize="sm">{about}</Text>
      </Flex>
    </>

  )
}