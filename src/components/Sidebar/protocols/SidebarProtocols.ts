import { ElementType, ReactNode } from "react";

export type NavSectionProps = {
  title: string
  children: ReactNode
}

export interface NavLinkProps {
  icon: ElementType
  title: string
  href: string
  isExternal?: boolean
  isCurrentPage?: boolean
}

export type SidebarProps = {
  isCurrentPage?: boolean
}