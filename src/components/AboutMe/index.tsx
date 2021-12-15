import {Stack, Text} from "@chakra-ui/react"

export function AboutMe(): JSX.Element {
  return(

    <Stack
    px={["10px", "25px"]}
    mt="5" 
    direction="column"
    >
      <Text
        fontSize={["md", "xl"]}
        fontWeight={["500","400"]}
        color="gray.100"
      >
        Em janeiro de 2020 decidi que não fazia mais sentido cursar licenciatura em Química, pois me identificava muito mais
        com o curso de Ciência de Computação. Então comecei a me planejar para abrir mão de 4 semestres do curso de 
        licenciatura e esperar o edital de transferência interna da minha faculdade (IFCE). Infelizmente, com a 
        pandemia do Covid-19 os editais de transferências foram suspenso por um tempo indeterminado, portanto, 
        comecei por conta própria a mergulhar no mundo da tecnologia e do desenvolvimento de software.
      </Text>
      <Text
        fontSize={["md", "xl"]}
        fontWeight={["500","400"]}
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
  )
}