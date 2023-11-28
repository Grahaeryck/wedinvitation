import { ReactNode, useState, useMemo, useEffect } from "react";
import {
  Box,
  Flex,
  Heading,
  Stack,
  Image,
  Divider,
  Text,
  AbsoluteCenter,
  Grid,
  GridItem
} from "@chakra-ui/react";
import  Logo180 from "../Asset/Logo180.png";
import Logo48 from "../Asset/Logo48.png";
import GaleryCard from "../Components/GaleryCard";


type Props = {};
function Gallery({}: Props) {

    return (
        <>
        <Box 
            maxW={"container.xl"}
            h="wrap"
            bg={"#FAF9F6"}
        >
            <Flex 
                justify="center" 
                align="center"
                h={'inherit'}
            >
                <Stack mt="6rem" mb="6rem" align={'center'}>
                    <Stack align={'center'} justify="center" >
                        <Text fontSize={{ base: "18px", md: "20px" , lg: "25px" }} as="i" color={"#483C32"}>Galeri</Text>
                        <Heading fontSize={{ base: "35px", md: "45px" , lg: "50px" }} as="i" color={"#C19A6B"}>Wedding Gallery</Heading>
                    </Stack>

                    <Flex width={{ base: "80%", md: "90%" , lg: "100%" }} justify={'center'} align={'center'}>
                    <Grid
                      templateColumns='repeat(6, 1fr)'
                      gap={'2rem'}
                      mt={'20px'}
                    >
                        <GridItem colSpan={{ base: 3, md: 2 , lg: 2 }}>
                            <GaleryCard/>
                        </GridItem>

                        <GridItem colSpan={{ base: 3, md: 2 , lg: 2 }}>
                            <GaleryCard/>
                        </GridItem>

                        <GridItem colSpan={{ base: 3, md: 2 , lg: 2 }}>
                            <GaleryCard/>
                        </GridItem>

                        <GridItem colSpan={{ base: 3, md: 2 , lg: 2 }}>
                            <GaleryCard/>
                        </GridItem>

                        <GridItem colSpan={{ base: 3, md: 2 , lg: 2 }}>
                            <GaleryCard/>
                        </GridItem>

                        <GridItem colSpan={{ base: 3, md: 2 , lg: 2 }}>
                            <GaleryCard/>
                        </GridItem>
                    </Grid>
                    </Flex>
                </Stack>
            </Flex>
        </Box>
        </>
    );

}

export default Gallery;