import {Flex, Image} from "@chakra-ui/react"

type BannerProps = {
  image: string
}

export const Banner = ({image}: BannerProps) => {
  return(
    <Flex>
      <Image
        width={455}
        height={315}
        alt="Banner"
        src={image}
      />
    </Flex>
  )
}