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
  Grid,
  GridItem,
  Center,
  Circle
} from "@chakra-ui/react";
import TLboxRSide from "../Components/TLboxRSide";
import TLboxLSide from "../Components/TLboxLSide";

type Props = {};
function Story({}: Props) {

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
                direction={'column'}
                py='4rem'
            >
                <Stack align={'center'}>
                    <Text fontSize={{ base: "18px", md: "20px" , lg: "25px" }} as="i" color={"#483C32"}>#HAtiuntukberSANDar</Text>
                    <Heading fontSize={{ base: "35px", md: "45px" , lg: "50px" }} as="i" color={"#C19A6B"}>Our Story</Heading>
                </Stack>
            
                <Flex maxWidth={'80%'} mt={'2rem'} direction={'column'}>
                    {/* <StoryCarousel/> */}


                    <TLboxRSide yearTitle={"2020"} top={true}>
                        <Text align={'center'} fontSize='18px'>
                            2020 menjadi momen berharga bagi kami. 
                            Pada tahun ini tanpa sengaja kami saling mengenal satu sama lain.
                            Berawal dari sebuah kata sapa yang sederhana, ternyata membuat kami menjadi semakin dekat. 
                            Namun kami tak menyangka bahwa akan sedekat ini. 
                        </Text>
                    </TLboxRSide>

                    <TLboxLSide yearTitle={"2021"}>
                        <Text align={'center'} fontSize='18px'>
                            Kami sempat tak saling berhubungan, melanjutkan hidup masing-masing dengan baik, 
                            namun tiba-tiba kami kembali dekat, mungkin itu sebuah pertanda? Meskipun pada saat itu kami belum menyadarinya. 
                        </Text>
                    </TLboxLSide>

                    <TLboxRSide yearTitle={"Jun 22"}>
                        <Text align={'center'} fontSize='18px'>
                            Menjadi awal perjumpaan kami, yang awalnya jauh akhirnya berjumpa secara langsung. 
                            Tanpa kata canggung, perjumpaan tersebut justru terasa seperti reuni dengan kawan lama. 
                        </Text>
                    </TLboxRSide>

                    <TLboxLSide yearTitle={"Nov 22"}>
                        <Text align={'center'} fontSize='18px'>
                            Hingga di awal bulan November, Graha merasa nyaman dan ingin menjalin sebuah hubungan. 
                            Namun saat itu ia masih bimbang, ntah bagaimana cara untuk mengungkapkan isi hatinya dan ia memilih untuk memendamnya terlebih dahulu. Di sisi lain, 
                            Sandy belum menyadari hal tersebut. 
                        </Text>
                    </TLboxLSide>

                    <TLboxRSide yearTitle={"Des 22"}>
                        <Text align={'center'} fontSize='18px'>
                        Tak mampu lagi menahan rasa, di bulan Desember, Graha mengajak untuk berjumpa kembali, ia membulatkan tekad untuk segera menyatakan isi hatinya. 
                        Pada saat itu, Sandy menyetujui ajakannya tanpa tahu apa yang akan terjadi. 
                        Malam saat Graha mengantar Sandy pulang, Graha mulai mengutarakan isi hatinya yang tentu membuat Sandy kaget dan bingung. 
                        Namun, Sandy dapat melihat ketulusannya. 
                        </Text>
                    </TLboxRSide>

                    <TLboxLSide yearTitle={"Des 22"}>
                        <Text align={'center'} fontSize='18px'>
                            Dan pada malam itu, 4 Desember 2022, menjadi tanggal yang istimewa bagi kami, 
                            Itulah awal cerita kami.. 
                            Kami ingin terus merajut cerita indah bersama hingga akhir nanti 🤍
                        </Text>
                    </TLboxLSide>
                </Flex>
            </Flex>
        </Box>
        </>
    );
}

export default Story;