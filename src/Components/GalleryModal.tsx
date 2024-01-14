import { ReactNode, useState, useMemo, useEffect } from "react";
import {
  Box,
  Flex,
  Container,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Image,
  useDisclosure
} from "@chakra-ui/react";
import Banner from '../Asset/Banner.jpeg';

type Props = {
    screen?: string | undefined;
    layoutSize?: string | undefined;
  };
  

  function GalleryModal({ screen, layoutSize }: Props) {
        const { isOpen, onOpen, onClose } = useDisclosure();
        
    return (
        <>
        <Box>
        <Flex direction={'column'} justify={'center'}>
                <Modal isOpen={isOpen} onClose={onClose} size={'full'}  >
                  <ModalOverlay />
                  <ModalContent bg={'rgba(249, 246, 238, 0.6)'} >
                    <ModalCloseButton />
                    <ModalBody >
                        <Flex direction={'column'} justify={'center'} align={'center'}>
                            <Image
                              boxSize='200px'
                              //h={'480px'}
                              //w={'854px'}
                              objectFit='cover'
                              src={Banner}
                              mt='2rem'
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

  export default GalleryModal;