import { useState, useEffect} from "react";
import {useNavigate, useSearchParams } from 'react-router-dom';
import {
  Box,
  Flex,
  Text,
  Button,
  Stack,
  Heading,
  Image
} from "@chakra-ui/react";
import IntroBg from '../Asset/IntroBg.jpg';
import English96 from '../Asset/English96.png';
import Indonesia96 from '../Asset/Indonesia96.png';

type Props = {};
function LandingWimg({}: Props) { 
    let gAttribute1 : string = 'to';
    let gAttribute2 : string = "partner";

    const [searchParams] = useSearchParams();
    const [guests, setGuest ] = useState<string | null>('Guest');
    const [partner, setPartner ] = useState<string | any>('Guest Partner');  
    const navigate = useNavigate(); 

    const handleOpenID = () => {
        navigate('/id/Home', {
            state: {
            }
        })
    }

    const handleOpenENG = () => {
        navigate('/eng/Home', {
            state: {
            }
        })
    }

    const t1 = searchParams.get(gAttribute1);
    const t2 = searchParams.get(gAttribute2);
    
    useEffect(() => {
        document.title = "Sandy & Graha | #HAtiuntukberSANDar";
        if(t1 && t2)
        {
            setGuest(t1);
            setPartner(t2);

            localStorage.setItem('Guest', JSON.stringify(searchParams.get(gAttribute1)));
            localStorage.setItem('Partner', JSON.stringify(searchParams.get(gAttribute2)));
        }
        else
        {
            setGuest(JSON.parse(localStorage.getItem('Guest')!))
            setPartner(JSON.parse(localStorage.getItem('Partner')!))
        }
    }, []);

    //console.log(searchParams.get('to')); // 'name'
    //console.log(searchParams.get('partner')); // 'name'

    return (
      <>
        <Box 
            mt={"-0.1rem"}
            maxW={"container.2xl"}
            h='calc(101vh)'
            bgImage={IntroBg}
            bgAttachment={'fixed'}
            bgSize="cover"
            bgPosition="center"
            bgRepeat="no-repeat"
            boxShadow='dark-lg'
        >
            <Flex 
                justify="center" 
                align={"center"}
                h={'inherit'}
                direction={'column'}
            >
                <Stack align={'center'}>
                    <Text fontSize={{ base: "18px", md: "20px" , lg: "25px" }} as="p" color={"#483C32"} >We invite you to the wedding of</Text>
                    <Heading fontSize={{ base: "35px", md: "45px" , lg: "50px" }} as="h1" color={"#483C32"}>Sandy & Graha</Heading>
                    <Box 
                        bg={'rgba(249, 246, 238, 0.4)'}
                        borderRadius={'10px'}
                    >
                        <Flex 
                            align={'center'} 
                            justify={'center'} 
                            direction={'column'} 
                            my='1rem' 
                            px='2rem'
                            minW={'300px'}
                        >
                            <Text fontSize={{ base: "16px", md: "18px" , lg: "20px" }} as="p" color={"#483C32"}>Kepada Yth.</Text>
                            <Text fontSize={{ base: "16px", md: "18px" , lg: "20px" }} as="p" color={"#483C32"}>Bapak/Ibu/Saudara/i</Text>
                            {partner == 0 ? 
                                (<Heading 
                                    fontSize={{ base: "25px", md: "30px" , lg: "35px" }} 
                                    as="h1"
                                    color={"#483C32"}
                                 >
                                    {guests}
                                 </Heading>
                                ):(
                                 <Heading 
                                    fontSize={{ base: "25px", md: "30px" , lg: "35px" }} 
                                    as="h1" 
                                    color={"#483C32"}
                                 >
                                    {guests} & {partner}
                                 </Heading>
                                )}
                            <Text fontSize={{ base: "16px", md: "18px" , lg: "20px" }} as="p" color={"#483C32"}>Di Tempat</Text>

                        </Flex>
                    </Box>
                    <Text fontSize={{ base: "16px", md: "18px" , lg: "20px" }} as="p" color={"#483C32"} mt={'1rem'}> Open in / Buka dengan </Text>
                    <Flex gap={'1rem'} mt={'0.5rem'}>
                        <Button
                          size='md'
                          height='48px'
                          width='150px'
                          border='2px'
                          color='#C19A6B'
                          bgColor='#483C32'
                          borderColor='#C19A6B'
                          borderRadius='20px'
                          _hover={{ bgColor:'#F9F6EE'}}
                          onClick={handleOpenENG}
                                    
                        >
                            <Flex gap='5px' align={'center'}>
                                <Image
                                      boxSize={'26px'}
                                      objectFit='cover'
                                      src={English96}
                                      justifyContent={'center'}
                                />
                                <Text>English</Text>
                            </Flex>
                        </Button>
                        <Button
                          size='md'
                          height='48px'
                          width='150px'
                          border='2px'
                          color='#C19A6B'
                          bgColor='#483C32'
                          borderColor='#C19A6B'
                          borderRadius='20px'
                          _hover={{ bgColor:'#F9F6EE'}}
                          onClick={handleOpenID}
                        >
                            <Flex gap='5px' align={'center'}>
                                <Image
                                    boxSize={'26px'}
                                    objectFit='cover'
                                    src={Indonesia96}
                                    justifyContent={'center'}
                                />
                                <Text>Bahasa</Text>
                            </Flex>
                        </Button>
                    </Flex>
                </Stack>
            </Flex>
        </Box>

      </>
    );
}
export default LandingWimg;