//import { ReactNode, useState, useMemo, useEffect } from "react";
import {
  Box,
  Flex,
  Text,
  Divider,
  Circle
} from "@chakra-ui/react";

type Props = {
    yearTitle: string;
    children: any;
  };
  

  function TLboxLSide({ yearTitle, children}: Props) {

    return (
        <>
        <Box 
            //h={{ base: "300px", md: "150px" , lg: "100px" }}
            borderBottomColor={'#C19A6B'} 
            borderBottomWidth={'2px'} 
            borderRightColor={'#C19A6B'} 
            borderRightWidth={'2px'}
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
                <Flex align={'center'} justify={'center'} width={'600px'}>
                    {children}
                </Flex>
                <Flex height={'100px'} width={'30px'} justify={'center'}>
                    <Divider borderColor={'#C19A6B'} borderWidth='1px' orientation='vertical'/>
                    <Flex ml='-7px' height='inherit' align={'center'}>
                        <Circle  size='12px' bg='#C19A6B' color='white'/>
                    </Flex>
                </Flex>
                <Text fontSize='18px'>
                    {yearTitle}
                </Text>
            </Flex>
        </Box>
        </>
    );
  }

  export default TLboxLSide;