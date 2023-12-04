import { ReactNode, useState, useMemo, useEffect } from "react";
//import useSound from 'use-sound';
//import {Sound} from "react-sound";
import {
  Box,
  Flex,
  Container,
  Text,
  Button,
  IconButton
} from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeHigh,faVolumeXmark } from '@fortawesome/free-solid-svg-icons';
import Soundtrack from "../Asset/Backsound.mp3";



let song = new Audio(Soundtrack);
song.loop = true;

function play(){
    song.play();
    song.loop = true;
}

function pause(){
    song.pause();
}


type Props = {};
function BackgroundMusic({}: Props) {    
    const [playing, setPlaying ] = useState("paused");

    useEffect(()=>{
        if(playing=='playing')
        {
            song.play();
        }
        else
            song.pause();

    },[playing]);

    function onClickHandler()
    {
        if(playing=='paused')
            setPlaying("playing")
        
        else
            setPlaying("paused")
    }

    return (
      <>
      <Box>
        <IconButton
          isRound={true}
          size={'lg'}
          variant='solid'
          bg={'rgba(193, 154, 107, 0.3)'}
          aria-label='Done'
          fontSize='20px'
          border={'2px solid'}
          borderColor={'#FAF9F6'}
          bottom={'3rem'}
          right={'1rem'}
          zIndex={'1'}
          position={'fixed'}
          opacity={'100%'}
          onClick={()=> (onClickHandler())}
          _hover={{bg:'rgba(193, 154, 107, 0.3)'}}
          icon={playing == "paused" ? 
                <FontAwesomeIcon icon={faVolumeXmark} style={{color: "#483C32"}}/>
                : 
                <FontAwesomeIcon icon={faVolumeHigh} style={{color: "#483C32"}}/>}
        />
      </Box>
      </>
    );
}
export default BackgroundMusic;