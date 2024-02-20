import type { ReactNode } from "react";
import { HStack, Divider, Stack, Text, SimpleGrid } from "@chakra-ui/react";

import { AboutCourse } from "./About";

type CourseProps = {
  title: string;
  where: string;
  coursesLink: string;
  status: string;
  about: string;
  children: ReactNode;
};

export const Course = ({
  about,
  title,
  children,
  where,
  status,
  coursesLink,
}: CourseProps) => {
  const whereColor = "gray.50";
  let statusColor = "gray.50";

  if (status === "Completed") {
    statusColor = "green.500";
  } else {
    statusColor = "yellow.500";
  }

  return (
    <Stack
      direction="column"
      spacing={2}
      maxWidth={360}
      p={4}
      borderRadius={25}
      borderBottomWidth="medium"
      borderTopWidth="thin"
      borderTopColor="gray.300"
      borderBottomColor="gray.400"
      bgColor="gray.700"
    >
      <AboutCourse title={title} about={about} href={coursesLink} />
      <HStack justify="space-between" px="3">
        <HStack>
          <Text fontSize="xs" fontWeight="500">
            Instituição:
          </Text>
          <Text fontSize={["sm", "md"]} fontWeight="bold" color={whereColor}>
            {where}
          </Text>
        </HStack>
        <HStack>
          {/* <Text 
              fontSize="xs" 
              fontWeight="500"
            > 
              Status:
            </Text> */}
          <Text fontSize={["sm", "sm"]} fontWeight="bold" color={statusColor}>
            {status}
          </Text>
        </HStack>
      </HStack>
      <Divider mt="1" />
      <SimpleGrid columns={2} gap={2}>
        {children}
      </SimpleGrid>
    </Stack>
  );
};
