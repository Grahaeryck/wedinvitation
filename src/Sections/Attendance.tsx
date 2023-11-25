import { ReactNode, useState, useMemo, useEffect } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Heading,
  // Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
  Container,
  Divider,
  Input,
  Select,
  Text,
  theme,
  Textarea,
  Grid,
  GridItem
} from "@chakra-ui/react";
import { 
    InfoOutlineIcon
} from '@chakra-ui/icons';
import AttendanceBG from "../Asset/img_bg_4.jpg";

type Props = {};
function Attendance({}: Props) {

    return (
        <>
        <Box 
            maxW={"container.2xl"}
            h="wrap"
            backgroundImage={AttendanceBG}
        >
            <Flex justify="center">
                <Stack 
                    mt="6rem"
                    mb="6rem"
                    p="2rem"
                    justify="center" 
                    align="center"
                >
                    <Heading as="h1"  textColor={"#FAF9F6"}>Are you Attending?</Heading>
                    <Text textColor={"#F9F6EE"}>Please Fill-up the form to notify us that you're attending. Thanks.</Text>
                    
                    <Grid
                      templateColumns='repeat(3, 1fr)'
                      gap={4}
                      mt={'20px'}
                    >
                        <GridItem colSpan={{ base: 3, md: 1 , lg: 1 }}>
                            <Input 
                                bgColor={'rgba(250, 249, 246, 0.7)'} 
                                focusBorderColor='#483C32'
                                placeholder='Name' 
                                _placeholder={{ color: '#483C32' }}
                            />
                        </GridItem>
                        <GridItem colSpan={{ base: 3, md: 2 , lg: 2 }}>
                            <Box minW="250px">
                                <Select 
                                    width='100%'
                                    bgColor={'rgba(250, 249, 246, 0.7)'}  
                                    focusBorderColor='#483C32'
                                    placeholder='Session / Sesi'
                                    _placeholder={{ color: '#483C32' }}
                                    >
                                  <option value='option1'>Session 1</option>
                                  <option value='option2'>Session 2</option>
                                </Select>
                            </Box>
                        </GridItem>
                        <GridItem colSpan={3}> 
                            <Stack>
                            <Textarea 
                                placeholder='Whishes / Ucapan atau Doa' 
                                bgColor={'rgba(250, 249, 246, 0.7)'} 
                                focusBorderColor='#483C32'
                                _placeholder={{ color: '#483C32' }}
                            />
                                <HStack>
                                    <InfoOutlineIcon boxSize={'10px'} color="#483C32"/>
                                    <Text fontSize={'10px'} color="#483C32">Please note that your wishes will be displayed on this website</Text>
                                </HStack>

                                <HStack>
                                    <InfoOutlineIcon boxSize={'10px'} color="#483C32"/>
                                    <Text fontSize={'10px'} color="#483C32">Harap dicatat bahwa 'Whishes' Anda akan ditampilkan di situs web ini</Text>
                                </HStack>
                            </Stack>
                        </GridItem>

                    </Grid>
                    <Button bgColor={"#F9F6EE"} variant='solid' alignItems='center' width='90%'>
                        I'AM ATTENDING
                    </Button>
                </Stack>
            </Flex>
        </Box>
        </>
    );

}

export default Attendance;