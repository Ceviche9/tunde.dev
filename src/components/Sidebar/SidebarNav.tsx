import { Stack } from "@chakra-ui/react";
import { NavSection } from "./NavSection";
import { NavLink } from "./NavLink";
import { FaUserAstronaut } from "react-icons/fa";
import { BsCodeSlash, BsNewspaper } from "react-icons/bs";

import type { SidebarProps } from "./protocols/SidebarProtocols";

export const SidebarNav = ({ isCurrentPage }: SidebarProps): JSX.Element => {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="">
        <Stack direction="column" spacing="3">
          {isCurrentPage ? (
            <>
              <NavLink
                icon={FaUserAstronaut}
                href="/"
                title="About"
                isCurrentPage
              />
              <NavLink icon={BsCodeSlash} href="/projects" title="Projects" />
            </>
          ) : (
            <>
              <NavLink icon={FaUserAstronaut} href="/" title="About" />
              <NavLink
                icon={BsCodeSlash}
                href="/projects"
                title="Projects"
                isCurrentPage
              />
            </>
          )}
          <NavLink
            icon={BsNewspaper}
            href="https://tunde-blog.vercel.app/"
            isExternal
            title="Blog"
          />
        </Stack>
      </NavSection>
    </Stack>
  );
};
