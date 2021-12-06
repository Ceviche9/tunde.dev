import {useState} from "react"
import {Flex, HStack, Text, Divider, Button, Spinner, Stack} from "@chakra-ui/react"

import { motion } from "framer-motion"

import Head from "next/head"

import {
  SiGithub as Github,
} from "react-icons/si"

import {FiExternalLink as LInkIcon} from "react-icons/fi"

import {Banner} from "../../components/Banner"
import {About} from "../../components/About"
import {Technologies} from "../../components/Technologies"
import {Header} from "../../components/Header"

import { GetStaticProps } from "next"
import { getPrismicClient } from '../../services/prismic';

import {RichText} from "prismic-dom"

import Prismic from '@prismicio/client';

type ProjectDataProps = {
  link: string
  title: string
  banner: string
  about: string
  technologies: string[]
}

type ProjectsProps = {
  projects: ProjectDataProps[]
  next_page: string;
}

export default function Projects({projects, next_page}: ProjectsProps) {
  const [projectsArray, setProjectsArray] = useState<ProjectDataProps[]>(projects);
  const [nextPage, setNextPage] = useState(next_page);
  const [showLoading, setShowLoading] = useState(false);
  
  const loadProjects = async (): Promise<void> => {
    setShowLoading(true);
    setTimeout(async () => {
      if (nextPage) {
        try {
          const response = fetch(nextPage);
          const data = (await response).json();
          const newNextPage = (await data).next_page
          const newProjects = (await data).results.map(project => ({
            link: project.data.link.url,
            title: RichText.asText(project.data.title),
            banner: project.data.banner.url,
            about: RichText.asText(project.data.about),
            technologies: project.data.technologies.map(data => data.title1.map(text => text.text))
          }));

          setNextPage(newNextPage);
          setProjectsArray((projects) => [...projects, ...newProjects]);
          setShowLoading(false);
        } catch (err) {
          setShowLoading(false);
          alert('Um erro ocorreu ao tentar carregar mais projetos!');
        }
      }
    }, 200);
  };

  function handleLoadPosts() {
    loadProjects()
  }

  function handleClickButton(link: string) {
    window.open(link, '_blank')
  }

  return(
    <>
      <Head>
        <title>Tunde.dev | Projects</title>
      </Head>
      <Flex
        w="100%"
        flexDirection="column"
        p={["5", "10"]}
      >
        <Header isHomePage={false}/>
        <Divider borderColor="gray.800"/>

        <Flex
          mt="3"
          flexDirection="column"
          justify="center"
          align="center"
        >
          {projectsArray.map((project, index) => {
            return(
                <motion.div 
                  key={index} 
                  initial="hidden"
                  animate="visible"
                  whileHover={{ scale: 1.03, transition: {delay: 0, duration: 0.1} }}
                  variants={{
                    hidden: {
                      scale: 0.7,
                      opacity: 0
                    },
                    visible: {
                      scale: 1,
                      opacity: 1,
                      transition: {
                        delay: 0.2,
                        duration: 0.2
                      }
                    }
                  }}
                  >
                  <Stack
                    direction={['column', 'row']}
                    px={["4", "4"]}
                    py={["5", ""]}
                    mt="10"
                    w={[345 ,778]}
                    h={[582 ,415]}
                    borderRadius={["15", "20"]}
                    borderBottomWidth={["thick", "medium"]}
                    borderColor="purple.600"
                    bgColor="purple.900"
                    align="center"
                    justify="space-between"
                  >
                    <Banner image={project.banner}/>
                    <Flex
                      flex="1"
                      justify="flex-end"
                      h={315}
                      flexDirection="column"
                    >
                      <About title={project.title} about={project.about}/>

                      <Flex 
                        mt="2" 
                        px="5"
                        flexDirection="column"
                      >
                        {project.technologies.map((data, index) => {
                          return(
                            <Technologies key={index} title={data[0]}/>
                          )
                        })}
                      </Flex>
                      
                      <Flex
                        mt="2"
                        justify="center"
                      >
                        <Button
                          fontSize={["md","lg"]}
                          p={["5","3"]}
                          bgColor={["purple.600", "purple.900"]}
                          borderWidth="medium"
                          borderColor="purple.700"
                          _hover={{
                            bgColor: "purple.700"
                          }}
                          size="lg"
                          onClick={() => handleClickButton(project.link)}
                        >
                          Acessar repositório
                        </Button>
                      </Flex>

                    </Flex>
                  </Stack>
                </motion.div>
            )
          })}

          { showLoading 
            ? <Spinner mt="10" color='purple.500' size="lg"/>

            : nextPage ?
              <Flex
                mt="10"
              >
                <Button
                  w={300}
                  p="3"
                  bgColor="#0e0116"
                  borderWidth="medium"
                  borderColor="purple.700"
                  _hover={{
                    bgColor: "purple.700"
                  }}
                  size='3xl'
                  onClick={() => handleLoadPosts()}
                >
                  Carregar mais
                </Button>
              </Flex>
            : 
              <Flex
              mt="10"
            >
              <Button
                rightIcon={<LInkIcon size={18}/>}
                w={300}
                p="3"
                bgColor="#0e0116"
                borderWidth="medium"
                borderColor="purple.700"
                _hover={{
                  bgColor: "purple.700"
                }}
                size='3xl'
                onClick={() => handleClickButton("https://github.com/Ceviche9")}
              >
                Acessar Github
              </Button>
            </Flex>
          }

        </Flex>
        <HStack 
          mt="20"
          as="footer"
          align="flex-start"
          justify="center"
        >
          <Text fontSize="xs" color="gray.100">Made by Tundê Cavalcante</Text>
          <Github />
        </HStack>
      </Flex>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()
  const ProjectsResponse = await prismic.query(
    [Prismic.predicates.at('document.type', 'project')],
    {
      pageSize: 2,
      orderings: '[document.last_publication_date desc]',
    }
  )
  const projects = ProjectsResponse.results.map(project => {
    return {
      link: project.data.link.url,
      title: RichText.asText(project.data.title),
      banner: project.data.banner.url,
      about: RichText.asText(project.data.about),
      technologies: project.data.technologies.map(data => data.title1.map(text => text.text))
    }
  })

  return {
    props: {
      projects,
      next_page: ProjectsResponse.next_page
    },
    revalidate: 60 * 30, // 30 Minutos
  }
}