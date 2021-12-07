import {useBreakpointValue, IconButton, Icon, HStack, Flex} from "@chakra-ui/react"
import { useSidebarDrawer } from "../../hooks/SidebarDrawerContext"

import {WideVersionHeader} from "./WideversionHeader"
import { RiMenuLine } from 'react-icons/ri';

import {Logo} from "./logo"

type HeaderProps = {
  isHomePage: boolean
}

export const Header = ({isHomePage}: HeaderProps) => {
  const {onOpen} = useSidebarDrawer()
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  if(isWideVersion) {
    if(isHomePage) {
      return (
        <WideVersionHeader isHomePage/>
      )
    }
    return (
      <WideVersionHeader/>
    )
  }
  return (
    <HStack justify="space-between">      
        <IconButton
        aria-label="Open navigation"
        icon={<Icon as={RiMenuLine}/>}
        fontSize="24"
        variant="unstyled" // para tirar background e borda
        onClick={onOpen}
        mr="2"
        />

      <Logo/>
    </HStack>
  )

}