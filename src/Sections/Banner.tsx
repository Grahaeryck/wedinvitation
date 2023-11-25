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
  Input,
  Select,
  Text,
  theme,
} from "@chakra-ui/react";
import bgIMG from "../Asset/Banner.jpeg"

type Props = {};
function Banner({}: Props) {

    return (
        <>
        <Box 
            mt={"-0.1rem"}
            maxW={"container.2xl"}
            h='calc(101vh)'
            bgImage={bgIMG}
            bgAttachment={'fixed'}
            bgSize="cover"
            bgPosition="center"
            bgRepeat="no-repeat"
            boxShadow='dark-lg'
        >
            <Flex 
                justify="center" 
                align={"center"}
                h={'inherit'}
            >
                <Stack align={'center'}>
                    <Heading fontSize={'50px'} as="i" color={"#f9f6ee"}>Sandy & Graha</Heading>
                    <Text fontSize={'20px'} as="p" color={"#f9f6ee"}>February 24, 2024 | Malang, Indonesia</Text>
                </Stack>
            </Flex>
        </Box>
        </>
    );

}

export default Banner;