import React from 'react'
import { Box, Button, Flex, Heading, HStack, Text,Icon, Container  } from "@chakra-ui/react";


export default function Section5() {
  return (
   
        <Box bg={"#00D0D0"} maxW={"8xl"} minH={'100vh'} textAlign={'center'}>
            <Heading  fontSize={{ base: '2xl', md: 'xl', lg: '5xl' }} 
                color={'#082854'}>Our Happy Clients</Heading>
            <Text color={'#697883'} fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}>
            Our unique process
            </Text>


            
            <Text fontSize={'14px'}>
            Build your financial literacy within a transparent community. 
            Follow other investors, share insights with people from different professional backgrounds,
             and never be alone.
            </Text>
        </Box>
 
  )
}
