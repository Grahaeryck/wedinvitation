import React, { UIEvent, useRef, useEffect, useState } from 'react';
import { useInViewport } from 'react-in-viewport';
import {
  Box,
  Flex,
  Text,
  Stack,
  Heading,
  Fade,
  Image
} from "@chakra-ui/react";
import WishesCard from "../Components/WishesCard";
import LoadingIcon from  '../Asset/LoadingIcon.gif';
import {getComments} from '../API/WedAPI';

type Props = {lang : string;};
function Wishes({lang}: Props) {    

    const ref = useRef(null)
    const {inViewport} = useInViewport(ref,{rootMargin: "-50px"}, {disconnectOnLeave: true}, {})

    const [isLoading, setIsLoading] = useState(true);
    const [apiError, setApiError] = useState(false);
    const [commentsList, setCommentsList] = useState([]);

    useEffect(() => {
        getComments(
            (res) => {
                setIsLoading(true);
                setCommentsList(res);
                console.log('commentsList',commentsList);
                setIsLoading(false);
                setApiError(false);
            },
            (error) => {
                console.log("Error", error);
                setApiError(true)
                setIsLoading(false);
            }
        )
        
    }, [])

    return (
      <>
        <Box 
            maxW={"container.2xl"}
            h="wrap"
            bg={"#FAF9F6"}
            ref={ref}
        >
            <Fade in={inViewport} transition={{enter: {duration: 2}}}> 
                <Flex 
                    justify="center" 
                    align="center"
                    h={'inherit'}
                >
                    <Stack mt="6rem" mb="6rem">
                        <Stack align={'center'}>
                            <Text fontSize={{ base: "18px", md: "20px" , lg: "25px" }} as="i" color={"#483C32"}>Ucapan & Doa</Text>
                            <Heading fontSize={{ base: "35px", md: "45px" , lg: "50px" }} as="i" color={"#C19A6B"}>Wishes</Heading>
                        </Stack>
                            {isLoading ? (
                                <Flex  
                                    alignItems={'center'} 
                                    justifyItems={'center'} 
                                    maxH={'400px'}
                                    direction={'column'}
                                    mt={'2rem'}
                                >
                                    <Image src={LoadingIcon} alt="loader icon" height={'150px'} width={'150px'} />
                                </Flex>
                            ):(
                                <>
                                    {!apiError ? (
                                        <>
                                            <Flex  
                                                alignItems={'center'} 
                                                justifyItems={'center'} 
                                                overflowY={'scroll'} 
                                                maxH={'60vh'}
                                                direction={'column'}
                                                mt={'2rem'}
                                                sx={{
                                                    '&::-webkit-scrollbar': {
                                                        width: '8px',
                                                        borderRadius: '4px',
                                                        backgroundColor: `rgba(193, 154, 107, 0.3)`,
                                        
                                                    },
                                                    '&::-webkit-scrollbar-thumb': {
                                                        borderRadius: '4px',
                                                        backgroundColor: `rgba(193, 154, 107, 0.8)`,
                                                    },
                                                  }}
                                            >
                                                {commentsList.map((item: any, index: number) => (
                                                    <WishesCard
                                                        name={item.name}
                                                        timeposted={item.timeposted}
                                                        comments={item.comments}
                                                    />
                                                ))}
                                            </Flex>
                                        </>
                                    ):(
                                        <>
                                            <Flex  
                                                alignItems={'center'} 
                                                justifyItems={'center'} 
                                                maxH={'400px'}
                                                direction={'column'}
                                                mt={'2rem'}
                                            >
                                                <Text fontSize={{ base: "18px", md: "20px" , lg: "25px" }} as="i" color={"#483C32"}>
                                                    Oops! Something went wrong 
                                                </Text>
                                                <Text 
                                                    fontSize={{ base: "14px", md: "16px" , lg: "18px" }} 
                                                    as="i" color={"#483C32"} 
                                                    align={'center'}
                                                    width={{ base: "80%", md: "70%" , lg: "60%" }}
                                                >
                                                    The API connection is blocked by your network. try disconnecting your VPN or changing networks
                                                </Text>
                                            </Flex>
                                        </>
                                    )}
                                </>
                            )}
                            
                        
                    </Stack>
                </Flex>
            </Fade>
        </Box>
      </>
    );
}
export default Wishes;