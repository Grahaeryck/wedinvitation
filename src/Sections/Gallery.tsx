import { ReactNode, useState, useMemo, useEffect } from "react";
import {
  Box,
  Flex,
  Heading,
  Stack,
  Image,
  Divider,
  Text,
  Grid,
  GridItem,
  AspectRatio
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

                    <Flex justify={'center'} align={'center'}>
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
                    <Flex justify={'center'} align={'center'} mt={'2rem'} direction={'column'}>
                        <AspectRatio width={{ base: '320px', md: '600px' , lg: '900px' }} ratio={16 / 9}>
                            <iframe 
                                src="https://www.youtube.com/embed/wqcu0j3Wsys?si=RcWJIHck1OXAc5-v" 
                                title="Sandy & Graha" 
                                allowFullScreen
                            />
                        </AspectRatio>

                        <AspectRatio mt='2rem' height="152px" width={{ base: '320px', md: '600px' , lg: '900px' }} ratio={16 / 9}>
                        <iframe 
                            src="https://open.spotify.com/embed/playlist/5zVA9wRgKt20ReAApBFRmH?utm_source=generator&theme=0" 
                            width="100%" 
                            height="100%" 
                            frameBorder="0" 
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                            loading="lazy"
                        />
                        </AspectRatio>
                    </Flex>
                </Stack>
            </Flex>
        </Box>
        </>
    );

}

export default Gallery;