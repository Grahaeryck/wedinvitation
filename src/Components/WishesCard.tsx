import { ReactNode, useState, useMemo, useEffect } from "react";
import {
  Box,
  Flex,
  Container,
  Text,
  Button,
  IconButton,
  Stack,
  Heading,
  Card,
  CardHeader,
  CardBody
} from "@chakra-ui/react";

type Props = {
  name : string;
  timeposted: string;
  comments: string;
};
function WishesCard({name,timeposted, comments }: Props) {    
    return (
      <>
        <Flex 
            justify="center" 
            align="center"
            h={'inherit'}
            mt={'5px'}
        >
            <Card 
                key={""} 
                variant={'elevated'}
                width={{ base: "300px", md: "400px" , lg: "800px" }}
            >
              <CardBody>
                <Heading color={'#483C32'} size='md'>{name}</Heading>
                <Text fontSize={{ base: "10px", md: "12px" , lg: "12px" }} color={'rgba(128, 139, 150, 0.7)'}>{timeposted}</Text>
                <Text>{comments}</Text>
              </CardBody>
            </Card>
        </Flex>
      </>
    );
}
export default WishesCard;