import {Flex, Text, HStack, Divider} from "@chakra-ui/react"

import Head from "next/head"

import {SkillsContainer} from "../components/Skills"
import {Header} from "../components/Header"
import {Sidebar} from "../components/Sidebar"
import {AboutMe} from "../components/AboutMe"
import { HomePageLinks } from '../components/Link/index';
import { Footer } from '../components/Footer/index';
import { Greetings } from '../components/Greetings/index';
import {DevPhoto} from "../components/DevPhoto"


export default function Home() {
  return (
    <>
      <Head>
        <title>Tunde.dev | Home</title>
      </Head>
      <Flex
        w="100%"
        flexDirection="column"
        p={["5", "10"]}
      >
        <Header isHomePage={true}/>
        <Sidebar isCurrentPage />
        <Divider borderColor="gray.800"/>

        <Flex
          px="55px"
          mt="35px"
          align="center"
          flexDirection="column"
        >
          <Greetings />
          <DevPhoto />
        </Flex>

        <Flex
          mt="10" 
          px="15px"
          flexDirection="column"
        >
          <HStack>
            <Text fontSize="2xl" fontWeight="400" color="purple.500">{'<'}</Text>
            <Text fontSize={["2xl", "3xl"]} fontWeight="bold" color="gray.100">Sobre</Text>
            <Text fontSize="2xl" fontWeight="400" color="purple.500">{'/>'}</Text>
          </HStack>

          <Divider borderColor="gray.800"/>

          <AboutMe/>

          <HomePageLinks/>

          <HStack mt="10">
            <Text fontSize="2xl" fontWeight="400" color="purple.500">{'<'}</Text>
            <Text fontSize="3xl" fontWeight="bold" color="gray.100">Hard Skills</Text>
            <Text fontSize="2xl" fontWeight="400" color="purple.500">{'/>'}</Text>
          </HStack>

          <Divider borderColor="gray.800"/>

          <Flex
            p="10"
            align="center"
            justify="center"
          >
              <SkillsContainer />
          </Flex>

        </Flex>

        <Footer />

      </Flex>
    </>
  )
}
