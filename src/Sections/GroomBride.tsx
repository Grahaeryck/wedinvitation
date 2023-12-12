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

type Props = {lang : string;};
function GroomBride({lang}: Props) {

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
                        <Text fontSize={{ base: "18px", md: "20px" , lg: "25px" }} as="i" color={"#483C32"}>Kedua Mempelai</Text>
                        <Heading fontSize={{ base: "35px", md: "45px" , lg: "50px" }} as="i" color={"#C19A6B"}>Bride & Groom</Heading>
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
                                {lang == "id" ? 
                                (
                                    <Text fontSize={{ base: "12px", md: "15px", lg: "18px" }} color={"#483C32"}>
                                        Putri dari Bapak Ir. R. Notariawan & Ibu Patiningsih
                                    </Text>
                                ):(
                                    <Text fontSize={{ base: "12px", md: "15px", lg: "18px" }} color={"#483C32"}>
                                        Daughter of Ir. R. Notariawan & Patiningsih 
                                    </Text>
                                )}
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
                              {lang == "id" ? 
                                (
                                    <Text fontSize={{ base: "12px", md: "15px", lg: "18px" }} color={"#483C32"}>
                                        Putra pertama dari Bapak R. Ahmad Yani (alm) & Ibu dr. Etin Jumarilli Amanar
                                    </Text>
                                ):(
                                    <Text fontSize={{ base: "12px", md: "15px", lg: "18px" }} color={"#483C32"}>
                                        First born son of R. Ahmad Yani (alm) & dr. Etin Jumarilli Amanar
                                    </Text>
                                )}
                            </Stack>
                        </Box>
                    </Stack>
                </Stack>
            </Flex>
        </Box>
        </>
    );

}

export default GroomBride;