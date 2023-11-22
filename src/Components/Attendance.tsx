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
} from "@chakra-ui/react";
import AttendanceBG from "../Asset/img_bg_4.jpg"

type Props = {};
function Attendance({}: Props) {

    return (
        <>
        <Box 
            maxW={"container.2xl"}
            h="wrap"
            backgroundImage={AttendanceBG}
        >
            <Flex justify="center" >
                
                <Stack 
                    mt="6rem"
                    mb="6rem"
                    justify="center" 
                    align="center"
                >
                    <Heading as="h1"  textColor={"#FAF9F6"}>Are you Attending?</Heading>
                    <Text textColor={"#F9F6EE"}>Please Fill-up the form to notify us that you're attending. Thanks.</Text>
                    <HStack mt="2rem" gap='5'>
                        <Input 
                            bgColor={"white"} 
                            opacity={'70%'} 
                            focusBorderColor='#483C32'
                            placeholder='Name' 
                            _placeholder={{ color: '#483C32' }}/>
                        <Box minW="250px">
                            <Select 
                                placeholder='Select Reception Session'
                                width='100%'
                                bgColor={"white"} 
                                opacity={'70%'} 
                                focusBorderColor='#483C32'
                                >
                              <option value='option1'>Session 1</option>
                              <option value='option2'>Session 2</option>
                            </Select>
                        </Box>
                        <Button bgColor={"#F9F6EE"} variant='solid' alignItems='center' width='100%'>
                            I'AM ATTENDING
                        </Button>
                </HStack>
                </Stack>
                
            </Flex>
        </Box>
        </>
    );

}

export default Attendance;