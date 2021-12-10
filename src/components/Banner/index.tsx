import {Flex} from "@chakra-ui/react"
import { useBreakpointValue } from '@chakra-ui/react'

import Image from "next/image"

type BannerProps = {
  image: string
}

export const Banner = ({image}: BannerProps) => {
  const isMobile = useBreakpointValue({
    base: true,
    lg: false
  })

  return(
    <Flex>
      { isMobile ?
          <Image
          priority
          width={305}
          height={213}
          alt="Banner"
          src={image}
        />
        :
        <Image
          priority
          width={455}
          height={315}
          alt="Banner"
          src={image}
        />
      }
    </Flex>
  )
}