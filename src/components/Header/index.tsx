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
      px={["","30px"]}
      justify="space-between"
      >
        <Text 
          fontWeight="bold" 
          fontSize={["xl","2xl"]}
        >
          Tundê.dev
        </Text>
        <HStack
          spacing={["4", "8"]}
        >
          <NextLink href="/" passHref>
            <Text
              fontSize={["xs", "md"]}
              fontWeight="400" 
              color="gray.300"
              _hover={{
                cursor: "pointer",
                borderBottomRadius: "4",
                borderBottomWidth: "medium",
                borderColor: "gray.500"
              }}
            >
              Sobre
            </Text>
          </NextLink>

          <NextLink href="/projects" passHref>
            <Text 
              fontSize={["xs", "md"]}
              fontWeight="500"
              borderBottomRadius="4"
              borderBottomWidth="medium"
              borderColor="purple.500"
              _hover={{
                cursor: "pointer",
                borderColor: "purple.300"               
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
              fontSize={["xs", "md"]}
              fontWeight="400"
              color="gray.300"
              _hover={{
                cursor: "pointer",
                borderBottomRadius: "4",
                borderBottomWidth: "medium",
                borderColor: "gray.500"     
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
    px={["","30px"]}
    justify="space-between"
  >
      <Text 
        fontWeight="bold" 
        fontSize={["xl","2xl"]}
      >
        Tundê.dev
      </Text>
      <HStack
        spacing={["4", "8"]}
      >
        <NextLink 
          href="/" 
          passHref
        >
          <Text 
            fontSize={["xs", "md"]}
            fontWeight="500"
            borderBottomRadius="4"
            borderBottomWidth="medium"
            borderColor="purple.500"
            _hover={{
              cursor: "pointer",
              borderColor: "purple.300"               
            }}
          >
            Sobre
          </Text>
        </NextLink>
        <NextLink href="/projects" passHref>
          <Text
            fontSize={["xs", "md"]}
            fontWeight="400" 
            color="gray.300"
            _hover={{
              cursor: "pointer",
              borderBottomRadius: "4",
              borderBottomWidth: "medium",
              borderColor: "gray.500" 
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
              fontSize={["xs", "md"]}
              fontWeight="400"
              color="gray.300"
              _hover={{
                cursor: "pointer",
                borderBottomRadius: "4",
                borderBottomWidth: "medium",
                borderColor: "gray.500"                
              }}
            >
              Blog
            </Text>
          </Link>

      </HStack>
    </HStack>
  )
}