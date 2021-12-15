import {Flex, Image, useBreakpointValue} from "@chakra-ui/react"

type BannerProps = {
  image: string
}

export function Banner({image}: BannerProps): JSX.Element {
  const isMobile = useBreakpointValue({
    base: true,
    lg: false
  })

  return(
    <Flex>
      { isMobile ?
          <Image
          width={305}
          height={213}
          alt="Banner"
          src={image}
        />
        :
        <Image
          width={455}
          height={315}
          alt="Banner"
          src={image}
        />
      }
    </Flex>
  )
}