import {ChakraProvider} from "@chakra-ui/react"

import {SidebarDrawerProvider} from "../hooks/SidebarDrawerContext"

import {AppProps} from "next/app"

import {theme} from "../styles/theme"

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <SidebarDrawerProvider>
        <Component {...pageProps} />
      </SidebarDrawerProvider>
    </ChakraProvider>
  ) 
}

export default MyApp
