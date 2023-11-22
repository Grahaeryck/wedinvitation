import React from 'react';
import {
  ChakraProvider,
  Box,
  Container,
  Flex,
  FlexProps,
  BoxProps,
  useBreakpointValue,
  useColorMode,
  IconButton,
} from "@chakra-ui/react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import logo from './logo.svg';
import Navbar from "./Components/Navbar";
import Footbar from "./Components/Footbar";
import WelcomePage from "./Pages/WelcomePage";

export const App = () => (
  <>
    <Router>
      <Frame>
        <Routes>
          <Route path="/" element={<Navigate replace to={"/Welcome"} />} />
          {/* <Route path="/" element={<Dashboard />} /> */}
          <Route path="/Welcome" element={<WelcomePage />} />
          
        </Routes>
      </Frame>
    </Router>
  </>
);

type FrameProps = {
  children: any;
};

function Frame({ children }: FrameProps) {
  const screenSize = useBreakpointValue(
    {
      base: "container.xl",
      xl: "container.xl",
      "2xl": "container.2xl ",
    },
    {
      fallback: "xl",
    }
  );
  const layoutSize = useBreakpointValue(
    {
      base: "0rem",
      xl: "0rem",
      "2xl": "8rem",
    },
    {
      fallback: "2rem",
    }
  );

  return (
    <>
      <Box bg="#F9F6EE" position="relative" overflow="hidden" display={"block"} minH="100vh">
        <Navbar screen={screenSize} layoutSize={layoutSize} />
        <Container
          maxW={screenSize}
          mb={["5rem", "5rem", "5rem", "5rem"]}
          px={["0rem", "0rem", "0rem", "0rem"]}
        >
          <Box minH={"lg"} mx={layoutSize}>
            {children}
          </Box>
        </Container>
      </Box>
      <Footbar screen={screenSize} layoutSize={layoutSize} />
    </>
  );
}

export default App;
