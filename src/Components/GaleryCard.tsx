import React, { UIEvent, useRef } from 'react';
import { useInViewport } from 'react-in-viewport';
import {
  Box,
  Flex,
  Image,
  Divider,
  Text,
  Card,
  CardBody,
  CardFooter,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  ScaleFade
} from "@chakra-ui/react";

import picSample from "../Asset/tl3.jpg";
import Banner from '../Asset/Banner.jpeg';


type Props = {
  cardTitle:string|any;
  cardSrc: string|any;
};
function GaleryCard({cardTitle, cardSrc}: Props) {
  const ref = useRef(null)
    const {inViewport} = useInViewport(ref, {rootMargin: "-150px"}, {disconnectOnLeave: false}, {})

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
        <Box height={'wrap'} width={'wrap'} ref={ref}>
        <ScaleFade initialScale={0.9} in={inViewport}>
            <Card 
                w={{ base: '120px', md: '180px' , lg: '280px' }}
                h={{ base: '220px', md: '280px' , lg: '380px' }}
                cursor={'pointer'}
                
                bgImage={cardSrc}
                bgSize="cover"
                bgPosition="center"
                bgRepeat="no-repeat"
                onClick={onOpen}
            >
                <Flex 
                  w={'inherit'}
                  h={'inherit'}
                  direction={'column'}
                  _hover={{bg:'rgba(0, 0, 0, 0.3)'}}
                >
                    <CardBody>
                    </CardBody>
                    <CardFooter>
                      <Box>
                          <Flex direction={'column'}>
                                <Text 
                                    color={'rgba(255, 255, 255, 0.7)'} 
                                    width={'100%'}
                                    fontSize={{ base: '10px', md: '12px' , lg: '14px' }}
                                >   
                                    {cardTitle}
                                </Text>
                              <Divider border={'2px'} borderColor={'#C19A6B'}/>
                          </Flex>
                      </Box>
                    </CardFooter>
                </Flex>
            </Card>
            <Flex direction={'column'} justify={'center'}>
                <Modal isOpen={isOpen} onClose={onClose} size={'full'} isCentered >
                  <ModalOverlay />
                  <ModalContent bg={'rgba(249, 246, 238, 0.6)'} >
                    <ModalCloseButton />
                    <ModalBody >
                        <Flex direction={'column'} justify={'center'} align={'center'}>
                            <Image
                              maxH={'100vh'}
                              //w={'854px'}
                              objectFit='cover'
                              src={cardSrc}
                              mt='2rem'
                              justifyContent={'center'}
                              alignContent={'center'}
                            />
                        </Flex>
                    </ModalBody>
                    <ModalFooter>
                        <Button
                          size='sm'
                          height='48px'
                          width='100px'
                          border='2px'
                          color='#C19A6B'
                          bgColor='#F9F6EE'
                          borderColor='#C19A6B'
                          borderRadius='20px'
                          _hover={{ bgColor:'#483C32'}}
                          onClick={onClose}
                        >
                            Close
                        </Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
            </Flex>
            </ScaleFade>
        </Box>
        </>
    );

}

export default GaleryCard;