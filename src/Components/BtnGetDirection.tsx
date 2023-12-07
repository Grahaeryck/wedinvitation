// import { ReactNode, useState, useMemo, useEffect } from "react";
import {
  Box,
  Button,
  Link
} from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRoute} from '@fortawesome/free-solid-svg-icons';

type Props = {
    children:any
  };
  

  function BtnGetDirection({children}: Props) {

    return (
        <>
        <Box height='wrap' width={'wrap'} mt={'30px'}>
            <Link 
                href='https://bit.ly/SG-Maps' 
                isExternal
            >
                <Button
                  size='md'
                  height='48px'
                  width='180px'
                  border='2px'
                  color='#C19A6B'
                  bgColor='#F9F6EE'
                  borderColor='#C19A6B'
                  borderRadius='20px'
                  _hover={{ bgColor:'#483C32'}}
                  leftIcon={<FontAwesomeIcon icon={faRoute} size="lg" style={{color: "#C19A6B",}}/>}
                >
                    {children}
                </Button>
            </Link>
        </Box>
        </>
    );
  }

  export default BtnGetDirection;