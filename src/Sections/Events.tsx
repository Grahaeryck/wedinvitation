import React, { UIEvent, useRef } from 'react';
import { useInViewport } from 'react-in-viewport';
import {
  Box,
  Flex,
  Heading,
  Button,
  Stack,
  Image,
  Divider,
  Text,
  Grid,
  GridItem,
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Link,
  AspectRatio,
  Fade,
  SlideFade
} from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRoute, faMap, faCalendarDays, faClock} from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import bgIMG from "../Asset/eventBG.jpg";
import Frame from "../Asset/Frame.png";
import Flower2 from "../Asset/Flower2.png";
import BtnGetDirection from "../Components/BtnGetDirection";

type Props = {lang: string;};
function Events({lang}: Props) {
    const ref = useRef(null)
    const ref2 = useRef(null)

    const {inViewport} = useInViewport(ref,{rootMargin: "100px"}, {disconnectOnLeave: true}, {})

    return (
        <>
        <Box 
            maxW={"container.2xl"}
            minH='calc(102vh)'
            bgImage={bgIMG}
            bgSize="cover"
            bgPosition="center"
            bgRepeat="no-repeat"
            boxShadow='dark-lg'
        >
            <Flex 
                justify="center" 
                align={"center"}
                maxH={'inherit'}
                minH={'inherit'}
                h={'inherit'}
                bgColor={'rgba(0, 0, 0, 0.4)'}
            >
                <Stack mt="6rem" mb="6rem" justify={'center'} align={'center'}>
                    <Stack align={'center'}>
                        <Text fontSize={{ base: "18px", md: "20px" , lg: "25px" }} as="i" color={"#FAF9F6"}>Rangkaian Acara</Text>
                        <Heading fontSize={{ base: "35px", md: "45px" , lg: "50px" }} as="i" color={"#FAF9F6"}>Wedding Event</Heading>
                        <Flex width={{ base: "80%", md: "70%" , lg: "60%" }}>
                            <Text 
                              fontSize={{ base: "14px", md: "16px" , lg: "18px" }} 
                              as="i" 
                              color={"#FAF9F6"} 
                              align={'center'}
                            >
                              {lang == "id" ? (
                                'Dengan segala kerendahan hati, kami bermaksud ingin menundang Bapak/Ibu/Saudara/i hadir didalam acara pernikahan yang akan dileselengarakan pada:'
                              ):(
                                "With all due respect, we would like to extend our invitation to Mr./Mrs./Brother/Sister to attend the wedding event that will be held on:"
                              )}
                            </Text>
                        </Flex>

                    </Stack>

                    <Grid
                        templateColumns='repeat(6, 1fr)'
                        gap={"60px"}
                        mt={'20px'}
                    >
                        <GridItem colSpan={{ base: 6, md: 4 , lg: 3 }}>
                            <Fade in={inViewport} transition={{enter: {duration: 3}}}> 
                                <Box height='wrap' ref={ref}>
                                <Card 
                                    width={{ base: '340px', md: '420px' , lg: "520"}}
                                    // minW='md'
                                    // maxW={'md'}
                                    minH={'560px'}
                                    bg={'rgba(193, 154, 107, 0.1)'} 
                                    //border='2px'
                                    bgImage={Frame}
                                    bgSize="cover" 
                                    bgPosition="center"
                                    bgRepeat="no-repeat"
                                >
                                    <CardHeader>
                                        <Flex justify='center' alignItems='center' flexWrap='wrap'>
                                            <Box>
                                                <Heading fontSize={'25px'} as="i" color={"#FAF9F6"}>AKAD</Heading>
                                            </Box>
                                            <Divider borderColor={'#C19A6B'} orientation='horizontal'/>
                                        </Flex>
                                    </CardHeader>
                                    <CardBody>
                                        <Flex justify='center' alignItems='center'>
                                            <Stack>
                                                <SimpleGrid columns={2} spacing='50px'>
                                                    <Box height='wrap' minW="100px">
                                                        <Flex justify='center' alignItems='center' direction={'column'}>
                                                            <Box height='wrap' width={'wrap'} mb={'10px'}>
                                                                <FontAwesomeIcon icon={faCalendarDays} size="lg" style={{color: "#F9F6EE",}}/>
                                                            </Box>
                                                            {lang == "id" ? (
                                                                <>
                                                                    <Text fontSize='18px' color={"#FAF9F6"}> Sabtu 24 </Text>
                                                                    <Text fontSize='18px' color={"#FAF9F6"}> Februari 2024 </Text>
                                                                </>
                                                            ):(
                                                                <>
                                                                    <Text fontSize='18px' color={"#FAF9F6"}> Saturday 24 </Text>
                                                                    <Text fontSize='18px' color={"#FAF9F6"}> February 2024 </Text>
                                                                </>
                                                            )}
                                                        </Flex>
                                                    </Box>
                                                    <Box height='wrap' minW="100px">
                                                        <Flex justify='center' alignItems='center' direction={'column'}>
                                                            <Box height='wrap' width={'wrap'} mb={'10px'}>
                                                                <FontAwesomeIcon icon={faClock} beat size="lg" style={{color: "#F9F6EE",}}/>
                                                            </Box>
                                                            {lang == "id" ? (
                                                                <>
                                                                    <Text fontSize='18px' color={"#FAF9F6"}> Mulai: 15:00 </Text>
                                                                    <Text fontSize='18px' color={"#FAF9F6"}> Selesai: 16:30 </Text>
                                                                </>
                                                            ):(
                                                                <>
                                                                    <Text fontSize='18px' color={"#FAF9F6"}> Start: 15:00 </Text>
                                                                    <Text fontSize='18px' color={"#FAF9F6"}> End: 16:30 </Text>
                                                                </>
                                                            )}
                                                            
                                                        </Flex>
                                                    </Box>
                                                </SimpleGrid>
                                                <Flex mt={'2rem'} justify={'center'} alignItems='center' direction={'column'}>
                                                    <Box height='wrap' width={'wrap'} mb={'10px'}>
                                                        <FontAwesomeIcon icon={faMap} beat size="lg" style={{color: "#F9F6EE",}}/>
                                                    </Box>
                                                    <Text fontSize='18px' color={"#FAF9F6"}>Gedung Serba Guna Bakorwil III</Text>
                                                    <Text fontSize='15px' color={"#FAF9F6"}> Jl. Simpang Ijen No.2, Kec. Klojen  </Text>
                                                    <Text fontSize='15px' color={"#FAF9F6"}> Kota Malang, Jawa Timur 65119 </Text>
                                                    <BtnGetDirection>
                                                        {lang == "id" ? ('Buka Peta'):('Get Direction')}
                                                    </BtnGetDirection>
                                                </Flex>
                                            </Stack>
                                        </Flex>
                                    </CardBody>
                                </Card>
                                </Box>
                            </Fade>
                        </GridItem>

                        <GridItem colSpan={{ base: 6, md: 4 , lg: 3 }}>
                            <Fade in={inViewport} transition={{enter: {duration: 3}}}> 
                            <Box height='wrap' ref={ref}>
                                <Card 
                                    width={{ base: '340px', md: '420px' , lg: "520"}}
                                    // minW='md'
                                    // maxW={'md'}
                                    minH={'560px'}
                                    bg={'rgba(193, 154, 107, 0.1)'} 
                                    //border='2px'
                                    bgImage={Frame}
                                    bgSize="cover" 
                                    bgPosition="center"
                                    bgRepeat="no-repeat"
                                >
                                    <CardHeader>
                                        <Flex justify='center' alignItems='center' flexWrap='wrap'>
                                            <Box>
                                                <Heading fontSize={'25px'} as="i" color={"#FAF9F6"}>RESEPSI</Heading>
                                            </Box>
                                            <Divider borderColor={'#C19A6B'} orientation='horizontal'/>
                                        </Flex>
                                    </CardHeader>
                                    <CardBody>
                                        <Stack>
                                            <Flex justify={'center'} alignItems='center' direction={'column'}>
                                                {lang == "id" ? (
                                                    <Text fontSize='20px' color={"#FAF9F6"}> Sabtu. 24 Februari 2024 </Text>
                                                ):(
                                                    <Text fontSize='20px' color={"#FAF9F6"}> Saturday. February 24, 2024 </Text>
                                                )}
                                                <Box mt={'5px'}>
                                                <Flex justify='center' alignItems='center' flexWrap='wrap' gap='4rem'>
                                                    <Box height='wrap'>
                                                        <Flex justify='center' alignItems='center' direction={'column'}>
                                                            {lang == "id" ? (
                                                                <>
                                                                    <Text fontSize='18px' color={"#FAF9F6"}> Sesi I </Text>
                                                                    <Text fontSize='18px' color={"#FAF9F6"}> Sesi II </Text>
                                                                </>
                                                            ):(
                                                                <>
                                                                    <Text fontSize='18px' color={"#FAF9F6"}> Session I </Text>
                                                                    <Text fontSize='18px' color={"#FAF9F6"}> Session II </Text>
                                                                </>
                                                            )}
                                                            
                                                        </Flex>
                                                    </Box>
                                                    <Box height='wrap'>
                                                        <Flex justify='center' alignItems='center' direction={'column'}>
                                                            <Text fontSize='18px' color={"#FAF9F6"}> 18:00 - 19:30</Text>
                                                            <Text fontSize='18px' color={"#FAF9F6"}> 19:30 - 21:00 </Text>
                                                        </Flex>
                                                    </Box>
                                                </Flex>
                                                </Box>

                                                <Flex mt={'2rem'} justify={'center'} alignItems='center' direction={'column'}>
                                                    <Box height='wrap' width={'wrap'} mb={'10px'}>
                                                        <FontAwesomeIcon icon={faMap} beat size="lg" style={{color: "#F9F6EE",}}/>
                                                    </Box>
                                                    <Text fontSize='18px' color={"#FAF9F6"}>Gedung Serba Guna Bakorwil III</Text>
                                                    <Text fontSize='15px' color={"#FAF9F6"}> Jl. Simpang Ijen No.2, Kec. Klojen  </Text>
                                                    <Text fontSize='15px' color={"#FAF9F6"}> Kota Malang, Jawa Timur 65119 </Text>
                                                    <BtnGetDirection>
                                                        {lang == "id" ? ('Buka Peta'):('Get Direction')}
                                                    </BtnGetDirection>
                                                    
                                                </Flex>
                                            </Flex>
                                        </Stack>
                                    </CardBody>
                                    <CardFooter justify='center' alignItems='center'>
                                        <Image src={Flower2} alt='flower' />
                                    </CardFooter>
                                </Card>
                            </Box>
                            </Fade>
                        </GridItem>
                    </Grid>

                    <Flex justify={'center'} align={'center'} mt={'2rem'} ref={ref2}>
                        {/* <SlideFade in={inViewport} offsetY='200px' transition={{enter: {duration: 0.8}}}> */}
                        <AspectRatio width={{ base: '320px', md: '600px' , lg: '900px' }} ratio={16 / 9} border={'3px'} borderColor={'#C19A6B'}>
                            <iframe 
                                src="https://maps.google.com/maps?q=Gedung Bakorwil Malang&t=&z=17&ie=UTF8&iwloc=&output=embed" 
                                title="Sandy & Graha" 
                                allowFullScreen
                            />
                        </AspectRatio>
                        {/* </SlideFade> */}
                    </Flex>
                </Stack>
            </Flex>
        </Box>
        </>
    );
}
export default Events;