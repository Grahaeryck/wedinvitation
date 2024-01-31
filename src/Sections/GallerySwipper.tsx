import React, { UIEvent, useRef } from 'react';
import { useInViewport } from 'react-in-viewport';
import {
  Box,
  Flex,
  Heading,
  Stack,
  Text,
  AspectRatio,
  Fade
} from "@chakra-ui/react";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import GalleryData from "../Data/GalleryData.json";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../CSS/styles.css';

type Props = {};
function GallerySwipper() {   
    const ref = useRef(null)
    const {inViewport} = useInViewport(ref, {rootMargin: "-150px"}, {disconnectOnLeave: false}, {}) 

    return (
      <>
      <Box 
          maxW={"container.2xl"}
          h="wrap"
          bg={"#FAF9F6"}
          ref={ref}
      >
        <Fade in={inViewport} transition={{enter: {duration: 1}}}> 
          <Flex 
            justify="center" 
            align={"center"}
            h={'inherit'}
            direction={'column'}
          >
            <Stack mt="6rem" mb="1rem" align={'center'} justify="center" >
                <Text fontSize={{ base: "18px", md: "20px" , lg: "25px" }} as="i" color={"#483C32"}>Galeri</Text>
                <Heading fontSize={{ base: "35px", md: "45px" , lg: "50px" }} as="i" color={"#C19A6B"}>Wedding Gallery</Heading>
            </Stack>
            
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >     
              {GalleryData.map((item: any, index: number) => (
                <SwiperSlide>
                  <Box 
                    h={"100%"}
                    width={'100%'}
                    bgImage={item.imgSource}
                    bgSize="cover"
                    bgPosition="center"
                    bgRepeat="no-repeat"
                    boxShadow='dark-lg'
                  >
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>
            <Flex justify={'center'} align={'center'} mt={'2rem'} mb={'6rem'} direction={'column'}>
              {/* <AspectRatio width={{ base: '320px', md: '600px' , lg: '900px' }} ratio={16 / 9}>
                <iframe 
                    src="https://www.youtube.com/embed/wqcu0j3Wsys?si=RcWJIHck1OXAc5-v" 
                    title="Sandy & Graha" 
                    allowFullScreen
                />
              </AspectRatio> */}
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
          </Flex>
        </Fade>
      </Box>
      </>
    );
}
export default GallerySwipper;