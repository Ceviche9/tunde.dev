import type { ElementType, ReactNode } from "react";

export type NavSectionProps = {
  title: string
  children: ReactNode
}

export type NavLinkProps = {
  icon: ElementType
  title: string
  href: string
  isExternal?: boolean
  isCurrentPage?: boolean
}

export type SidebarProps = {
  isCurrentPage?: boolean
}