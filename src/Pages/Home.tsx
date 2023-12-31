import { useEffect } from "react";
// import {
//   Box,
//   Flex,
//   Avatar,
//   HStack,
//   IconButton,
//   Button,
//   Menu,
//   MenuButton,
//   MenuList,
//   MenuItem,
//   MenuDivider,
//   useDisclosure,
//   useColorModeValue,
//   Stack,
//   Image,
//   Container,
//   Divider,
//   Text,
//   theme,
// } from "@chakra-ui/react";
import Banner from "../Sections/Banner";
import Doa from "../Sections/Doa";
import GroomBride from "../Sections/GroomBride";
import Events from "../Sections/Events";
import Story from "../Sections/Story";
import Gallery from "../Sections/Gallery";
import Gift from "../Sections/Gift";
import Wishes from "../Sections/Wishes";
import Attendance from "../Sections/Attendance";



type Props = {
  language: string;
};
function WelcomePage({language}: Props) {

    useEffect(() => {
        document.title = "Sandy & Graha | #HAtiuntukberSANDar";
      }, []);

    return (
        <>
            <Banner lang={language}/>
            <Doa lang={language}/>
            <GroomBride lang={language}/>
            <Events lang={language}/>
            <Story lang={language}/>
            <Gallery/>
            <Gift lang={language}/>
            <Wishes lang={language}/>
            <Attendance lang={language}/>
        </>
    );

}

export default WelcomePage;



