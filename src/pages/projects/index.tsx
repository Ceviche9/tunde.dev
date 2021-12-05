import {useState} from "react"
import {Flex, HStack, Text, Divider, Button, Spinner} from "@chakra-ui/react"

import {
  SiGithub as Github,
} from "react-icons/si"

import {Banner} from "../../components/Banner"
import {About} from "../../components/About"
import {Technologies} from "../../components/Technologies"
import {Header} from "../../components/Header"

import { GetStaticProps } from "next"
import { getPrismicClient } from '../../services/prismic';
import Prismic from '@prismicio/client';
import { useRouter } from "next/router"

type ProjectDataProps = {
  banner: string
  title: string[]
  link: string
  about: string[]
  Technologies: string[]
}

type ProjectResponseProps = {
  data: {
    banner: {
      url: string
    }
    title: [
      {text: string}
    ]
    link: {
      url: string
    }
    about: [
      {text: string}
    ]
    technologies: any
  }
}

type ProjectsPaginationProps = {
  next_page: string;
  results: ProjectResponseProps[];
}

type ProjectsProps = {
  projects: ProjectDataProps[]
  next_page: string;
}

export default function Projects({projects, next_page}: ProjectsProps) {
  const route = useRouter()
  const [projectsArray, setProjectsArray] = useState<ProjectDataProps[]>(projects);
  const [nextPage, setNextPage] = useState<string>(next_page);
  const [showLoading, setShowLoading] = useState(false);

  const loadPosts = async (): Promise<void> => {
    setShowLoading(true);
    setTimeout(async () => {
      if (next_page) {
        try {
          const response = fetch(next_page);
          const data: Promise<ProjectsPaginationProps> = (await response).json();
          const newProjects = (await data).results.map(project => ({
            link: project.data.link.url,
            title: project.data.title.map(data => data.text),
            banner: project.data.banner.url,
            about: project.data.about.map(data => data.text),
            Technologies: project.data.technologies.map(data => data.title1.map(text => text.text))
          }));

          console.log("Dentro do load", newProjects)

          setNextPage((await data).next_page);
          setProjectsArray([...projects, ...newProjects]);
          setShowLoading(false);
        } catch (err) {
          setShowLoading(false);
          alert('Um erro ocorreu ao tentar carregar mais projetos!');
        }
      }
    }, 200);
  };

  function handleLoadPosts() {
    loadPosts()
  }

  function handleClickButton(link: string) {
    route.push(link)
  }

  return(
    <Flex
      w="100%"
      flexDirection="column"
      p="10"
    >
      <Header isHomePage={false}/>
      <Divider borderColor="gray.800"/>

      <HStack
        mt="10" 
        justifySelf="flex-start"
      >
          <Text fontSize="2xl" fontWeight="400" color="purple.500">{'<'}</Text>
          <Text fontSize="2xl" fontWeight="bold" color="gray.100">Portfólio</Text>
          <Text fontSize="2xl" fontWeight="400" color="purple.500">{'/>'}</Text>
      </HStack>

      <Text
        mt="2"
        fontSize="md" 
        color="gray.200"
      >
        A seguir confira alguns projetos pessoais que estive/estou trabalhando:
      </Text>

      <Flex
        mt="3"
        flexDirection="column"
        justify="center"
        align="center"
      >
        {projectsArray.map((project, index) => {
          return(
            <HStack
              key={index}
              px="4"
              mt="10"
              w={778}
              h={415}
              borderRadius="20"
              borderBottomWidth="medium"
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
                <About title={project.title[0]} about={project.about[0]}/>

                <Flex 
                  mt="2" 
                  px="5"
                  flexDirection="column"
                >
                  {project.Technologies.map((data, index) => {
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
                    p="3"
                    bgColor="purple.900"
                    borderWidth="medium"
                    borderColor="purple.700"
                    _hover={{
                      bgColor: "purple.700"
                    }}
                    size='lg'
                    onClick={() => handleClickButton(project.link)}
                  >
                    Acessar repositório
                  </Button>
                </Flex>

              </Flex>
            </HStack>
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
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()
  const ProjectsResponse = await prismic.query(
    [Prismic.predicates.at('document.type', 'project')],
    {
      pageSize: 2,
      orderings: '[document.first_publication_date]',
    }
  )

  const projects = ProjectsResponse.results.map(project => {
    return {
      link: project.data.link.url,
      title: project.data.title.map(data => data.text),
      banner: project.data.banner.url,
      about: project.data.about.map(data => data.text),
      Technologies: project.data.technologies.map(data => data.title1.map(text => text.text))
    }
  })

  return {
    props: {
      projects,
      next_page: ProjectsResponse.next_page
    }
  }
}