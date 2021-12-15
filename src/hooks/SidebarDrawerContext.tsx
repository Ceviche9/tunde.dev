/* eslint-disable @typescript-eslint/consistent-type-assertions */
/* eslint-disable react-hooks/exhaustive-deps */
import type { UseDisclosureReturn } from "@chakra-ui/hooks";
import { useDisclosure } from "@chakra-ui/hooks";
import { useRouter } from "next/router";
import type { ReactNode} from "react";
import { createContext, useContext, useEffect } from "react"

type SidebarDrawerProps = {
  children: ReactNode
}

type SidebarDrawerContextData = UseDisclosureReturn

const SidebarDrawerContext = createContext({} as SidebarDrawerContextData);

export const SidebarDrawerProvider = ({children}: SidebarDrawerProps): JSX.Element => {
  const disclosure = useDisclosure()
  const router = useRouter()

  useEffect(() => {
    disclosure.onClose()
  }, [router.asPath])

  return(
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  )
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext)