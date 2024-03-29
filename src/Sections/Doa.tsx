import React, { UIEvent, useRef } from 'react';
import { useInViewport } from 'react-in-viewport';
import {
  Box,
  Flex,
  Heading,
  Stack,
  Text,
  useDisclosure,
  SlideFade, 
  Button,
  ScaleFade
} from "@chakra-ui/react";

type Props = {
    lang : string;
};

function Doa({lang}: Props) {
    const ref = useRef(null)
    const {inViewport} = useInViewport(ref, {rootMargin: "-100px"}, {disconnectOnLeave: false}, {})
    return (
        <>
        <Box 
            maxW={"container.2xl"}
            h="wrap"
            bg={"#FAF9F6"}
            ref={ref}
        >
            <ScaleFade initialScale={0} in={inViewport} transition={{enter: {duration: 0.8}}}>
            <Flex 
                justify="center" 
                align="center"
                h={'inherit'}
                
            >
                <Stack mt="6rem" mb="6rem" >
                    <Stack align={'center'} justify={'center'}>

                            <Box width={{ base: '80%px', md: '60%px' , lg: "50%"}} px={'20px'}>
                                <Flex justify="center" align="center" direction={'column'}>
                                    <Text fontSize={'20px'} as="i" color={"#483C32"}>بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</Text>
                                    {/* <Text fontSize={'20px'} as="i" color={"#483C32"}>وَمِنْ ءَايَٰتِهِۦٓ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَٰجًا لِّتَسْكُنُوٓا۟ إِلَيْهَا وَجَعَلَ</Text>
                                    <Text fontSize={'20px'} as="i" color={"#483C32"}>بَيْنَكُم مَّوَدَّةً وَرَحْمَةً ۚ إِنَّ فِى ذَٰلِكَ لَءَايَٰتٍ لِّقَوْمٍ يَتَفَكَّرُونَ</Text> */}
                                    <Text fontSize={'20px'} as="i" color={"#483C32"} mt={'1rem'} align="center">
                                    وَمِنْ ءَايَٰتِهِۦٓ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَٰجًا لِّتَسْكُنُوٓا۟ إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً ۚ إِنَّ فِى ذَٰلِكَ لَءَايَٰتٍ لِّقَوْمٍ يَتَفَكَّرُونَ
                                    </Text>
                                </Flex>
                            </Box>

                            <Box width={{ base: '80%px', md: '60%px' , lg: "50%"}} my={'1rem'} px={'20px'} >
                                <Flex justify="center" align="center">
                                    {lang == "id" ? 
                                    (
                                        <Text fontSize={{ base: '12px', md: '16px' , lg: '18px'}} as="i" color={"#483C32"} align="center">
                                            Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, 
                                            agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. 
                                            Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.
                                        </Text>
                                    ):(
                                        <Text fontSize={{ base: '12px', md: '16px' , lg: '18px'}} as="i" color={"#483C32"} align="center">
                                            And one of His signs is that He created for you spouses from among yourselves so that you may find comfort in them. 
                                            And He has placed between you compassion and mercy. Surely in this are signs for people who reflect.
                                        </Text>
                                    )}
                                </Flex>
                            </Box>
                        <Heading fontSize={'25px'} as="i" color={"#C19A6B"}>Q.S Ar-Rum (21)</Heading>
                    </Stack>
                </Stack>
            </Flex>
            </ScaleFade>
        </Box>
        
        </>
    );

}

export default Doa;