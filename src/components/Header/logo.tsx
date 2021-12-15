import {HStack, Text} from "@chakra-ui/react"
import {GiCat as Cat} from "react-icons/gi"

export function Logo(): JSX.Element {
  return(
    <HStack>
    <Text
      fontWeight="bold" 
      fontSize={["xl","2xl"]}
    >
      Tundê.dev
    </Text>
    <Cat size={25}/>
  </HStack>
  )
}