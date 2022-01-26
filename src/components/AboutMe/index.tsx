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
        profissional no mundo do desenvolvimento de software, escrevendo códigos limpos, eficientes e escaláveis. Sou graduando
        em Licenciatura em Química pelo IFCE, porém já fiz/faço alguns cursos na área de desenvolvimento.
      </Text>
      <Text
        fontSize={["md", "xl"]}
        fontWeight={["500","400"]}
        color="gray.100"
      >
        Atualmente estou me aprofundando no desenvolvimento Frontend, com foco na construção de aplicações responsivas 
        utilizando tecnologias de interface declarativa. Minhas techs favoritas são: Typescript, Next.js, Node e Chakra UI.
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