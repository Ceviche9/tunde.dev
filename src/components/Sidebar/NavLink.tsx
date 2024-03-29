import { Button, Icon } from "@chakra-ui/react";
import type { NavLinkProps } from "./protocols/SidebarProtocols";

import { useRouter } from "next/router";

export const NavLink = ({
  title,
  icon,
  href,
  isCurrentPage = false,
  isExternal = false,
}: NavLinkProps): JSX.Element => {
  const router = useRouter();

  function handleClickButton(link: string, isExternal: boolean) {
    if (!isExternal) {
      return router.push(link);
    }
    // Se for um link externo, uma nova janela será aberta.
    window.open(link, "_blank");
  }

  if (isCurrentPage) {
    return (
      <Button
        leftIcon={<Icon as={icon} />}
        p="3"
        justifyContent="flex-start"
        borderBottomWidth="medium"
        borderBottomRadius="4"
        borderBottomColor="pink.500"
        bgColor="gray.900"
        _hover={{
          bgColor: "gray.900",
        }}
        color="white"
        fontSize="xl"
        onClick={() => handleClickButton(href, isExternal)}
      >
        {title}
      </Button>
    );
  }

  return (
    <Button
      leftIcon={<Icon as={icon} />}
      p="3"
      justifyContent="flex-start"
      bgColor="gray.700"
      _hover={{
        bgColor: "gray.900",
      }}
      fontSize="xl"
      onClick={() => handleClickButton(href, isExternal)}
      color="white"
    >
      {title}
    </Button>
  );
};
