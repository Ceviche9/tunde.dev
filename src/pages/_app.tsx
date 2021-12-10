import { useState } from 'react';
import {AppProps} from "next/app";

import {ChakraProvider} from "@chakra-ui/react"
import {SidebarDrawerProvider} from "../hooks/SidebarDrawerContext"

import router from "next/router"

import {theme} from "../styles/theme"
import { Loading } from "../components/Loading"

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false)

  router.events.on('routeChangeStart', (url) => {
    setLoading(true)
  })

  router.events.on('routeChangeComplete', (url) => {
    setLoading(false)
  })

  return (
    <ChakraProvider theme={theme}>
      <SidebarDrawerProvider>
        {
          loading 
          ? <Loading /> 
          : <Component {...pageProps} />
        }
      </SidebarDrawerProvider>
    </ChakraProvider>
  ) 
}

export default MyApp
