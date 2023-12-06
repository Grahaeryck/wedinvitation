import { ReactNode, useState, useMemo, useEffect } from "react";
import {
  Box,
  Flex,
  HStack,
  Heading,
  Button,
  Stack,
  Input,
  Select,
  Text,
  Textarea,
  Grid,
  GridItem,
  RadioGroup,
  Radio,
  theme
} from "@chakra-ui/react";
import { 
    InfoOutlineIcon
} from '@chakra-ui/icons';
import AttendanceBG from "../Asset/AttendanceBG.jpg";
import GaleryCard from "../Components/GaleryCard";
import platnomorCroped from "../Asset/platnomorCroped.png";

type Props = {};
function Attendance({}: Props) {
    const [kehadiran, setKehadiran] = useState("");

    return (
        <>
        <Box 
            maxW={"container.2xl"}
            h="100vh"
            backgroundImage={AttendanceBG}
            bgAttachment={'fixed'}
            bgSize="cover"
            bgPosition="center"
            bgRepeat="no-repeat"
        >
            <Flex justify="center" bgColor={'rgba(72, 60, 50, 0.2)'}>
                <Stack 
                    mt="6rem"
                    mb="6rem"
                    p="2rem"
                    justify="center" 
                    align="center"
                >
                    <Heading 
                        as="h1"
                        textColor={"#FAF9F6"}
                        fontSize={{ base: "30px", md: "35x" , lg: "40px" }}
                    >
                        Rsvp
                    </Heading>
                    <Text 
                        textColor={"#F9F6EE"}
                        fontSize={{ base: "18px", md: "20px" , lg: "25px" }}
                        
                    >
                        Mohon untuk dapat mengisi formulir dibawah ini.</Text>
                    
                    <Grid
                      templateColumns='repeat(3, 1fr)'
                      gap={4}
                      mt={'20px'}
                    >
                        <GridItem colSpan={{ base: 3, md: 2 , lg: 2 }}>
                            <Input 
                                bgColor={'rgba(250, 249, 246, 0.7)'} 
                                focusBorderColor='#483C32'
                                placeholder='Name' 
                                _placeholder={{ color: '#483C32' }}
                            />
                        </GridItem>
                        <GridItem colSpan={{ base: 3, md: 1 , lg: 1 }}>
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
                        <GridItem colSpan={{ base: 3, md: 2 , lg: 2 }}>
                            <Flex bgColor={'rgba(250, 249, 246, 0.6)'} justify={'center'}>
                                <RadioGroup defaultValue='No'>
                                  <Stack spacing={5} direction='row'>
                                  <Radio 
                                        value='Yes' 
                                        my='0.5rem'
                                        borderWidth='1px'
                                        borderRadius='md'
                                        _checked={{
                                            bg: '#C19A6B',
                                            color: '#F9F6EE',
                                            borderColor: '#F9F6EE',
                                        }}
                                    >
                                      Hadir (Yes)
                                    </Radio>
                                    <Radio 
                                        value='No' 
                                        my='0.5rem'
                                        borderWidth='1px'
                                        borderRadius='md'
                                        _checked={{
                                            bg: '#483C32',
                                            color: '#483C32',
                                            borderColor: '#F9F6EE',
                                        }}
                                    >
                                      Tidak Hadir (No)
                                    </Radio>
                                  </Stack>
                                </RadioGroup>
                            </Flex>
                        </GridItem>

                        <GridItem colSpan={{ base: 3, md: 1 , lg: 1 }}>
                            <Box minW="250px">
                                <Select 
                                    width='100%'
                                    bgColor={'rgba(250, 249, 246, 0.7)'}  
                                    focusBorderColor='#483C32'
                                    placeholder='Jumlah Tamu (pax)'
                                    _placeholder={{ color: '#483C32' }}
                                    >
                                  <option value='option1'>1</option>
                                  <option value='option2'>2</option>
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
                    <Button bgColor={"#F9F6EE"} variant='solid' alignItems='center' width='60%'>
                        Submit / Kirim
                    </Button>
                </Stack>
            </Flex>
        </Box>
        </>
    );

}

export default Attendance;