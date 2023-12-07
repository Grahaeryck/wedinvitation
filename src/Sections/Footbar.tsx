import { ReactNode, useState, useMemo, useEffect } from "react";
import {
  Box,
  Flex,
  Container,
  Text,
  Link
} from "@chakra-ui/react";

type Props = {
    screen: string | undefined;
    layoutSize: string | undefined;
  };
  

  function Footbar({ screen, layoutSize }: Props) {

    return (
        <>
        <Box>
          <Container
            maxW={"container.2xl"}
            px={["0rem", "4rem", "4rem", "0rem"]}
          >
            {/* <Flex bg="#F9F6EE" justify="center" > */}
            <Flex justify="center" align={'center'} direction={'column'} m="10px">
              <Text fontSize={'12px'} color={'#483C32'}>Sandy & Graha 2024 | #HAtiuntukberSANDar</Text>
              {/* <Text href='https://chakra-ui.com' color={'#C19A6B'}>4|12|22</Text> */}
              <Text fontSize={'12px'}>
                Designed by{' '}
                <Link href='https://www.linkedin.com/in/grahaeryck' color={'#C19A6B'} fontStyle={'bold'} isExternal>
                  24|4|61
                </Link>
                {' '}Studio
              </Text>
            </Flex>
          </Container>
        </Box>
        </>
    );
  }

  export default Footbar;