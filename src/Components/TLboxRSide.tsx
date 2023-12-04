import { ReactNode, useState, useMemo, useEffect } from "react";
import {
  Box,
  Flex,
  Container,
  Text,
  Divider,
  Circle
} from "@chakra-ui/react";

type Props = {
    yearTitle: string;
    children: any;
    top?: boolean;
  };
  

  function TLboxRSide({ yearTitle, children, top}: Props) {

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
        >
            <Flex 
                justify="center" 
                align="center"  
                //h={{ base: "350px", md: "150px" , lg: "180px" }}
                h='wrap'
                gap={'1rem'}
                px='1rem'
                py='2rem'
            >
                <Text fontSize='18px'>
                    {yearTitle}
                </Text>
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
        </Box>
        </>
    );
  }

  export default TLboxRSide;