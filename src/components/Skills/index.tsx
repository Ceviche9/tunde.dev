/* eslint-disable react-hooks/rules-of-hooks */
import {useState} from "react"
import {Grid, GridItem, Text, Flex, Tooltip} from "@chakra-ui/react"

import {icons} from "./icons"

export const SkillsContainer = () => {
  
  const skills = Object.keys(icons)

  return(
    <Grid
      templateRows='repeat(2, 1fr)'
      templateColumns={['repeat(1, 1fr)', 'repeat(4, 1fr)']}
      gap={10}
    >
      {skills.map(skill => {
        const Icon = icons[skill];
        const [showLabel, setShowLabel] = useState(false)

        return(
          <GridItem 
            key={skill}
          >
            <Flex
              align="center"
              justify="center"
              p="10"
              h={160}
              w={160}
              bgColor="#150121"
              borderBottomWidth="medium"
              borderColor="purple.700"
              onMouseEnter={() => setShowLabel(true)}
              onMouseLeave={() => setShowLabel(false)}
              borderRadius="25"
              _hover={{
                borderWidth: "medium",
                borderColor: "purple.500",
                opacity: "1",
                bgColor: "#0d0114", // #290240
                cursor: "pointer"
              }}
            > 
              { showLabel ?
                <Text fontSize="2xl" fontWeight="bold">{skill}</Text>
                : <Icon size={80}/>
              }
            </Flex>
          </GridItem>
        )
      })}

    </Grid>
  )
}