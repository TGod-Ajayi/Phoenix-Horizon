import React from 'react'
import { Box, Button, Container, Flex, Heading,Stack,Text, VStack } from '@chakra-ui/react'
import Image from "next/image";
import illu4 from "../public/illustration4.png"



export default function Section4() {
  return (
    <Box  as={'section'}  maxW={"8xl"} minH={'100vh'} pt={"20px"}>
        <Flex justify="space-between" mx={"9.8%"} direction={{ base: 'column', md: 'row' }} mb={{base:'10'}}>
            <Box mr={{base: '', lg:'20px'}} mt={'10'}>
                <Image
                src={illu4}
                alt={"Illustration 4"}
                width={900}
                height={1100} />
            </Box>
            <Box mt={50}>
                <Heading fontSize={{ base: 'xl', md: 'xl', lg: '2xl' }} color={'#5CB5FF'} my={"20px"}>Progress</Heading>

                <Heading fontSize={{ base: '2xl', md: 'xl', lg: '5xl' }} 
                color={'#082854'}>Set Challenges and track your progress</Heading>
                <Text fontSize={{ base: 'md', md: 'sm', lg: 'lg' }} mt={{base: '16', lg:'25'}}
                color={'#697883'}
                >Build your financial literacy within a transparent community. Follow other investors, 
                    share insights with people from different professional backgrounds,
                     and never be alone with your charts & numbers.</Text>
                <Text fontSize={{ base: 'md', md: 'sm', lg: 'lg' }} my={"20px"} color={'#697883'}>
                Build your financial literacy within a transparent community. 
                Follow other investors, share insights with people 
                from different professional backgrounds.
                </Text>
                <Button size={'lg'} bg={'#00D0D0'} borderRadius={'30'} color={'#FFFFFF'} my={"20px"}>Learn More</Button>
            </Box>
        </Flex>
    </Box>
  )
}
