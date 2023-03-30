import React from 'react'
import { Box, Button, Container, Flex, Heading,Stack,Text, VStack } from '@chakra-ui/react'
import Image from "next/image";
import appleStore from "../public/apple-store.jpg"
import googlePlay from "../public/google-play.png"
import illu6 from "../public/Illustration6.png"


export default function Section6() {
  return (
    <Box as={'section'} maxW={"8xl"} minH={'100vh'} mb={{base:'160px'}}>
      
      <Box bg={' rgba(0, 208, 208, 0.06);'}>
      <Flex justify="space-between" ml={"9.8%"} position={'absolute'} zIndex={'1'} direction={{ base: 'column', md: 'row' }}>
            <Box>
                <Image
                src={illu6}
                alt={"Illustration 6"}
                width={500}
                height={800}
                />
            </Box>
            <Box mt={{base:'20px',lg:"200px"}} ml={{base: '20px', lg: '100px'}} mr={'9.8%'}>
                <Heading my={"20px"}  fontSize={{ base: '2xl', md: 'xl', lg: '4xl' }} 
                color={'#082854'} >Get Tyro  App on Google 
                <br /> Play or App Store</Heading>
                <Text color={'#697883'} fontSize={{ base: 'md', md: 'sm', lg: 'lg' }} >Build your financial literacy within a transparent community. Follow other investors, share insights with people.</Text>
                <Stack
                mt={10}
                spacing={{ base: 4, sm: 6 }}
                direction={{ base: 'column', sm: 'row' }}>
                  <Image src={appleStore}
                  alt='Apple Store'
                  width={120}
                  height={150}
                  />
                  <Image src={googlePlay}
                  alt='Google Store'
                  width={100}
                  height={100}
                  />
                </Stack>
            </Box>

        </Flex>
      </Box>
        

    </Box>
  )
}
