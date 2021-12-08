import {Flex, Link as ChakraLink} from "@chakra-ui/react"

import { motion } from "framer-motion"

import { ReactNode } from "react"

type LinkComponentProps = {
  children: ReactNode
  href: string
}

export const LinkComponent = ({children, href}: LinkComponentProps) => {
  return (
    <ChakraLink 
    href={href}
    isExternal
  >
    <motion.div whileHover={{ scale: 1.4, transition: {duration: 0.2} }}>
      <Flex
        p="1"
        width={10}
        height={10}
        alignItems="center"
        justifyContent="center"
      >
        {children}
      </Flex>
    </motion.div>
  </ChakraLink>
  )
}