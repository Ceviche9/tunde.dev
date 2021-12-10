import {Flex} from "@chakra-ui/react"
import { motion } from "framer-motion"

import Image from "next/image"

export const DevPhoto = () => {
  return (
    <motion.div 
      initial="hidden" 
      animate="visible" 
      variants={{
      hidden: {
        scale: 0.5,
        opacity: 0
      },
      visible: {
        scale: 1,
        opacity: 1,
        transition: {
          delay: 0.6,
          duration: 0.5
        }
      }
    }}>
      <Flex marginLeft={["6","16"]}>
        <Image
          priority 
          width={420}
          height={410}
          alt="Dev"
          src="/images/tunde.svg"
        />
      </Flex>
    </motion.div>
  )
}