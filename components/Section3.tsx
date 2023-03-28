import React from 'react'
import { Box, Button, Container, Flex, Heading,Stack,Text, VStack } from '@chakra-ui/react'
import Image from "next/image";
import illu3 from "../public/illustration3.png"

export default function Section3() {
  return (
    <Box as={'section'} maxW={"8xl"} minH={'100vh'}  pt={"20px"}>
        <Flex justify="space-between" mt={{base:'10', lg:'100'}} direction={{ base: 'column', md: 'row' }}>
            <Box ml={"130"} w={"574"}pr={"10px"} mt={{base: '100', lg:'5'}}>   
            <Heading fontSize={{ base: 'xl', md: 'xl', lg: '2xl' }} color={'#5CB5FF'}>Get paid</Heading>
            <Heading mt={"15px"} mb={"30px"} 
            fontSize={{ base: '2xl', md: 'xl', lg: '5xl' }}
            color={'#082854'}
            >Your Paycheck will be automatically Deposited up to two days early</Heading>
            <Text fontSize={{ base: 'md', md: 'sm', lg: 'lg' }}>Build your financial literacy within a transparent community. Follow other investors, 
                share insights with people from different professional backgrounds, 
                and never be alone with your charts & numbers.</Text>
                <Button bg={'#00D0D0'} borderRadius={'30'} color={'#FFFFFF'} my={"30px"}> Get Started</Button>
            </Box>
            <Box mr={"140"}>
                <Image 
                src={illu3}
                alt="Illustration 3" 
                width={800}
                height={600}></Image>
            </Box>
        </Flex>
       

    </Box>
  )
}
