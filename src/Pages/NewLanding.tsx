import { useState, useEffect} from "react";
import {useNavigate, useSearchParams } from 'react-router-dom';
import {
  Box,
  Flex,
  Text,
  Button,
  Stack,
  Heading,
  Image,
  Fade,
  useDisclosure,
  IconButton
} from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompactDisc,faVolumeXmark } from '@fortawesome/free-solid-svg-icons';
import Home from '../Pages/Home';
import IntroBg from '../Asset/IntroBg.jpg';
import English96 from '../Asset/English96.png';
import Indonesia96 from '../Asset/Indonesia96.png';
import Soundtrack from "../Asset/Backsound.mp3";

let song = new Audio(Soundtrack);
song.loop = true;

type Props = {};
function NewLanding({}: Props) { 
    let gAttribute1 : string = 'd';
    let gAttribute2 : string = 'to';
    let gAttribute3 : string = "partner";

    const [searchParams] = useSearchParams();
    const [coverVisible, setCoverVisible] = useState(true)
    const { isOpen, onToggle } = useDisclosure()
    const [language, setLanguage] = useState<string>();

    const [playing, setPlaying ] = useState("paused");

    const [invType, setInvType] = useState<string>('AB');
    const [guests, setGuest ] = useState<string | null>('Guest');
    const [partner, setPartner ] = useState<string | any>('Guest Partner');  

    const handleOpenID = () => {
        setCoverVisible(false);
        setLanguage("ID");
        onToggle();
        setPlaying("playing");
    }

    const handleOpenENG = () => {
        setCoverVisible(false);
        setLanguage("ENG");
        onToggle();
        setPlaying("playing");
    }

    const t1 = searchParams.get(gAttribute1);
    const t2 = searchParams.get(gAttribute2);
    const t3 = searchParams.get(gAttribute3);
    
    useEffect(() => {
        document.title = "Sandy & Graha | #HAtiuntukberSANDar";
        if(t1 && t2 && t3)
        {
            setInvType(t1)
            setGuest(t2);
            setPartner(t3);

            localStorage.setItem('Type', JSON.stringify(searchParams.get(gAttribute1)));
            localStorage.setItem('Guest', JSON.stringify(searchParams.get(gAttribute2)));
            localStorage.setItem('Partner', JSON.stringify(searchParams.get(gAttribute3)));
        }
        else
        {
            setInvType(JSON.parse(localStorage.getItem('Type')!))
            setGuest(JSON.parse(localStorage.getItem('Guest')!))
            setPartner(JSON.parse(localStorage.getItem('Partner')!))
        }
    }, []);

    useEffect(()=>{
        if(playing=='playing')
        {
            song.play();
        }
        else
            song.pause();

    },[playing]);

    function onClickHandler()
    {
        if(playing=='paused')
            setPlaying("playing")
        
        else
            setPlaying("paused")
    }

    return (
      <>
        {coverVisible ? 
            (
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
                                            textAlign={'center'}
                                         >
                                            {guests}
                                         </Heading>
                                        ):(
                                         <Heading 
                                            fontSize={{ base: "25px", md: "30px" , lg: "35px" }} 
                                            as="h1" 
                                            color={"#483C32"}
                                            textAlign={'center'}
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
            )
            :
            (
                <Box>
                    <Fade in={isOpen} transition={{enter: {duration: 2.5}}}>
                        {language === "ID" ? (
                            <Home language={'id'} type={invType}/>
                        ):(
                            <Home language={'eng'} type={invType}/>
                        )}
                      </Fade>
                </Box>
            )}

            <IconButton
                isRound={true}
                size={'lg'}
                variant='solid'
                bg={'rgba(193, 154, 107, 0.3)'}
                aria-label='Done'
                fontSize='20px'
                border={'2px solid'}
                borderColor={'#FAF9F6'}
                bottom={'3rem'}
                right={'1rem'}
                zIndex={'1'}
                position={'fixed'}
                opacity={'100%'}
                onClick={()=> (onClickHandler())}
                _hover={{bg:'rgba(193, 154, 107, 0.3)'}}
                icon={playing == "paused" ? 
                      <FontAwesomeIcon icon={faVolumeXmark} style={{color: "#483C32"}} />
                      : 
                      <FontAwesomeIcon spin icon={faCompactDisc} style={{color: "black"}} size="xl"/>}
            />
      </>
    );
}
export default NewLanding;