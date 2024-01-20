import React, { UIEvent, useRef } from 'react';
import { useInViewport } from 'react-in-viewport';
import {
  Box,
  Flex,
  Text,
  Stack,
  Heading,
  Fade
} from "@chakra-ui/react";
import WishesCard from "../Components/WishesCard";

type Props = {lang : string;};
function Wishes({lang}: Props) {    

    const ref = useRef(null)
    const {inViewport} = useInViewport(ref,{rootMargin: "-50px"}, {disconnectOnLeave: true}, {})

    return (
      <>
        <Box 
            maxW={"container.2xl"}
            h="wrap"
            bg={"#FAF9F6"}
            ref={ref}
        >
            <Fade in={inViewport} transition={{enter: {duration: 2}}}> 
                <Flex 
                    justify="center" 
                    align="center"
                    h={'inherit'}
                >
                    <Stack mt="6rem" mb="6rem">
                        <Stack align={'center'}>
                            <Text fontSize={{ base: "18px", md: "20px" , lg: "25px" }} as="i" color={"#483C32"}>Ucapan & Doa</Text>
                            <Heading fontSize={{ base: "35px", md: "45px" , lg: "50px" }} as="i" color={"#C19A6B"}>Wishes</Heading>
                        </Stack>
                        <Flex  
                            alignItems={'center'} 
                            justifyItems={'center'} 
                            overflowY={'scroll'} 
                            maxH={'400px'}
                            direction={'column'}
                            mt={'2rem'}
                        >
                            
                            <WishesCard></WishesCard>
                            <WishesCard></WishesCard>
                            <WishesCard></WishesCard>
                            <WishesCard></WishesCard>
                            <WishesCard></WishesCard>
                            <WishesCard></WishesCard>
                            <WishesCard></WishesCard>
                            <WishesCard></WishesCard>
                            <WishesCard></WishesCard>
                            <WishesCard></WishesCard>
                            <WishesCard></WishesCard>
                            <WishesCard></WishesCard>
                            <WishesCard></WishesCard>
                            <WishesCard></WishesCard>
                            <WishesCard></WishesCard>
                            <WishesCard></WishesCard>
                            <WishesCard></WishesCard>
                            <WishesCard></WishesCard>
                            <WishesCard></WishesCard>
                            <WishesCard></WishesCard>
                            <WishesCard></WishesCard>
                            <WishesCard></WishesCard>
                            <WishesCard></WishesCard>
                            <WishesCard></WishesCard>
                            
                        </Flex>
                    </Stack>
                </Flex>
            </Fade>
        </Box>
      </>
    );
}
export default Wishes;