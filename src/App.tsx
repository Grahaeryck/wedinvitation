import React from 'react';
import {
  Box,
  Container,
  useBreakpointValue
} from "@chakra-ui/react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Navbar from "./Sections/Navbar";
import Footbar from "./Sections/Footbar";
import Home from "./Pages/Home";
//import LandingWvideo from "./Pages/LandingWvideo";
import LandingWimg from "./Pages/LandingWimg";
import NewLanding from './Pages/NewLanding';
import GallerySwipper from './Sections/GallerySwipper';

export const App = () => (
  <>
    <Router>
      <Frame>
        <Routes>
          <Route path="/" element={<Navigate replace to={"/cover"} />} />
          <Route path="/Cover" element={<NewLanding />} />
          {/* <Route path="/intro" element={<LandingWvideo />} /> */}
          <Route path="/Home" element={<Home language={'id'}/>} />
          <Route path="/id/Home" element={<Home language={'id'}/>} />
          <Route path="/eng/Home" element={<Home language={'eng'}/>} />
          <Route path="/Galery" element={<GallerySwipper/>} />
          <Route path="*" element={<Home language={'id'}/>} />
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
      "2xl": "0rem",
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
          mb={["0rem", "0rem", "0rem", "0rem"]}
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
