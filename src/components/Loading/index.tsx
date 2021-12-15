import { Flex } from "@chakra-ui/react"

import {motion} from "framer-motion"

import {HiCode} from "react-icons/hi"

// import Image from "next/image"

export function Loading(): JSX.Element {
  return(
    <Flex
      h="100vh"
      w="100vw"
      align="center"
      justify="center"
    >
      <motion.div
        initial="hidden" 
        animate="visible" 
        variants={{
        hidden: {
          scale: 0.4,
          opacity: 0
        },
        visible: {
          scale: 1.3,
          opacity: 1,
          transition: {
            delay: 0,
            duration: 1.6
          }
        }
      }}>
        {/* <Image 
            width={420}
            height={410}
            alt="Dev"
            src="/images/tunde.svg"
          /> */}
        <HiCode size={45}/>
      </motion.div>
    </Flex>
  )
}