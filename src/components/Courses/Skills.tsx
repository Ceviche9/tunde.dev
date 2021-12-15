import {HStack, Text} from "@chakra-ui/react"

type TechnologiesProps = {
  title: string
}

export const CourseSkills = ({title}: TechnologiesProps): JSX.Element => {
  return(
    <HStack justifySelf="flex-start">
      <Text fontSize="md" fontWeight="400" color="purple.300">{'>'}</Text>
      <Text 
        fontSize={["sm", "sm"]} 
        fontWeight="bold" 
        color="gray.100"
        _hover={{
          color: "pink.400",
          cursor: "pointer"
        }}
      >
        {title}
      </Text>
    </HStack>
  )
}