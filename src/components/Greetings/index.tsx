import { VStack, Text } from "@chakra-ui/react"
import { motion } from "framer-motion"

import Image from "next/image"

export function Greetings(): JSX.Element {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          scale: .3,
          opacity: 0
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: .2
          }
        }
      }}>

      <VStack>
        <motion.div whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}>
          <Text
            paddingRight="5"
            fontSize="2xl"
            fontWeight="400"
            color="gray.200"
          >
            <Image
              src="/images/hi.gif"
              alt="Olá"
              width={28}
              height={27}
              layout="fixed"
            />{' '}
            Olá, eu sou
          </Text>
        </motion.div>
        <Text fontSize={["2xl", "5xl"]} fontWeight="bold" color="gray.50">Tundê Cavalcante</Text>
        <motion.div whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}>
          <Text fontSize={["xl", "2xl"]} fontWeight="400" color="gray.300">Desenvolvedor Back-end</Text>
        </motion.div>
      </VStack>
    </motion.div>
  )
}