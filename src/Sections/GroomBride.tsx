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
  Grid,
  GridItem,
  AbsoluteCenter,
  Spacer
} from "@chakra-ui/react";
import  Logo180 from "../Asset/Logo180.png";
import Logo48 from "../Asset/Logo48.png";

type Props = {};
function GroomBride({}: Props) {

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
                        <Text fontSize={'20px'} as="i" color={"#483C32"}>Kedua Mempelai</Text>
                        <Heading fontSize={'50px'} as="i" color={"#C19A6B"}>Groom & Bride</Heading>
                    </Stack>
                    <Stack width={'100%'}>
                        <Box width={[
                                  "300px", // 0-30em
                                  "400px", // 30em-48em
                                  "800px", // 48em-62em
                                  "1080px", // 62em+
                                ]} 
                            position='relative'
                            p={'10px'}
                            >
                            <Stack justify="center" align="left">
                                <Heading fontSize={'20px'} as="h2" color={"#C19A6B"}>Rr. Sandy Sitia Nur Annisa</Heading>
                                <Text fontSize={{ base: "12px", md: "15px", lg: "18px" }} color={"#483C32"}>Putri dari Bapak Ir. R. Notariawan & Ibu Patiningsih </Text>
                            </Stack>
                        </Box>

                        <Box w='100%' position='relative' py='2rem'>
                          <Divider borderColor={'#C19A6B'} orientation='horizontal'/>
                            <AbsoluteCenter bg='#F9F6EE' px='4'>
                                <Image boxSize='50px' src={Logo48} alt='SG' />
                            </AbsoluteCenter>
                        </Box>

                        <Box width={[
                            "300px", // 0-30em
                            "400px", // 30em-48em
                            "800px", // 48em-62em
                            "1080px", // 62em+
                            ]} 
                            position='relative'
                            p={'10px'}
                        >
                            <Stack width={'100%'} justify="center" align="end">
                              <Heading fontSize={'20px'} as="h2" color={"#C19A6B"}>R. Muhammad Graha Eryck Pratama</Heading>
                              <Text fontSize={{ base: "12px", md: "15px", lg: "18px" }} color={"#483C32"}>Putra pertama dari Bapak R. Ahmad Yani (alm) & Ibu dr. Etin Jumarilli Amanar </Text>
                            </Stack>
                        </Box>

                        

                        {/* <Grid mt="2rem" templateColumns='repeat(4, 1fr)' gap={6}>
                          <GridItem colSpan={2} w='100%'>
                            <Stack justify="center" align="left">
                                <Divider borderColor={'#C19A6B'} orientation='horizontal'/>
                            </Stack>
                          </GridItem>

                          <GridItem colSpan={2} w='100%'>
                            <Stack justify="center" align="end">
                              <Heading fontSize={'20px'} as="h2" color={"#C19A6B"}>R. Muhammad Graha Eryck Pratama</Heading>
                              <Text fontSize={'18px'} color={"#483C32"}>Putra pertama dari Bapak R. Ahmad Yani & Ibu Etin Jumarilli Amanar </Text>
                            </Stack>
                          </GridItem>
                        </Grid> */}
                    </Stack>
                </Stack>
            </Flex>
        </Box>
        </>
    );

}

export default GroomBride;