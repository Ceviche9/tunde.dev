import { useEffect } from 'react';
import router from 'next/router';

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
import { Courses } from '../components/Courses/index';


export default function Home() {

  useEffect(() => {
    router.prefetch('/projects')
  }, [])

  return (
    <>
      <Head>
        <title>Tunde.dev | Home</title>
      </Head>
      <Flex
        w="100%"
        flexDirection="column"
        p={["1", "4", "5", "10"]}
      >
        <Header isHomePage={true}/>
        <Sidebar isCurrentPage />
        <Divider borderColor="gray.800"/>

        <Flex
          px={["25px","35px","45px","55px"]}
          mt="35px"
          align="center"
          flexDirection="column"
        >
          <Greetings />
          <DevPhoto />
        </Flex>

        <Flex
          mt="10" 
          px={["2px","5px","10px","15px"]}
          justify="center"
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

          <HStack>
            <Text fontSize="2xl" fontWeight="400" color="purple.500">{'<'}</Text>
            <Text fontSize={["2xl", "3xl"]} fontWeight="bold" color="gray.100">Cursos</Text>
            <Text fontSize="2xl" fontWeight="400" color="purple.500">{'/>'}</Text>
          </HStack>

          <Divider borderColor="gray.800"/>
          
          <Courses />

          <HStack mt="10">
            <Text fontSize="2xl" fontWeight="400" color="purple.500">{'<'}</Text>
            <Text fontSize="3xl" fontWeight="bold" color="gray.100">Hard Skills</Text>
            <Text fontSize="2xl" fontWeight="400" color="purple.500">{'/>'}</Text>
          </HStack>

          <Divider borderColor="gray.800"/>

          <Flex
            p={["1","3","5","10"]}
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
