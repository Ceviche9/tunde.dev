
import {Button, Icon} from "@chakra-ui/react"
import { NavLinkProps } from "./protocols/SidebarProtocols"

import { useRouter } from 'next/router';

export const NavLink = ({title, icon, href, isExternal = false}: NavLinkProps) => {
  const router = useRouter()

  function handleClickButton(link: string, isExternal: boolean) {
    if(!isExternal) {
      return router.push(link)
    }
    window.open(link, '_blank')
  }

  return ( 
    <Button
      leftIcon={<Icon  as={icon}/>}
      p="3"
      justifyContent="flex-start"
      bgColor="#0e0116"
      _hover={{
        bgColor: "purple.700"
      }}
      fontSize="xl"
      onClick={() => handleClickButton(href, isExternal)}
    >
      {title}
    </Button>
  )
}