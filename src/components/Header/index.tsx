import {HStack, Text} from "@chakra-ui/react"

import Link from "next/link"

type HeaderProps = {
  isHomePage: boolean
}

export const Header = ({isHomePage}: HeaderProps) => {
  if(!isHomePage) {
    return (
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
          <Link href="/" passHref>
            <Text 
              fontWeight="400" 
              color="gray.300"
              _hover={{
                cursor: "pointer"
              }}
            >
              Sobre
            </Text>
          </Link>
          <Link href="/projects" passHref>
            <Text 
              fontWeight="500"
              _hover={{
                cursor: "pointer"
              }}
            >
              Projetos
            </Text>
          </Link>
        </HStack>
      </HStack>
    )
  }

  return(
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
        <Link 
          href="/" 
          passHref
        >
          <Text 
            fontWeight="500"
            _hover={{
              cursor: "pointer"
            }}  
          >
            Sobre
          </Text>
        </Link>
        <Link href="/projects" passHref>
          <Text 
            fontWeight="400" 
            color="gray.300"
            _hover={{
              cursor: "pointer"
            }}
          >Projetos</Text>
        </Link>
      </HStack>
    </HStack>
  )
}