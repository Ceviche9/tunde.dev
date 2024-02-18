import { Stack, Text } from "@chakra-ui/react";

export function AboutMe(): JSX.Element {
  return (
    <Stack px={["10px", "25px"]} mt="5" direction="column">
      <Text
        fontSize={["md", "xl"]}
        fontWeight={["500", "400"]}
        color="gray.100"
      >
        Como desenvolvedor de software cearense, sou apaixonado por tecnologia,
        música e história. Tenho foco em desenvolvimento backend utilizando
        TypeScript, e prezo pela criação de códigos escaláveis e de alta
        qualidade, seguindo os princípios SOLID e Clean Code. Minha experiência
        abrange uma variedade de tecnologias, incluindo Java, Spring Boot,
        Express, MongoDB, Jest, Prisma e Docker.
      </Text>
      <Text
        fontSize={["md", "xl"]}
        fontWeight={["500", "400"]}
        color="gray.100"
      >
        Com um profundo entendimento dos fundamentos do desenvolvimento de
        software, busco sempre criar soluções eficientes e robustas. Minha
        abordagem se baseia em projetar arquiteturas sólidas e modularizadas,
        facilitando a manutenção e expansão dos sistemas.
      </Text>
      <Text
        fontSize={["md", "xl"]}
        fontWeight={["500", "400"]}
        color="gray.100"
      >
        Tenho um forte compromisso com a qualidade do código, garantindo que
        esteja limpo, legível e bem documentado. Acredito que um código bem
        estruturado não apenas facilita a colaboração entre equipes, mas também
        reduz os custos de manutenção a longo prazo. Estou constantemente em
        busca de novos desafios e projetos estimulantes, onde eu possa aplicar
        meu conhecimento e experiência para criar soluções inovadoras.
      </Text>
    </Stack>
  );
}
