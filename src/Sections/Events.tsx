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
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Icon
} from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRoute, faMap, faCalendarDays, faClock} from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import bgIMG from "../Asset/eventBG.jpg";
import Frame from "../Asset/Frame.png";
import Flower2 from "../Asset/Flower2.png";

type Props = {};
function Events({}: Props) {

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
                        <Text fontSize={'20px'} as="i" color={"#FAF9F6"}>Rangkaian Acara</Text>
                        <Heading fontSize={'50px'} as="i" color={"#FAF9F6"}>Wedding Event</Heading>
                    </Stack>

                    <Grid
                        templateColumns='repeat(6, 1fr)'
                        gap={"60px"}
                        mt={'20px'}
                    >
                        <GridItem colSpan={{ base: 6, md: 4 , lg: 3 }}>
                            <Box height='wrap'>
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
                                                                <FontAwesomeIcon icon={faCalendarDays} beat size="lg" style={{color: "#F9F6EE",}}/>
                                                            </Box>
                                                            <Text fontSize='18px' color={"#FAF9F6"}> Sabtu 24 </Text>
                                                            <Text fontSize='18px' color={"#FAF9F6"}> Februari 2024 </Text>
                                                        </Flex>
                                                    </Box>
                                                    <Box height='wrap' minW="100px">
                                                        <Flex justify='center' alignItems='center' direction={'column'}>
                                                            <Box height='wrap' width={'wrap'} mb={'10px'}>
                                                                <FontAwesomeIcon icon={faClock} beat size="lg" style={{color: "#F9F6EE",}}/>
                                                            </Box>
                                                            <Text fontSize='18px' color={"#FAF9F6"}> 15:00 WIB </Text>
                                                            <Text fontSize='18px' color={"#FAF9F6"}> 16:30 WIB </Text>
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
                                                    <Box height='wrap' width={'wrap'} mt={'30px'}>
                                                        <Button
                                                          size='md'
                                                          height='48px'
                                                          width='180px'
                                                          border='2px'
                                                          color='#C19A6B'
                                                          bgColor='#F9F6EE'
                                                          borderColor='#C19A6B'
                                                          borderRadius='20px'
                                                          _hover={{ bgColor:'#483C32'}}
                                                          leftIcon={<FontAwesomeIcon icon={faRoute} size="lg" style={{color: "#C19A6B",}}/>}
                                                        >
                                                            Get Direction
                                                        </Button>
                                                    </Box>
                                                </Flex>
                                            </Stack>
                                        </Flex>
                                    </CardBody>
                                </Card>
                            </Box>
                        </GridItem>

                        <GridItem colSpan={{ base: 6, md: 4 , lg: 3 }}>
                            <Box height='wrap'>
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
                                                <Text fontSize='20px' color={"#FAF9F6"}> Sabtu, 24 Februari 2024 </Text>

                                                <Box mt={'5px'}>
                                                <Flex justify='center' alignItems='center' flexWrap='wrap' gap='4rem'>
                                                    <Box height='wrap'>
                                                        <Flex justify='center' alignItems='center' direction={'column'}>
                                                            <Text fontSize='18px' color={"#FAF9F6"}> Sesi I </Text>
                                                            <Text fontSize='18px' color={"#FAF9F6"}> Sesi II </Text>
                                                        </Flex>
                                                    </Box>
                                                    <Box height='wrap'>
                                                        <Flex justify='center' alignItems='center' direction={'column'}>
                                                            <Text fontSize='18px' color={"#FAF9F6"}> 18:00 - 19:30</Text>
                                                            <Text fontSize='18px' color={"#FAF9F6"}> 19:30 - 20:00 </Text>
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
                                                    <Box height='wrap' width={'wrap'} mt={'30px'}>
                                                    <Button
                                                          size='md'
                                                          height='48px'
                                                          width='180px'
                                                          border='2px'
                                                          color='#C19A6B'
                                                          bgColor='#F9F6EE'
                                                          borderColor='#C19A6B'
                                                          borderRadius='20px'
                                                          _hover={{ bgColor:'#483C32'}}
                                                          leftIcon={<FontAwesomeIcon icon={faRoute} size="lg" style={{color: "#C19A6B",}}/>}
                                                        >
                                                            Get Direction
                                                        </Button>
                                                    </Box>
                                                </Flex>
                                            </Flex>
                                        </Stack>
                                    </CardBody>
                                    <CardFooter justify='center' alignItems='center'>
                                        <Image src={Flower2} alt='flower' />
                                    </CardFooter>
                                </Card>
                            </Box>
                        </GridItem>
                    </Grid>
                </Stack>
            </Flex>
        </Box>
        </>
    );
}
export default Events;