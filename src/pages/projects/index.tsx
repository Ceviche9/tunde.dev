import {Flex, HStack, Text, Divider, Link, Button} from "@chakra-ui/react"

import Image from "next/image"

export default function Projects() {
  return(
    <Flex
      w="100%"
      flexDirection="column"
      p="10"
    >
         <HStack
        px="30px"
        justify="space-between"
      >
        <Text 
          fontWeight="bold" 
          fontSize="2xl"
        >
          Tundê.dev
        </Text>
        <HStack
          spacing="5"
        >
          <Link>
            <Text fontWeight="400" color="gray.300">Sobre</Text>
          </Link>
          <Link>
            <Text fontWeight="500">Projetos</Text>
          </Link>
        </HStack>
      </HStack>

      <Divider borderColor="gray.800"/>

      <Flex
        mt="10"
        flexDirection="column"
        justify="center"
        align="center"
      >
        <HStack justifySelf="flex-start">
            <Text fontSize="2xl" fontWeight="400" color="purple.500">{'>'}</Text>
            <Text fontSize="2xl" fontWeight="bold" color="gray.100">Confira alguns projetos pessoais que estive/estou trabalhando:</Text>
        </HStack>

        <HStack
          px="4"
          mt="10"
          w={778}
          h={415}
          bgColor="purple.900"
          align="center"
          justify="space-between"
        >
          <Flex
            // borderWidth="thin"
            // borderColor="gray.50"
          >
            <Image
              width={455}
              height={315}
              alt="Banner"
              src="/images/banner.png"
            />
          </Flex>
          <Flex
            flex="1"
            h={315}
            flexDirection="column"
          >
            <HStack justifySelf="flex-start">
              <Text fontSize="2xl" fontWeight="400" color="purple.500">{'>'}</Text>
              <Text fontSize="lg" fontWeight="bold" color="gray.100">Letmeask</Text>
            </HStack>

            <Flex mt="5" px="5">
              <Text color="gray.100" fontSize="md">Plataforma online de perguntas e responsas em tempo real.</Text>
            </Flex>

            <Flex 
              mt="5" 
              px="5"
              flexDirection="column"
            >
              <HStack justifySelf="flex-start">
                <Text fontSize="md" fontWeight="400" color="purple.500">{'>'}</Text>
                <Text fontSize="md" fontWeight="bold" color="gray.100">React</Text>
              </HStack>

              <HStack justifySelf="flex-start">
                <Text fontSize="md" fontWeight="400" color="purple.500">{'>'}</Text>
                <Text fontSize="md" fontWeight="bold" color="gray.100">Firebase</Text>
              </HStack>

              <HStack justifySelf="flex-start">
                <Text fontSize="md" fontWeight="400" color="purple.500">{'>'}</Text>
                <Text fontSize="md" fontWeight="bold" color="gray.100">Typescript</Text>
              </HStack>
            </Flex>

            <Button 
              mt="75px"
              bgColor="purple.900"
              borderWidth="medium"
              borderColor="purple.700"
              _hover={{
                bgColor: "purple.700"
              }}
              size='lg'
            >
              Acessar repositório
            </Button>

          </Flex>
        </HStack>

      </Flex>


    </Flex>
  )
}