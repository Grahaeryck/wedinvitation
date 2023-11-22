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
import Footbar from "../Components/Footbar";
//import { FaBackward, FaUserCircle } from "react-icons/fa";
//import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link, NavLink, useLocation } from "react-router-dom";
import Attendance from "../Components/Attendance"

type Props = {};
function WelcomePage({}: Props) {

    useEffect(() => {
        document.title = "Wedding of Sandy & Graha";
      }, []);

    return (
        <>
        <Attendance></Attendance>
        </>
    );

}

export default WelcomePage;



