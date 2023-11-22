import { ReactNode, useState, useMemo, useEffect } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Heading,
  // Link,
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
  

  function Footbar({ screen, layoutSize }: Props) {

    return (
        <>
        <Box>
          <Container
            maxW={"container.2xl"}
            px={["0rem", "4rem", "4rem", "0rem"]}
          >
            {/* <Flex bg="#F9F6EE" justify="center" > */}
            <Flex justify="center">
              <Text m="10px">Sandy & Graha 2024 | Designed by Poipoi</Text>
            </Flex>
          </Container>
        </Box>
        </>
    );
  }

  export default Footbar;