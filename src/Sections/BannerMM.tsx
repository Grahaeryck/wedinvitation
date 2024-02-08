import { useEffect, useState, useRef } from "react";
import { useInViewport } from 'react-in-viewport';
import {
  Box,
  Flex,
  Heading,
  Stack,
  Text,
  ScaleFade,
  useDisclosure
} from "@chakra-ui/react";
// import bgIMG from "../Asset/Banner.jpeg";
import bgIMG from '../Asset/BannerMM.jpg';

type Props = {
    lang: string;
};
function BannerAB({lang}: Props) {
    const { isOpen, onToggle } = useDisclosure()

    const ref = useRef(null)
    const {inViewport} = useInViewport(ref, {rootMargin: "-100px"}, {disconnectOnLeave: false}, {})

    return (
        <>
        <Box 
            mt={"-0.1rem"}
            maxW={"container.2xl"}
            h='calc(101vh)'
            bgImage={bgIMG}
            // bgAttachment={'fixed'}
            bgSize="cover"
            bgPosition="55%"
            bgRepeat="no-repeat"
            boxShadow='dark-lg'
            ref={ref}
        >
                <Flex 
                    justify="center" 
                    align={"center"}
                    h={'inherit'}
                >
                    <ScaleFade initialScale={0.9} in={inViewport} transition={{enter: {duration: 4}}}>
                    <Stack align={'center'}>
                    
                        <Heading fontSize={{ base: "35px", md: "45px" , lg: "50px" }} as="h1" color={"#f9f6ee"}>Sandy & Graha</Heading>
                        {lang == "id" ? (
                            <Text fontSize={{ base: "18px", md: "20px" , lg: "25px" }} as="p" color={"#f9f6ee"}>Februari 24, 2024 | Malang, Indonesia</Text>
                        ):(
                            <Text fontSize={{ base: "18px", md: "20px" , lg: "25px" }} as="p" color={"#f9f6ee"}>February 24, 2024 | Malang, Indonesia</Text>
                        )}
                         
                    </Stack>
                    </ScaleFade>
                </Flex>
        </Box>
        </>
    );

}

export default BannerAB;