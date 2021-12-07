import { ElementType, ReactNode } from "react";
import {LinkProps as ChakraLinkProps} from "@chakra-ui/react"

export type NavSectionProps = {
  title: string
  children: ReactNode
}

export interface NavLinkProps {
  icon: ElementType
  title: string
  href: string
  isExternal?: boolean
}

export type SidebarProps = {
  isHomePage?: boolean
}