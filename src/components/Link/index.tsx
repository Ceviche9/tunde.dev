import { HStack } from "@chakra-ui/react";

import { LinkComponent } from "./Link";

import { SiGithub as Github, SiLinkedin as Linkedin } from "react-icons/si";

import { AiOutlineMail as Mail } from "react-icons/ai";

export function HomePageLinks(): JSX.Element {
  return (
    <HStack spacing="2" mt="10" align="center" justify="flex-end">
      <LinkComponent href="https://www.linkedin.com/in/tund%C3%AA-cavalcante/">
        <Linkedin size={23} />
      </LinkComponent>

      <LinkComponent href="https://github.com/Ceviche9">
        <Github size={25} />
      </LinkComponent>

      <LinkComponent href="mailto:ayotunde_sales@hotmail.com">
        <Mail size={30} />
      </LinkComponent>
    </HStack>
  );
}
