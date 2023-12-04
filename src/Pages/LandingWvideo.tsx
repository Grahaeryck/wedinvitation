import { ReactNode, useState, useMemo, useEffect } from "react";
import {
  Box,
  Flex,
  Container,
  Text,
  Button,
  IconButton,
  Stack,
  Heading
} from "@chakra-ui/react";
import MalangDrone from '../Asset/MalangDrone.mp4'
import Malang from '../Asset/Malang.mp4';


type Props = {};
function LandingWvideo({}: Props) {    
    return (
      <>
      <Box>
        {/* <div className="videoContainer"
            >
            <video src={MalangDrone} autoPlay loop muted />
        </div> */}

        <Box 
            mt={"-0.1rem"}
            maxW={"container.2xl"}
            h='calc(101vh)'
        >
            <div className="videoContainer"
            >
                {/* <video src={MalangDrone} autoPlay loop muted /> */}
            </div>
           
        </Box>
      </Box>
      </>
    );
}
export default LandingWvideo;