import React, { UIEvent, useRef } from 'react';
import { useInViewport } from 'react-in-viewport';
import {
  Box,
  Flex,
  Heading,
  Stack,
  Text,
  Fade
} from "@chakra-ui/react";
import TLboxRSide from "../Components/TLboxRSide";
import TLboxLSide from "../Components/TLboxLSide";

type Props = {lang: string;};
function Story({lang}: Props) {
    const ref = useRef(null)
    const {inViewport} = useInViewport(ref, {rootMargin: "-150px"}, {disconnectOnLeave: false}, {})

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
                ref={ref}
            >
                <Fade in={inViewport} transition={{enter: {duration: 1}}}> 
                    <Stack align={'center'}>
                        <Text  fontSize={{ base: "18px", md: "20px" , lg: "25px" }} as="i" color={"#483C32"}>#HAtiuntukberSANDar</Text>
                        <Heading fontSize={{ base: "35px", md: "45px" , lg: "50px" }} as="i" color={"#C19A6B"}>Our Story</Heading>
                    </Stack>
                </Fade>
            
                <Flex maxWidth={'80%'} mt={'2rem'} direction={'column'}>
                    {/* <StoryCarousel/> */}

                    <TLboxRSide yearTitle={"2020"} top={true}>
                        {lang == "id" ? (
                            <Text align={'center'} fontSize={{ base: "15px", md: "18px" , lg: "18px" }}>
                                2020 menjadi momen berharga bagi kami. 
                                Pada tahun ini tanpa sengaja kami saling mengenal satu sama lain.
                                Berawal dari sebuah kata sapa yang sederhana, ternyata membuat kami menjadi semakin dekat. 
                                Namun kami tak menyangka bahwa akan sedekat ini. 
                            </Text>
                        ):(
                            <Text align={'center'} fontSize={{ base: "15px", md: "18px" , lg: "18px" }}>
                                In the year 2020, a most auspicious moment unfolded for us.
                                Quite serendipitously, we became acquainted with one another. 
                                It all commenced with a simple exchange of greetings, surprisingly forging a bond that drew us closer than we ever imagined.
                            </Text>
                        )}
                        
                    </TLboxRSide>

                    <TLboxLSide yearTitle={"2021"}>
                        {lang == "id" ? (
                            <Text align={'center'} fontSize={{ base: "15px", md: "18px" , lg: "18px" }}>
                                Kami sempat tak saling berhubungan, melanjutkan hidup masing-masing dengan baik, 
                                namun tiba-tiba kami kembali dekat, mungkin itu sebuah pertanda? Meskipun pada saat itu kami belum menyadarinya. 
                            </Text>
                        ):(
                            <Text align={'center'} fontSize={{ base: "15px", md: "18px" , lg: "18px" }}>
                               Throughout 2021, our paths momentarily diverged as we each pursued our individual journeys. 
                               Yet, a twist of fate drew us back together unexpectedly. 
                               Could it have been a sign, though unbeknownst to us at the time? 
                            </Text>
                        )}
                        
                    </TLboxLSide>

                    <TLboxRSide yearTitle={"May'22"}>
                        {lang == "id" ? (
                            <Text align={'center'} fontSize={{ base: "15px", md: "18px" , lg: "18px" }}>
                                Menjadi awal perjumpaan kami, yang awalnya jauh akhirnya berjumpa secara langsung. 
                                Tanpa kata canggung, perjumpaan tersebut justru terasa seperti reuni dengan kawan lama. 
                            </Text>
                        ):(
                            <Text align={'center'} fontSize={{ base: "15px", md: "18px" , lg: "18px" }}>
                                Our initial encounter, once distant, evolved into a face-to-face rendezvous. 
                                The meeting, devoid of any awkwardness, felt akin to a reunion with a long-lost companion.
                            </Text>
                        )}
                        
                    </TLboxRSide>

                    <TLboxLSide yearTitle={"Nov'22"}>
                        {lang == "id" ? (
                            <Text align={'center'} fontSize={{ base: "15px", md: "18px" , lg: "18px" }}>
                                Hingga di awal bulan November, Graha merasa nyaman dan ingin menjalin sebuah hubungan. 
                                Namun saat itu ia masih bimbang, ntah bagaimana cara untuk mengungkapkan isi hatinya dan ia memilih untuk memendamnya terlebih dahulu. Di sisi lain, 
                                Sandy belum menyadari hal tersebut. 
                            </Text>
                            
                        ):(
                            <Text align={'center'} fontSize={{ base: "15px", md: "18px" , lg: "18px" }}>
                                As November dawned, Graha found comfort and a desire to cultivate a deeper connection. 
                                However, grappling with uncertainty, Graha chose to conceal these sentiments for a while, unbeknownst to Sandy.
                            </Text>
                        )}
                        
                    </TLboxLSide>

                    <TLboxRSide yearTitle={lang == "id" ? ("Des'22"):("Dec'22")}>
                        {lang == "id" ? (
                            <Text align={'center'} fontSize={{ base: "15px", md: "18px" , lg: "18px" }}>
                                Tak mampu lagi menahan rasa, di bulan Desember, Graha mengajak untuk berjumpa kembali, ia membulatkan tekad untuk segera menyatakan isi hatinya. 
                                Pada saat itu, Sandy menyetujui ajakannya tanpa tahu apa yang akan terjadi. 
                                Malam saat Graha mengantar Sandy pulang, Graha mulai mengutarakan isi hatinya yang tentu membuat Sandy kaget dan bingung. 
                                Namun, Sandy dapat melihat ketulusannya. 
                            </Text>
                        ):(
                            <Text align={'center'} fontSize={{ base: "15px", md: "18px" , lg: "18px" }}>
                                Unable to suppress emotions any longer, come December, Graha extended an invitation to reunite, 
                                resolute in expressing the contents of the heart. In that moment, Sandy agreed without a glimpse of what lay ahead. 
                                As Graha escorted Sandy home that night, heartfelt confessions unfolded, 
                                leaving Sandy both surprised and perplexed. Yet, in Graha's sincerity, Sandy found clarity. 
                            </Text>    
                        )}
                        
                    </TLboxRSide>

                    <TLboxLSide yearTitle={lang == "id" ? ("Des'22"):("Dec'22")}>
                        {lang == "id" ? (
                            <Text align={'center'} fontSize={{ base: "15px", md: "18px" , lg: "18px" }}>
                                Dan pada malam itu, 4 Desember 2022, menjadi tanggal yang istimewa bagi kami, 
                                Itulah awal cerita kami.. 
                                Kami ingin terus merajut cerita indah bersama hingga akhir nanti 🤍
                            </Text>
                        ):(
                            <Text align={'center'} fontSize={{ base: "15px", md: "18px" , lg: "18px" }}>
                                And on that fate full night, the 4th of December 2022, became a momentous date for us, a prelude to our tale. 
                                We aspire to continue weaving this enchanting narrative together until the end of time. 🤍
                            </Text>     
                        )}
                       
                    </TLboxLSide>
                </Flex>
            </Flex>
        </Box>
        </>
    );
}

export default Story;