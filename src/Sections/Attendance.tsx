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
  useToast
} from "@chakra-ui/react";
import { 
    InfoOutlineIcon
} from '@chakra-ui/icons';
import AttendanceBG from "../Asset/DSC00481.jpg";
import {addReqComment} from '../API/WedAPI';

type Props = {lang: string;};
function Attendance({lang}: Props) {
    const toast = useToast()
    const [namaTamu, setNamaTamu] = useState("");
    const [commentInput, setCommentInput] = useState("");
    const [sesiTamu, setSesiTamu] = useState("");
    const [jumlahTamu, setJumlahTamu] = useState("");
    const [kehadiranTamu, setKehadiranTamu] = useState("No");

    const handlePostComment = (name: string, comment: string, sesi: string, jumlahTamu: string, kehadiran:string) => {
        const objParam = {
            name: name,
            comments: comment,
            sesi: sesi,
            jumlahTamu: jumlahTamu,
            kehadiran: kehadiran,
          };

          addReqComment(
            objParam.name,
            objParam.comments,
            objParam.sesi,
            objParam.jumlahTamu,
            objParam.kehadiran,
            (res: { data: any }) => {
              console.log("Results", res);
              toast({
                title: 'Comment sucessfully Added',
                description: "We've added you comment, kindly refresh this page to view your comment",
                status: 'success',
                duration: 9000,
                isClosable: true,
              })
            },
            (error: any) => {
              console.log("get posted err", error.message);
              toast({
                title: 'Oops! Something went Wrong',
                description: "Currently we are unable to add your comment, try again latter",
                status: 'error',
                duration: 9000,
                isClosable: true,
              })
            }
          );
    }

    return (
        <>
        <Box 
            maxW={"container.2xl"}
            h="100vh"
            backgroundImage={AttendanceBG}
            // bgAttachment={'fixed'}
            bgSize={'cover'}
            bgPosition="38%"
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
                        as="i"
                        textColor={"#FAF9F6"}
                        fontSize={{ base: "30px", md: "35x" , lg: "40px" }}
                    >
                        RSVP
                    </Heading>
                    <Text 
                        as={'i'}
                        textColor={"#F9F6EE"}
                        fontSize={{ base: "18px", md: "20px" , lg: "25px" }}
                    >
                        {lang == "id" ? ("Mohon untuk dapat mengisi formulir dibawah ini."):("Please fill out the form below.")}
                    </Text>
                    
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
                                onChange={(e) => setNamaTamu(e.target.value)}
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
                                    onChange={(e) => setSesiTamu(e.target.value)}
                                    >
                                  <option value='1'>Session 1</option>
                                  <option value='2'>Session 2</option>
                                </Select>
                            </Box>
                        </GridItem>
                        <GridItem colSpan={{ base: 3, md: 2 , lg: 2 }}>
                            <Flex bgColor={'rgba(250, 249, 246, 0.6)'} justify={'center'}>
                                <RadioGroup defaultValue='No' >
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
                                        onChange={(e) => setKehadiranTamu(e.target.value)}
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
                                        onChange={(e) => setKehadiranTamu(e.target.value)}
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
                                    onChange={(e) => setJumlahTamu(e.target.value)}
                                    >
                                  <option value='1'>1</option>
                                  <option value='2'>2</option>
                                </Select>
                            </Box>
                        </GridItem>

                        <GridItem colSpan={3}> 
                        <Stack>
                            <Textarea 
                                placeholder='Wishes / Ucapan atau Doa' 
                                bgColor={'rgba(250, 249, 246, 0.7)'} 
                                focusBorderColor='#483C32'
                                _placeholder={{ color: '#483C32' }}
                                onChange={(e) => setCommentInput(e.target.value)}
                            />
                                <HStack>
                                    <InfoOutlineIcon boxSize={'10px'} color="#483C32"/>
                                    <Text fontSize={'10px'} color="#483C32">
                                        {lang == "id" ? ("Harap dicatat bahwa 'Whishes' Anda akan ditampilkan di situs web ini"):("Please note that your wishes will be displayed on this website")}
                                    </Text>
                                </HStack>
                            </Stack>
                        </GridItem>

                    </Grid>
                    <Button 
                        bgColor={"#F9F6EE"} variant='solid' alignItems='center' width='60%' 
                        isDisabled={namaTamu && commentInput && sesiTamu && jumlahTamu && kehadiranTamu ? (false):(true)}
                        onClick={(e) => {
                            e.preventDefault(); 
                            handlePostComment(namaTamu, commentInput, sesiTamu, jumlahTamu, kehadiranTamu);
                        }}
                    >
                        {lang == "id" ? ("Kirim"):("Submit")}
                    </Button>
                </Stack>
            </Flex>
        </Box>
        </>
    );

}

export default Attendance;