import { Stack, Text } from "@chakra-ui/react";

export function AboutMe(): JSX.Element {
  return (
    <Stack px={["10px", "25px"]} mt="5" direction="column">
      <Text
        fontSize={["md", "xl"]}
        fontWeight={["500", "400"]}
        color="gray.100"
      >
        As a software developer from Ceará, I'm passionate about technology,
        music, and history. My focus lies in backend development using
        TypeScript, and I prioritize creating scalable and high-quality code,
        following SOLID and Clean Code principles. My experience spans across a
        variety of technologies, including Java, Spring Boot, Express, MongoDB,
        Jest, Prisma, and Docker.
      </Text>
      <Text
        fontSize={["md", "xl"]}
        fontWeight={["500", "400"]}
        color="gray.100"
      >
        With a deep understanding of software development fundamentals, I always
        strive to create efficient and robust solutions. My approach is based on
        designing solid and modular architectures, facilitating system
        maintenance and expansion.
      </Text>
      <Text
        fontSize={["md", "xl"]}
        fontWeight={["500", "400"]}
        color="gray.100"
      >
        I am deeply committed to code quality, ensuring it's clean, readable,
        and well-documented. I believe well-structured code not only facilitates
        collaboration among teams but also reduces long-term maintenance costs.
        I am constantly seeking new challenges and exciting projects where I can
        apply my knowledge and experience to create innovative solutions.
      </Text>
    </Stack>
  );
}
