import {ChakraProvider} from "@chakra-ui/react"
import { motion } from "framer-motion"

import {AppProps} from "next/app"

import {theme} from "../styles/theme"

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" variants={{
        pageInitial: {
          opacity: 0.9
        },
        pageAnimate: {
          opacity: 1
        }
      }}>
        <Component {...pageProps} />
      </motion.div>
    </ChakraProvider>
  ) 
}

export default MyApp
