import React, { UIEvent, useRef } from 'react';
import { useInViewport } from 'react-in-viewport';
import {
  Box,
  Flex,
  Heading,
  Stack,
  Text,
  Grid,
  GridItem,
  AspectRatio,
  Fade
} from "@chakra-ui/react";
import GaleryCard from "../Components/GaleryCard";
import GalleryData from "../Data/GalleryData.json";
import GallerySwipper from '../Sections/GallerySwipper';


type Props = {};
function Gallery({}: Props) {
    const ref = useRef(null)
    const {inViewport} = useInViewport(ref, {rootMargin: "-150px"}, {disconnectOnLeave: false}, {})

    return (
        <>
        <Box 
            maxW={"container.2xl"}
            h="wrap"
            bg={"#FAF9F6"}
        >
            <Flex 
                justify="center" 
                align="center"
                h={'inherit'}
                ref={ref}
            >
                
                <Stack mt="6rem" mb="6rem" align={'center'}>
                    <Fade in={inViewport} transition={{enter: {duration: 1}}}> 
                        <Stack align={'center'} justify="center" >
                            <Text fontSize={{ base: "18px", md: "20px" , lg: "25px" }} as="i" color={"#483C32"}>Galeri</Text>
                            <Heading fontSize={{ base: "35px", md: "45px" , lg: "50px" }} as="i" color={"#C19A6B"}>Wedding Gallery</Heading>
                        </Stack>
                    </Fade>

                    <GallerySwipper/>

                    {/* <Flex justify={'center'} align={'center'}>
                        <Grid
                          templateColumns='repeat(6, 1fr)'
                          gap={'2rem'}
                          mt={'20px'}
                        >
                            {GalleryData.map((item: any, index: number) => (
                                <GridItem colSpan={{ base: 3, md: 2 , lg: 2 }}>
                                    <GaleryCard cardTitle={item.title} cardSrc={item.imgSource}/>
                                </GridItem>
                            ))}
                        </Grid>
                        
                    </Flex> */}
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