import {
  Box,
  Flex,
  Spacer,
  HStack,
  Image,
  Container,
} from "@chakra-ui/react";
import Logo48 from "../Asset/Logo48.png";

type Props = {
    screen: string | undefined;
    layoutSize: string | undefined;
  };
  
  const PageLinks = [
    "Dashboard",
    "New Request",
    "Existing Request",
    "Admin",
    "FAQ",
  ];

  function Navbar({ screen, layoutSize }: Props) {

    return (
        <>
        <Box>
          <Container
            maxW={"container.2xl"}
            px={["2rem", "2rem", "2rem", "2rem"]}
            position={"absolute"}
          >
            <Flex as="nav" p={{base: "6px", md: "8px" , lg: "10px"}} alignItems="center">
              <Image boxSize={{base: "25px", sm:"35", md: "45px" , lg: "50px"}} src={Logo48} alt='SG' />
              <Spacer></Spacer>

              <HStack spacing={{base: "5px", md: "15px" , lg: "25px"}}>
                <Box p="10px" color={'#483C32'}>Home</Box>
                <Box p="10px" color={'#483C32'}>Event</Box>
                <Box p="10px" color={'#483C32'}>Story</Box>
                <Box p="10px" color={'#483C32'}>Galery</Box>
              </HStack>
            </Flex>
          </Container>
        </Box>
        </>
    );
  }

  export default Navbar;