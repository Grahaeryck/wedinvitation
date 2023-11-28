import { ReactNode, useState, useMemo, useEffect } from "react";
import {
  Box,
  Flex,
  Heading,
  Stack,
  Image,
  Divider,
  Text,
  AbsoluteCenter
} from "@chakra-ui/react";
import  Logo180 from "../Asset/Logo180.png";
import Logo48 from "../Asset/Logo48.png";

type Props = {};
function Story({}: Props) {

    return (
        <>
        <Box 
            maxW={"container.2xl"}
            h="wrap"
            bg={"#F9F6EE"}
        >
            <Flex 
                justify="center" 
                align="center"
                h={'inherit'}
            >
                <Stack mt="6rem" mb="6rem">
                    <Stack align={'center'}>
                        <Text fontSize={{ base: "18px", md: "20px" , lg: "25px" }} as="i" color={"#483C32"}>HAtiuntukberSANDar</Text>
                        <Heading fontSize={{ base: "35px", md: "45px" , lg: "50px" }} as="i" color={"#C19A6B"}>Our Story</Heading>
                    </Stack>
                </Stack>
            </Flex>
        </Box>
        </>
    );

}

export default Story;