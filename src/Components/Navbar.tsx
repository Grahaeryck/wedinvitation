import { ReactNode, useState, useMemo, useEffect } from "react";
import {
  Box,
  Flex,
  Heading,
  Spacer,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
  Container,
  Divider,
  Text,
  theme,
} from "@chakra-ui/react";

type Props = {
    screen: string | undefined;
    layoutSize: string | undefined;
  };
  
  const PageLinks = [
    "Dashboard",
    "New Request",
    "Existing Request",
    "Admin",
    "FAQ",
  ];

  function Navbar({ screen, layoutSize }: Props) {

    return (
        <>
        <Box>
          <Container
            maxW={"container.2xl"}
            px={["2rem", "2rem", "2rem", "2rem"]}
          >
            <Flex as="nav" p="10px" alignItems="center">
              <Heading as="h1">SG.</Heading>
              <Spacer></Spacer>

              <HStack spacing="20px">
                <Box p="10px">Home</Box>
                <Box p="10px">Event</Box>
                <Box p="10px">Story</Box>
                <Box p="10px">Galery</Box>
              </HStack>
            </Flex>
          </Container>
        </Box>
        </>
    );
  }

  export default Navbar;