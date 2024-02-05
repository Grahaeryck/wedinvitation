import { ReactNode, useState, useMemo, useEffect } from "react";
import {
  Flex,
  Text,
  TabPanel,
  Grid,
  GridItem,
  Image,
  Link,
} from "@chakra-ui/react";

type Props = {
    id:number;
    title : string;
    receiver: string;
    accountNO: string;
    imgSource: string;
};
function GiftTabPanels({id, title, receiver, accountNO, imgSource}: Props) {    
    return (
        <TabPanel key={id}>
            <Flex  justify={'center'} align={'center'} direction={'column'}>
                <Grid
                  minH='150px'
                  templateColumns='repeat(3, 1fr)'
                  gap={4}
                >
                  <GridItem colSpan={{ base: 3, md: 1 , lg: 1 }}>
                    <Flex direction={'column'} justify={'center'} align={'center'} h={{ base: "wrap", md: "100px" , lg: "150px" }}>
                        <Image
                          w={'130px'}
                          h={{ base: "40px", md: "100px" , lg: "120px" }}
                          fit={{ base: "contain", md: "contain" , lg: "contain" }}
                          bgPosition={'center'}
                          align={'center'}
                          src={imgSource}
                          alt={title}
                        />
                    </Flex>
                  </GridItem>
                  <GridItem colSpan={{ base: 3, md: 2 , lg: 2 }}>
                    <Flex direction={'column'} justify={'center'} align={'center'} h={{ base: "wrap", md: "100px" , lg: "150px" }}>
                        <Text fontSize={{ base: "14px", md: "16px" , lg: "18px" }}  as="i" color={"#483C32"}>{title}</Text>
                        <Text fontSize={{ base: "14px", md: "16px" , lg: "18px" }}  as="i" color={"#483C32"}>{receiver}</Text>
        
                      {title === "Paypal" ? (
                        <Link href='https://www.paypal.com/paypalme/GrahaEryck' bgGradient='linear(to-l, #00457C, #0079C1)' bgClip='text' fontStyle={'bold'} isExternal>
                          {accountNO}
                        </Link>
                      ):(
                        <Text fontSize={{ base: "14px", md: "16px" , lg: "18px" }}  as="i" color={"#483C32"}>{accountNO}</Text>
                      )}
                    </Flex>
                  </GridItem>
                </Grid>
            </Flex>
        </TabPanel>
    );
}
export default GiftTabPanels;