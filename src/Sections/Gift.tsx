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
  Tabs, 
  TabList, 
  TabPanels, 
  Tab, 
  TabPanel, 
  Center,
  Grid,
  GridItem
} from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimney} from '@fortawesome/free-solid-svg-icons';
import Mandiri from '../Asset/Mandiri.png';
import BCA from '../Asset/BCA.png';
import PayPal from '../Asset/PayPal.png';

type Props = {};
function Gift({}: Props) {

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
                        <Text fontSize={{ base: "18px", md: "20px" , lg: "25px" }} as="i" color={"#483C32"}>Hadiah Pernikahan</Text>
                        <Heading fontSize={{ base: "35px", md: "45px" , lg: "50px" }} as="i" color={"#C19A6B"}>Wedding Gift</Heading>
                        <Flex width={{ base: "80%", md: "70%" , lg: "60%" }}>
                            <Text 
                                fontSize={{ base: "14px", md: "16px" , lg: "18px" }} 
                                as="i" 
                                color={"#483C32"} 
                                align={'center'}
                            >
                                Kehadiran dan support anda di hari spesial kami adalah hadiah terbaik bagi kami. 
                                Namun, apabila anda ingin merayakan dengan hadiah. Mohon cek details dibawah ini, Terima Kasih.
                            </Text>
                        </Flex>
                        <Flex justify={'center'} align={'center'}>
                            <Tabs 
                                isFitted 
                                variant='enclosed' 
                                width={{base: "300px", md: "400px" , lg: "600px"}} 
                                mt={'2rem'} 
                                size='md'
                                bg={'rgba(72, 60, 50,0.1)'} 
                            >
                              <TabList 
                                mb='1em' 
                              >
                                <Tab color={'#483C32'} bg={'#C19A6B'} _selected={{ color: '#F9F6EE', bg: '#483C32' }} w={'wrap'} fontSize={{ base: "14px", md: "16px" , lg: "18px" }}>
                                    Mandiri
                                </Tab>
                                <Tab color={'#483C32'} bg={'#C19A6B'} _selected={{ color: '#F9F6EE', bg: '#483C32' }} w={'wrap'} fontSize={{ base: "14px", md: "16px" , lg: "18px" }}>
                                    BCA
                                </Tab>
                                <Tab color={'#483C32'} bg={'#C19A6B'} _selected={{ color: '#F9F6EE', bg: '#483C32' }} w={'wrap'} fontSize={{ base: "14px", md: "16px" , lg: "18px" }}>
                                    Paypal
                                </Tab>
                                <Tab color={'#483C32'} bg={'#C19A6B'} _selected={{ color: '#F9F6EE', bg: '#483C32' }} w={'wrap'} fontSize={{ base: "14px", md: "16px" , lg: "18px" }}>
                                    Alamat
                                </Tab>
                              </TabList>

                              <TabPanels >
                                <TabPanel >
                                  <Flex  justify={'center'} align={'center'} direction={'column'}
                                  >
                                    <Grid
                                      minH='150px'
                                      templateColumns='repeat(3, 1fr)'
                                      gap={4}
                                    >
                                      <GridItem colSpan={{ base: 3, md: 1 , lg: 1 }}>
                                        <Flex direction={'column'} justify={'center'} align={'center'} h={{ base: "wrap", md: "100px" , lg: "150px" }}>
                                            <Image
                                              w={'120px'}
                                              h={{ base: "40px", md: "100px" , lg: "120px" }}
                                              fit={{ base: "cover", md: "contain" , lg: "contain" }}
                                              bgPosition={'center'}
                                              align={'center'}
                                              src={Mandiri}
                                              alt='Mandiri'
                                            />
                                        </Flex>
                                      </GridItem>
                                      <GridItem colSpan={{ base: 3, md: 2 , lg: 2 }}>
                                            <Flex direction={'column'} justify={'center'} align={'center'} h={{ base: "wrap", md: "100px" , lg: "150px" }}>
                                                <Text fontSize={{ base: "14px", md: "16px" , lg: "18px" }}  as="i" color={"#483C32"}>Bank Mandiri</Text>
                                                <Text fontSize={{ base: "14px", md: "16px" , lg: "18px" }}  as="i" color={"#483C32"}>A/N Rr Sandy Sitia Nur Annisa</Text>
                                                <Text fontSize={{ base: "14px", md: "16px" , lg: "18px" }}  as="i" color={"#483C32"}>0867212445</Text>
                                            </Flex>
                                      </GridItem>
                                    </Grid>
                                  </Flex>
                                </TabPanel>

                                <TabPanel>
                                <Flex  justify={'center'} align={'center'} direction={'column'}>
                                    <Grid
                                      minH='150px'
                                      w={'wrap'}
                                      templateColumns='repeat(3, 1fr)'
                                      gap={4}
                                    >
                                      <GridItem colSpan={{ base: 3, md: 1 , lg: 1 }}>
                                        <Flex direction={'column'} justify={'center'} align={'center'}  h={{ base: "wrap", md: "100px" , lg: "150px" }}>
                                            <Image
                                              w={'120px'}
                                              h={{ base: "40px", md: "100px" , lg: "120px" }}
                                              fit='contain'
                                              bgPosition={'center'}
                                              align={'center'}
                                              src={BCA}
                                              alt='BCA'
                                            />
                                        </Flex>
                                      </GridItem>
                                      <GridItem colSpan={{ base: 3, md: 2 , lg: 2 }}>
                                            <Flex direction={'column'} justify={'center'} align={'center'}  h={{ base: "wrap", md: "100px" , lg: "150px" }}>
                                                <Text fontSize={{ base: "14px", md: "16px" , lg: "18px" }}  as="i" color={"#483C32"}>Bank BCA</Text>
                                                <Text fontSize={{ base: "14px", md: "16px" , lg: "18px" }}  as="i" color={"#483C32"}>A/N Muhammad Graha Eryck Pratama</Text>
                                                <Text fontSize={{ base: "14px", md: "16px" , lg: "18px" }}  as="i" color={"#483C32"}>0867212445</Text>
                                            </Flex>
                                      </GridItem>
                                    </Grid>
                                  </Flex>
                                </TabPanel>

                                <TabPanel>
                                <Flex  justify={'center'} align={'center'} direction={'column'}>
                                    <Grid
                                      minH='150px'
                                      w={'wrap'}
                                      templateColumns='repeat(3, 1fr)'
                                      gap={4}
                                    >
                                      <GridItem colSpan={{ base: 3, md: 1 , lg: 1 }}>
                                        <Flex direction={'column'} justify={'center'} align={'center'}  h={{ base: "wrap", md: "100px" , lg: "150px" }}>
                                            <Image
                                              w={'120px'}
                                              h={{ base: "40px", md: "100px" , lg: "120px" }}
                                              fit='contain'
                                              bgPosition={'center'}
                                              align={'center'}
                                              src={PayPal}
                                              alt='Paypal'
                                            />
                                        </Flex>
                                      </GridItem>
                                      <GridItem colSpan={{ base: 3, md: 2 , lg: 2 }}>
                                            <Flex direction={'column'} justify={'center'} align={'center'}  h={{ base: "wrap", md: "100px" , lg: "150px" }}>
                                                <Text fontSize={{ base: "14px", md: "16px" , lg: "18px" }}  as="i" color={"#483C32"}>PayPal</Text>
                                                <Text fontSize={{ base: "14px", md: "16px" , lg: "18px" }}  as="i" color={"#483C32"}>A/N Muhammad Graha Eryck Pratama</Text>
                                                <Text fontSize={{ base: "14px", md: "16px" , lg: "18px" }}  as="i" color={"#483C32"}>0867212445</Text>
                                            </Flex>
                                      </GridItem>
                                    </Grid>
                                  </Flex>
                                </TabPanel>

                                <TabPanel>
                                  <Flex justify={'center'} h='150px'>
                                    <Flex w={'80%'} direction={'column'} justify={'center'} align={'center'}>
                                        <Box height='wrap' width={'wrap'} mb={'10px'}>
                                            <FontAwesomeIcon icon={faHouseChimney} size="lg" style={{color: "#483C32",}}/>
                                        </Box>
                                        <Text fontSize={{ base: "14px", md: "16px" , lg: "18px" }}  as="i" color={"#483C32"}>Rr. Sandy Sitia Nur Annisa</Text>
                                        <Text fontSize={{ base: "14px", md: "16px" , lg: "18px" }}  as="i" color={"#483C32"} align={'center'}>
                                            Puri Orchard Appartment. Jl. Lkr. Luar Barat No.Kav. 8, Rw. Buaya, Kecamatan Cengkareng, 
                                            Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11740
                                        </Text>
                                    </Flex>
                                  </Flex>
                                </TabPanel>

                              </TabPanels>
                            </Tabs>
                        </Flex>
                        
                    </Stack>
                </Stack>
            </Flex>
        </Box>
        </>
    );

}

export default Gift;