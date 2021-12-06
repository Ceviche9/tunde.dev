import {Flex, Text, HStack, VStack, Stack, Link, Divider} from "@chakra-ui/react"

import {
    SiGithub as Github,
    SiLinkedin as Linkedin
} from "react-icons/si"

import {IoRocketSharp as Rocket} from "react-icons/io5"

import {AiOutlineMail as Mail} from "react-icons/ai"

import {SkillsContainer} from "../components/Skills"
import {Header} from "../components/Header"

import Image from "next/image"

export default function Home() {
  return (
    <Flex
      w="100%"
      flexDirection="column"
      p={["5", "10"]}
    >
      <Header isHomePage={true}/>
      <Divider borderColor="gray.800"/>

      <Flex
        px="55px"
        mt="35px"
        align="center"
        flexDirection="column"
      >
        <VStack>
          <Text
            paddingRight="5"
            fontSize="2xl" 
            fontWeight="400" 
            color="gray.200"
          >
            <Image
              src="/images/hi.gif"
              alt="Olá"
              width={28}
              height={27}
              layout="fixed"
            />{' '}
            Olá, eu sou
          </Text>
          <Text fontSize={["2xl", "5xl"]} fontWeight="bold" color="gray.50">Tundê Cavalcante</Text>
          <Text fontSize={["xl", "2xl"]} fontWeight="400" color="gray.300">Desenvolvedor FullStack</Text>
        </VStack>

        <Flex marginLeft={["6","16"]}>
          <Image 
            width={420}
            height={410}
            alt="Dev"
            src="/images/dev.svg"
          />
        </Flex>
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

        <Stack
          px="25px"
          mt="5" 
          direction="column"
        >
          <Text
            fontSize={["md", "xl"]}
            fontWeight="400"
            color="gray.100"
          >
            Em janeiro de 2020 decidi que não queria mais cursar licenciatura em Química, pois me identificava muito mais
            com o curso de Ciẽncia de Computação. Então comecei a me planejar para abrir mão de 4 semestres do curso de 
            licenciatura e esperar o edital de transferência interna da minha faculdade (IFCE). Infelizmente, com a 
            pandemia do Covid-19 os editais de transferências foram suspenso por um tempo indeterminado, portanto, 
            comecei por conta própria a mergulhar no mundo da tecnologia e do desenvolvimento de software.
          </Text>
          <Text
            fontSize={["md", "xl"]}
            fontWeight="400"
            color="gray.100"
          >
            Desenvolvedor full stack apaixonado pelas tecnologias de desenvolvimento back-end, front-end e mobile.
            Atualmente estou cursando o Ignite na  
            <Text 
              as="a" 
              color="green.400" 
              href="https://www.rocketseat.com.br/ignite"
              _hover={{
                color: "purple.500"
              }}
            > Rocketseat </Text> 
            e aprofundando meus conhecimentos em desenvolvimento, 
            com foco na construção de interfaces declarativas no NextJs, escrevendo códigos limpos e eficiente e escaláveis. 
            Sou apaixonado por música, tecnologia e quase toda semana adiciono um novo artigo ou tutorial no meu blog. 
          </Text>
        </Stack>

        <HStack
          spacing="2"
          mt="10"
          align="center"
          justify="flex-end"
        >
          <Link
            href="https://www.linkedin.com/in/tund%C3%AA-cavalcante-1621441ba/"
          >
            <Flex   
              p="1"
              width={10}
              height={10}
              alignItems="center"
              justifyContent="center"
              borderWidth="medium"
              borderColor="#0e0116"
              _hover={{
                borderColor: "purple.800"
              }}
            >
              <Linkedin size={23}/>
            </Flex>
          </Link>

          <Link 
            href="https://github.com/Ceviche9"
          >
            <Flex
              p="1"
              width={10}
              height={10}
              alignItems="center"
              justifyContent="center"
              borderWidth="medium"
              borderColor="#0e0116"
              _hover={{
                borderColor: "purple.800"
              }}
            >
              <Github size={25}/>
            </Flex>
          </Link>

          <Link href="https://app.rocketseat.com.br/me/tunde-cavalcante-08588">
            <Flex
              p="1"
              width={10}
              height={10}
              alignItems="center"
              justifyContent="center"
              borderWidth="medium"
              borderColor="#0e0116"
              _hover={{
                borderColor: "purple.800"
              }}
            >
              <Rocket size={30}/>
            </Flex>
          </Link>

          <Link href="mailto:ayotunde_sales@hotmail.com">
            <Flex
              p="1"
              width={10}
              height={10}
              alignItems="center"
              justifyContent="center"
              borderWidth="medium"
              borderColor="#0e0116"
              _hover={{
                borderColor: "purple.800"
              }}
            >
              <Mail size={30}/>
            </Flex>
          </Link>
        </HStack>

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
      <HStack 
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
