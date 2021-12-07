import {Stack, Button} from "@chakra-ui/react"
import { NavSection } from "./NavSection"
import { NavLink } from "./NavLink"
import {FaUserAstronaut} from "react-icons/fa"
import {BsCodeSlash, BsNewspaper} from "react-icons/bs"

import {SidebarProps} from "./protocols/SidebarProtocols"

export const SidebarNav = ({isHomePage}: SidebarProps) => {
  return(
    <Stack spacing="12" align="flex-start">
      <NavSection title="GERAL" >
        <Stack direction="column" spacing="3">
          <NavLink icon={FaUserAstronaut} href="/" title="Sobre"/>
          <NavLink icon={BsCodeSlash} href="/projects" title="Projetos"/>
          <NavLink 
            icon={BsNewspaper} 
            href="https://spacetraveling-tun.vercel.app/" 
            isExternal={true}
            title="Blog"
          />
        </Stack>
      </NavSection>
  </Stack>
  )
}