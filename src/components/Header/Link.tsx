import {Text} from "@chakra-ui/react"
import NextLink from "next/link"

type LinkProps = {
  isSelected?: boolean
  title: string
  href: string
}

export const LinkComponent = ({isSelected = false, title, href}: LinkProps) => {
  // Caso o usuário esteja na página do link, a estilização será diferente.
  if(isSelected) {
    return(
      <NextLink href={href} passHref>
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
          {title}
        </Text>
    </NextLink>
    )
  }

  return (
    <NextLink 
    href={href} 
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
        {title}
      </Text>
    </NextLink>
  )
}