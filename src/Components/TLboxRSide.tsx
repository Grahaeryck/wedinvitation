import React, { UIEvent, useRef } from 'react';
import { useInViewport } from 'react-in-viewport';
import {
  Box,
  Flex,
  Container,
  Text,
  Divider,
  Circle,
  ScaleFade
} from "@chakra-ui/react";

type Props = {
    yearTitle: string;
    children: any;
    top?: boolean;
  };
  

  function TLboxRSide({ yearTitle, children, top}: Props) {
    const ref = useRef(null)
    const {inViewport} = useInViewport(ref, {rootMargin: "-150px"}, {disconnectOnLeave: false}, {})

    return (
        <>
        <Box 
            //h={{ base: "300px", md: "150px" , lg: "100px" }}
            borderTopColor={top ? ('#C19A6B'):('#F9F6EE')}
            borderTopWidth={'2px'}
            borderBottomColor={'#C19A6B'} 
            borderLeftColor={'#C19A6B'} 
            borderBottomWidth={'2px'} 
            borderLeftWidth={'2px'}
            ref={ref}
        >
            <ScaleFade initialScale={0.9} in={inViewport}>
            <Flex 
                justify="center" 
                align="center"  
                //h={{ base: "350px", md: "150px" , lg: "180px" }}
                h='wrap'
                gap={'0.5rem'}
                px='0.5rem'
                py='1rem'
            >
                <Flex>
                    <Text fontSize='18px' transform={"rotate(-90deg)"}>
                        {yearTitle}
                    </Text>
                </Flex>
                <Flex height={'100px'} width={'30px'} justify={'center'}>
                    <Divider borderColor={'#C19A6B'} borderWidth='1px' orientation='vertical'/>
                    <Flex ml='-7px' height='inherit' align={'center'}>
                        <Circle  size='12px' bg='#C19A6B' color='white'/>
                    </Flex>
                </Flex>
                <Flex align={'center'} justify={'center'} width={'600px'}>
                    {children}
                </Flex>
            </Flex>
            </ScaleFade>
        </Box>
        </>
    );
  }

  export default TLboxRSide;