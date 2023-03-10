import { Box, Container, Flex, Text, Stack } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import login from "../public/login.png";
import research from "../public/research.png";
import travel from "../public/travel.png";

export default function RealWork() {
  return (
    <Container maxW="6x1" bg="blue.50" height={{
      base: '150%', // 0-48em
      md: '70%', // 48em-80em,
      xl: '55%', // 80em+
    }}>
      <Flex 
      justify="space-between" 
       mr={100} 
       ml={100} 
       mt={10}>
        <Stack spacing={7} 
        direction = {['column', 'column', 'row']}
        textAlign= {['center', 'center', "left"]}
        mt={'20px'}
        alignItems = {['center', 'center', "left"]}
        >
          <Box
            bg="white"
            pt={67}
            pl={30}
            pb={10}
            boxShadow="2xl"
            p="6"
            rounded="md"
          >
            <Image  src={login} alt="Login" width={70} height={59} />
            <Text pt={6}>
              <Text color={"#0e2258"} as='em'>Login First</Text>
              <p>
                Dispatched remarkably on estimating. Side in so life past.
                Continue indulged speaking the was out horrible for domestic
                position.
              </p>
            </Text>
          </Box>
          <Box 
           mb="30px"
           bg="white"
           pt={67}
           pl={30}
           pb={10}
           boxShadow="2xl"
           p="6"
           rounded="md">
            <Image src={research} alt="Login" width={70} height={82} />
            <Text pt={6}>
              <Text color="#0e2258" as='em'>Data Analysis</Text>
              <p>
                Dispatched remarkably on estimating. Side in so life past.
                Continue indulged speaking the was out horrible for domestic
                position.
              </p>
            </Text>
          </Box>
          <Box 
           mb="30px"
            bg="white"
            pt={70}
            pl={30}
            pb={10}
            boxShadow="2xl"
            p="6"
            rounded="md"
        >
            <Image src={travel} alt="Login" width={70} height={82}/>
            <Text pt={6}>
              <Text color={"#0e2258"} as='em'>Show Result</Text>
              <p>
                Dispatched remarkably on estimating. Side in so life past.
                Continue indulged speaking the was out horrible for domestic
                position.
              </p>
            </Text>
          </Box>
        </Stack>
      </Flex>
    </Container>
  );
}
