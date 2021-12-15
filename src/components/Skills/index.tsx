/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import {useState, useEffect} from "react"
import {useInView} from "react-intersection-observer"
import {Grid, GridItem, Text, Flex, useBreakpointValue} from "@chakra-ui/react"
import { motion, useAnimation } from "framer-motion"

import {icons} from "./icons"

export const SkillsContainer = (): JSX.Element => {
  const animate = useAnimation()
  const isMobile = useBreakpointValue({
    base: '1700px',
    lg: '200px'
  })

  const {ref, inView} = useInView({
    threshold: 0,
    rootMargin: isMobile
  })
  
  const skills = Object.keys(icons)

  useEffect(() => {
    if(inView) {
      void animate.start({
        scale: 1,
        transition: { 
          type: 'spring',
          duration: 1.5,
          damping: 3
        },
      })
    } else {
      void animate.start({
        scale: 0.8,
        transition: { 
          type: 'spring',
          duration: 1,
          damping: 3
        },
      })
    }
  }, [inView])

  return(
    <Grid
      templateRows='repeat(2, 1fr)'
      templateColumns={['repeat(2, 1fr)', 'repeat(2, 1fr)','repeat(4, 1fr)']}
      gap={10}
    >
      {skills.map(skill => {
        const Icon = icons[skill];
        const [showLabel, setShowLabel] = useState(false)

        return(
          <GridItem
            ref={ref} 
            key={skill}
          >
            <motion.div
              animate={animate}
              whileHover={{ scale: 1.12, transition: {delay: 0, duration: 0.2} }}
            >
              <Flex
                align="center"
                justify="center"
                p="10"
                h={160}
                w={160}
                bgColor={["#290240","#150121"]}
                borderBottomWidth="medium"
                borderColor="purple.700"
                onMouseEnter={() => { setShowLabel(true); }}
                onMouseLeave={() => { setShowLabel(false); }}
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
            </motion.div>
          </GridItem>
        )
      })}

    </Grid>
  )
}