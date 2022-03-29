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
        Desenvolvedor, cearense, apaixonado por música, tecnologia e história. Desde 2021 focando em construir uma carreira
        profissional no mundo do desenvolvimento de software, escrevendo códigos limpos, eficientes e escaláveis.
      </Text>
      <Text
        fontSize={["md", "xl"]}
        fontWeight={["500","400"]}
        color="gray.100"
      >
        Atualmente estou me aprofundando no desenvolvimento back-end, com foco na construção de aplicações escaláveis 
        utilizando NodeJS, seguindo os princípios SOLID, Clean Architecture e DDD.
      </Text>
      <Text
        fontSize={["md", "xl"]}
        fontWeight={["500","400"]}
        color="gray.100"
      >
        Você pode entrar em contato comigo através das minhas redes, basta clicar em um dos ícones aqui em baixo.
      </Text>
    </Stack>
  )
}