import { Box, 
  useBreakpointValue, 
  Drawer, 
  DrawerOverlay, 
  DrawerContent, 
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody
} from '@chakra-ui/react'
import { useSidebarDrawer } from '../../hooks/SidebarDrawerContext';
import { SidebarNav } from './SidebarNav';

import {SidebarProps} from "./protocols/SidebarProtocols"

export const Sidebar = ({isCurrentPage}: SidebarProps) => {
  const {isOpen, onClose} = useSidebarDrawer()

  return(
    <Drawer
      isOpen={isOpen} 
      placement="left" 
      onClose={onClose}
    >
      <DrawerOverlay  p="4">
        <DrawerContent bgColor="#0e0116">
          <DrawerCloseButton mt="6"/>
          <DrawerHeader>Navegação</DrawerHeader>
          <DrawerBody>
            <SidebarNav isCurrentPage={isCurrentPage}/>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
   )
}