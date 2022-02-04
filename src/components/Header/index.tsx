import {useBreakpointValue, IconButton, Icon, HStack} from "@chakra-ui/react"
import { useSidebarDrawer } from "../../hooks/SidebarDrawerContext"

import {WideVersionHeader} from "./WideversionHeader"
import { RiMenuLine } from 'react-icons/ri';

import {Logo} from "./logo"

type HeaderProps = {
  isHomePage: boolean
}

// A header se comporta e forma diferente dependendo od tamanho da tela.
export function Header({isHomePage}: HeaderProps): JSX.Element {
  const {onOpen} = useSidebarDrawer()
  // Para verificar se a tela é mobile ou wide.
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
  // Caso a tela seja mobile, o menu será renderizaddo.
  return (
    <HStack 
      justify="space-between">      
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