import {HStack, Text, Link} from "@chakra-ui/react"

import NextLink from "next/link"
import { FiExternalLink } from 'react-icons/fi'

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
          spacing="8"
        >
          <NextLink href="/" passHref>
            <Text 
              fontWeight="400" 
              color="gray.300"
              _hover={{
                cursor: "pointer"
              }}
            >
              Sobre
            </Text>
          </NextLink>

          <NextLink href="/projects" passHref>
            <Text 
              fontWeight="500"
              borderBottomRadius="4"
              borderBottomWidth="medium"
              borderColor="gray.50"
              _hover={{
                cursor: "pointer",                
              }}
            >
              Projetos
            </Text>
          </NextLink>

          <Link 
            href="https://spacetraveling-tun.vercel.app/" 
            isExternal
          >
            <Text 
              fontWeight="400"
              color="gray.300"
              _hover={{
                cursor: "pointer",                
              }}
            >
              Blog
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
        spacing="8"
      >
        <NextLink 
          href="/" 
          passHref
        >
          <Text 
            fontWeight="500"
            borderBottomRadius="4"
            borderBottomWidth="medium"
            borderColor="gray.50"
            _hover={{
              cursor: "pointer"
            }}  
          >
            Sobre
          </Text>
        </NextLink>
        <NextLink href="/projects" passHref>
          <Text 
            fontWeight="400" 
            color="gray.300"
            _hover={{
              cursor: "pointer"
            }}
          >Projetos</Text>
        </NextLink>

        <Link 
            href="https://spacetraveling-tun.vercel.app/" 
            isExternal
          >
            <Text 
              fontWeight="400"
              color="gray.300"
              _hover={{
                cursor: "pointer",                
              }}
            >
              Blog
            </Text>
          </Link>

      </HStack>
    </HStack>
  )
}