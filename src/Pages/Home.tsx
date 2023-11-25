import { ReactNode, useState, useMemo, useEffect } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
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
  Text,
  theme,
} from "@chakra-ui/react";
import Footbar from "../Sections/Footbar";
//import { FaBackward, FaUserCircle } from "react-icons/fa";
//import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link, NavLink, useLocation } from "react-router-dom";
import Banner from "../Sections/Banner";
import Doa from "../Sections/Doa";
import GroomBride from "../Sections/GroomBride";
import Events from "../Sections/Events";
import Attendance from "../Sections/Attendance";



type Props = {};
function WelcomePage({}: Props) {

    useEffect(() => {
        document.title = "Sandy & Graha | #HAtiuntukberSANDar";
      }, []);

    return (
        <>
            <Banner/>
            <Doa/>
            <GroomBride/>
            <Events/>
            <Attendance/>
        </>
    );

}

export default WelcomePage;



