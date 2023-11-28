import { ReactNode, useState, useMemo, useEffect } from "react";
import {
  Box,
  Flex,
  Heading,
  Stack,
  Image,
  Divider,
  Text,
  AbsoluteCenter,
  Grid,
  GridItem,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  ButtonGroup,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from "@chakra-ui/react";

import picSample from "../Asset/tl3.jpg";
import Banner from '../Asset/Banner.jpeg';


type Props = {};
function GaleryCard({}: Props) {

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
        <Box height={'wrap'} width={'wrap'}>
            <Card 
                w={{ base: '120px', md: '180px' , lg: '280px' }}
                h={{ base: '220px', md: '280px' , lg: '380px' }}
                cursor={'pointer'}
                
                bgImage={picSample}
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
                                    Cantik Banget Kan
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
                              h={'480px'}
                              w={'854px'}
                              objectFit='cover'
                              src={Banner}
                              mt='2rem'
                              justifyContent={'center'}
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
        </Box>
        </>
    );

}

export default GaleryCard;