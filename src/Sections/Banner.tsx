import {
  Box,
  Flex,
  Heading,
  Stack,
  Text
} from "@chakra-ui/react";
import bgIMG from "../Asset/Banner.jpeg"

type Props = {
    lang: string;
};
function Banner({lang}: Props) {

    return (
        <>
        <Box 
            mt={"-0.1rem"}
            maxW={"container.2xl"}
            h='calc(101vh)'
            bgImage={bgIMG}
            // bgAttachment={'fixed'}
            bgSize="cover"
            bgPosition="center"
            bgRepeat="no-repeat"
            boxShadow='dark-lg'
        >
            <Flex 
                justify="center" 
                align={"center"}
                h={'inherit'}
            >
                <Stack align={'center'}>
                    <Heading fontSize={{ base: "35px", md: "45px" , lg: "50px" }} as="h1" color={"#f9f6ee"}>Sandy & Graha</Heading>
                    {lang == "id" ? (
                        <Text fontSize={{ base: "18px", md: "20px" , lg: "25px" }} as="p" color={"#f9f6ee"}>Fabruari 24, 2024 | Malang, Indonesia</Text>
                    ):(
                        <Text fontSize={{ base: "18px", md: "20px" , lg: "25px" }} as="p" color={"#f9f6ee"}>February 24, 2024 | Malang, Indonesia</Text>
                    )}
                </Stack>
            </Flex>
        </Box>
        </>
    );

}

export default Banner;