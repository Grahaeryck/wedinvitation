import {
  Box,
  Flex,
  Heading,
  Stack,
  Text
} from "@chakra-ui/react";

type Props = {};
function Doa({}: Props) {

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
                                    <Text fontSize={{ base: '12px', md: '16px' , lg: '18px'}} as="i" color={"#483C32"} align="center">
                                        Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, 
                                        agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. 
                                        Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.
                                    </Text>
                                </Flex>
                            </Box>
                        <Heading fontSize={'25px'} as="i" color={"#C19A6B"}>Q.S Ar-Rum (21)</Heading>
                    </Stack>
                </Stack>
            </Flex>
        </Box>
        </>
    );

}

export default Doa;