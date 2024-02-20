/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import {
  Grid,
  GridItem,
  Text,
  Flex,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";

import { icons, iconNames } from "./icons";
import { IconType } from "react-icons";

export const SkillsContainer = (): JSX.Element => {
  const animate = useAnimation();
  const isMobile = useBreakpointValue({
    base: "1700px",
    lg: "200px",
  });

  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: isMobile,
  });

  const skills = iconNames;

  useEffect(() => {
    if (inView) {
      void animate.start({
        scale: 1,
        transition: {
          type: "spring",
          duration: 1.5,
          damping: 3,
        },
      });
    } else {
      void animate.start({
        scale: 0.8,
        transition: {
          type: "spring",
          duration: 1,
          damping: 3,
        },
      });
    }
  }, [inView]);

  return (
    <Grid
      templateRows="repeat(2, 1fr)"
      templateColumns={["repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(4, 1fr)"]}
      px={["5px", "10px", "15px", "20px"]}
      gap={[5, 5, 8, 10]}
    >
      {skills.map((skill, index) => {
        const Icon: IconType = icons[index];
        const [showLabel, setShowLabel] = useState(false);

        return (
          <GridItem ref={ref} key={skill}>
            <motion.div
              animate={animate}
              whileHover={{
                scale: 1.12,
                transition: { delay: 0, duration: 0.2 },
              }}
            >
              <Flex
                align="center"
                justify="center"
                p="10"
                h={[140, 160]}
                w={[140, 160]}
                bgColor={["gray.600", "gray.700"]}
                borderBottomWidth="medium"
                borderColor="gray.200"
                onMouseEnter={() => {
                  setShowLabel(true);
                }}
                onMouseLeave={() => {
                  setShowLabel(false);
                }}
                borderRadius="25"
                _hover={{
                  borderWidth: "medium",
                  borderColor: "pink.400",
                  opacity: "1",
                  bgColor: "gray.900", // #290240
                  cursor: "pointer",
                }}
              >
                {showLabel ? (
                  <Text fontSize="2xl" fontWeight="bold">
                    {skill}
                  </Text>
                ) : (
                  <Icon size={80} />
                )}
              </Flex>
            </motion.div>
          </GridItem>
        );
      })}
    </Grid>
  );
};
