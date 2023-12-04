import { ReactNode, useState, useMemo, useEffect } from "react";
import {
  Box,
  Flex,
  Container,
  Text,
  Divider,
  Circle
} from "@chakra-ui/react";

type item = {
    id : string;
    year1 : string;
    description1 : string;
    year2 : string;
    description2 : string;
}
type Props = {
    item : {
        id : number;
        year1 : string;
        description1 : string;
        year2 : string;
        description2 : string;
    };
  };
  

  function CarouselItems({ item }: Props) {

    return (
        <>
        <Box 
            //h={{ base: "300px", md: "150px" , lg: "100px" }}
            borderTopColor={'#C19A6B'}
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
                    {item.year1}
                </Text>
                <Flex height={'100px'} width={'30px'} justify={'center'}>
                    <Divider borderColor={'#C19A6B'} borderWidth='1px' orientation='vertical'/>
                    <Flex ml='-7px' height='inherit' align={'center'}>
                        <Circle  size='12px' bg='#C19A6B' color='white'/>
                    </Flex>
                </Flex>
                <Flex align={'center'} justify={'center'} width={'600px'}>
                    {item.description1}
                </Flex>
            </Flex>
        </Box>
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
                    {item.description2}
                </Flex>
                <Flex height={'100px'} width={'30px'} justify={'center'}>
                    <Divider borderColor={'#C19A6B'} borderWidth='1px' orientation='vertical'/>
                    <Flex ml='-7px' height='inherit' align={'center'}>
                        <Circle  size='12px' bg='#C19A6B' color='white'/>
                    </Flex>
                </Flex>
                <Text fontSize='18px'>
                    {item.year2}
                </Text>
            </Flex>
        </Box>
        </>
    );
  }

  export default CarouselItems;