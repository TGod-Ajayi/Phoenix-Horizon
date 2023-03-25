import React from 'react'
import { Box, Button, Container, Flex, Heading,Stack,Text, VStack } from '@chakra-ui/react'
import Image from "next/image";
import illu3 from "../public/illustration3.png"

export default function Section3() {
  return (
    <Box as={'section'} w={"1350px"} bg={"yellow.400"} h={"800px"} pt={"20px"}>
        <Flex justify="space-between" mt={100}>
            <Box ml={"130"} w={"574"} bg={"green"} pr={"10px"}>   
            <Heading >Get paid</Heading>
            <Text mt={"15px"} mb={"30px"}>Your Paycheck will be automatically Deposited up to two days early</Text>
            <Text>Build your financial literacy within a transparent community. Follow other investors, 
                share insights with people from different professional backgrounds, 
                and never be alone with your charts & numbers.</Text>
                <Button my={"30px"}> Get Started</Button>
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
