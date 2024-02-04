import React, { UIEvent, useRef, useEffect, useState } from 'react';
import { useInViewport } from 'react-in-viewport';
import {
  Box,
  Flex,
  Heading,
  Stack,
  Image,
  Text,
  Tabs, 
  TabList, 
  TabPanels, 
  Tab, 
  TabPanel, 
  Grid,
  GridItem,
  SlideFade,
  Link
} from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimney} from '@fortawesome/free-solid-svg-icons';
import GiftData from "../Data/GiftData.json";

type Props = {
  lang:string
  type: string;
};
function Gift({lang, type}: Props) {
  const tabsEng = ["Mandiri", "BCA", "Paypal", "Address"]
  const tabsID = ["Mandiri", "BCA", "Paypal", "Alamat"]

  const ref = useRef(null)
  const {inViewport} = useInViewport(ref, {}, {disconnectOnLeave: false}, {})

  return (
    <>
    <Box 
      maxW={"container.2xl"}
      h="wrap"
      bg={"#F9F6EE"}
      ref={ref}
    >
      <SlideFade in={inViewport} offsetY='-200px' transition={{enter: {duration: 0.8}}}>
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
                {lang == "id" ? (
                  "Kehadiran dan doa restu anda di hari spesial kami merupakan hadiah terbaik bagi kami. Namun, apabila memberi adalah tanda cinta, kami akan menerima dengan senang hati. Silahkan untuk dapat cek detail dibawah ini."
        
                ):(
                  "Your presence and blessings on our special day are the best gifts for us. However, if you wish to celebrate with a gift, please check the details below. Thank you."
                )}
                  
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
                <TabList mb='1em' >
                  {lang == "id" ? (
                    <>
                      {tabsID.map((tab, index) => (
                      <Tab key={index} color={'#483C32'} bg={'#C19A6B'} _selected={{ color: '#F9F6EE', bg: '#483C32' }} w={'wrap'} fontSize={{ base: "14px", md: "16px" , lg: "18px" }}>
                        {tab}
                      </Tab>
                      ))}
                    </>
                  ):(
                    <>
                      {tabsEng.map((tab, index) => (
                      <Tab key={index} color={'#483C32'} bg={'#C19A6B'} _selected={{ color: '#F9F6EE', bg: '#483C32' }} w={'wrap'} fontSize={{ base: "14px", md: "16px" , lg: "18px" }}>
                        {tab}
                      </Tab>
                      ))}
                    </>
                  )}
                </TabList>
                <TabPanels >
                  
                  {GiftData.map((item: any, index: number) => (
                    <TabPanel key={item.id}>
                      <Flex  justify={'center'} align={'center'} direction={'column'}>
                        <Grid
                          minH='150px'
                          templateColumns='repeat(3, 1fr)'
                          gap={4}
                        >
                          <GridItem colSpan={{ base: 3, md: 1 , lg: 1 }}>
                            <Flex direction={'column'} justify={'center'} align={'center'} h={{ base: "wrap", md: "100px" , lg: "150px" }}>
                                <Image
                                  w={'130px'}
                                  h={{ base: "40px", md: "100px" , lg: "120px" }}
                                  fit={{ base: "contain", md: "contain" , lg: "contain" }}
                                  bgPosition={'center'}
                                  align={'center'}
                                  src={item.imgSource}
                                  alt={item.title}
                                />
                            </Flex>
                          </GridItem>
                          <GridItem colSpan={{ base: 3, md: 2 , lg: 2 }}>
                            <Flex direction={'column'} justify={'center'} align={'center'} h={{ base: "wrap", md: "100px" , lg: "150px" }}>
                              <Text fontSize={{ base: "14px", md: "16px" , lg: "18px" }}  as="i" color={"#483C32"}>{item.title}</Text>
                              {item.title === "Bank Central Asia" ? (
                                <>
                                {type == "MM" || type == "mm" ? (
                                  <>
                                    <Text fontSize={{ base: "14px", md: "16px" , lg: "18px" }}  as="i" color={"#483C32"}>Hj. dr Etin Jumarili</Text>
                                    <Text fontSize={{ base: "14px", md: "16px" , lg: "18px" }}  as="i" color={"#483C32"}>1160559264</Text>
                                  </>
                                ):(
                                  <>
                                    <Text fontSize={{ base: "14px", md: "16px" , lg: "18px" }}  as="i" color={"#483C32"}>{item.receiver}</Text>
                                    <Text fontSize={{ base: "14px", md: "16px" , lg: "18px" }}  as="i" color={"#483C32"}>{item.accountNO}</Text>
                                  </>
                                )}
                                </>
                              ):(
                                <>
                                  <Text fontSize={{ base: "14px", md: "16px" , lg: "18px" }}  as="i" color={"#483C32"}>{item.receiver}</Text>
                                </>
                              )}
                              
                              {item.title === "Paypal" ? (
                                <Link href='https://www.paypal.com/paypalme/GrahaEryck' bgGradient='linear(to-l, #00457C, #0079C1)' bgClip='text' fontStyle={'bold'} isExternal>
                                  {item.accountNO}
                                </Link>
                              ):(
                                <>
                                  {item.title === "Bank Central Asia" ? (
                                    ""
                                  ):(
                                    <Text fontSize={{ base: "14px", md: "16px" , lg: "18px" }}  as="i" color={"#483C32"}>{item.accountNO}</Text>
                                  )}
                                </>
                              )}
                              
                            </Flex>
                          </GridItem>
                        </Grid>
                      </Flex>
                    </TabPanel>
                  ))}

                  <TabPanel key={'4'}>
                    <Flex justify={'center'} h='150px'>
                      <Flex w={'80%'} direction={'column'} justify={'center'} align={'center'}>
                          <Box height='wrap' width={'wrap'} mb={'10px'}>
                              <FontAwesomeIcon icon={faHouseChimney} size="lg" style={{color: "#483C32",}}/>
                          </Box>
                          <Text fontSize={{ base: "14px", md: "16px" , lg: "18px" }}  as="i" color={"#483C32"}>Sandy Annisa</Text>
                          <Text fontSize={{ base: "12px", md: "14px" , lg: "16px" }}  as="i" color={"#483C32"}>+62 877 50350982</Text>
                          <Text fontSize={{ base: "12px", md: "14px" , lg: "16px" }}  as="i" color={"#483C32"} align={'center'}>
                              OGA-3916. Puri Orchard Appartment. Jl. Lkr. Luar Barat No.Kav. 8, Rw. Buaya, Kecamatan Cengkareng, 
                              Kota Jakarta Barat, DKI Jakarta 11740
                          </Text>
                      </Flex>
                    </Flex>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Flex>
            <Text mt={'2rem'} fontSize={{ base: "14px", md: "16px" , lg: "18px" }}  as="i" color={"#483C32"}>Terima Kasih.</Text>
            <Text mt={'-0.5rem'} fontSize={{ base: "14px", md: "16px" , lg: "18px" }}  as="i" color={"#483C32"}>Kami yang berbahagia,</Text>
            <Text mt={'-0.5rem'} fontSize={{ base: "18px", md: "20px" , lg: "25px" }}  as="i" color={"#C19A6B"}>Sandy & Graha</Text>
          </Stack>
        </Stack>
      </Flex>
      </SlideFade>
    </Box>
    </>
  );
}

export default Gift;