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
import GiftTabPanels from "../Components/GiftTabPanels";

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
                  "Kehadiran dan doa restu anda di hari spesial kami merupakan hadiah terbaik bagi kami. Namun, apabila memberi adalah tanda cinta, kami akan menerima dengan senang hati. Silahkan untuk dapat cek detail di bawah ini."
        
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

                  {type === "mm" || type === "MM" ? (
                    <GiftTabPanels id={1} title={"Bank Mandiri"} receiver={"Etin Jumarili Amanar"} accountNO={"1120021581785"} imgSource={"https://hatiuntukbersandar.com/Image/thumbnails/tn_Mandiri.png"}/>
                  ):(
                    <GiftTabPanels id={1} title={"Bank Mandiri"} receiver={"Sandy Sitia Nur Annisa"} accountNO={"1440018514312"} imgSource={"https://hatiuntukbersandar.com/Image/thumbnails/tn_Mandiri.png"}/>
                  )}

                  {type === "mm" || type === "MM" ? (
                    <GiftTabPanels id={2} title={"Bank Central Asia"} receiver={"Etin Jumarili Amanar"} accountNO={"1160559264"} imgSource={"https://hatiuntukbersandar.com/Image/thumbnails/tn_BCA.png"}/>
                  ):(
                    <GiftTabPanels id={2} title={"Bank Central Asia"} receiver={"Muhammad Graha Eryck Pratama"} accountNO={"1160517707"} imgSource={"https://hatiuntukbersandar.com/Image/thumbnails/tn_BCA.png"}/>
                  )}

                  <GiftTabPanels id={3} title={"Paypal"} receiver={"Graha Eryck"} accountNO={"Paypal.Me/GrahaEryck"} imgSource={"https://hatiuntukbersandar.com/Image/thumbnails/tn_PayPal.png"}/>
                  

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
            <Text mt={'2rem'} fontSize={{ base: "14px", md: "16px" , lg: "18px" }}  as="i" color={"#483C32"}>
              {lang == "id" ? ("Terima Kasih."):("Thank You")}
            </Text>
            {lang == "id" ? (
              <Text mt={'-0.5rem'} fontSize={{ base: "14px", md: "16px" , lg: "18px" }}  as="i" color={"#483C32"}>Kami yang berbahagia,</Text>
            ):(
              "" // <>Show Nothing</> 
            )}
            
            <Text mt={'-0.5rem'} fontSize={{ base: "22px", md: "25px" , lg: "28px" }}  as="i" color={"#C19A6B"}>Sandy & Graha</Text>
          </Stack>
        </Stack>
      </Flex>
      </SlideFade>
    </Box>
    </>
  );
}

export default Gift;