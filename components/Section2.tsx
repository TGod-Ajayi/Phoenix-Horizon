import { Box, Container, Flex, Heading,Stack,Text, VStack } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import {GiWallet} from 'react-icons/gi'


export default function Section2() {
  return (
         <Box as={'section'} maxW={"8xl"} minH={'100vh'} pt={{base:"10px", lg: "100px"}}>
            <Box textAlign={'center'} mb={"50px"}>
            <Heading fontSize={{ base: 'xl', md: '4xl', lg: '5xl' }}>Better Tools to Manage your Career</Heading>
            <Text fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}> Our unique process gives you peace of mind</Text>
            </Box>
            <Flex justify="space-between" >
            <Stack spacing={7} direction = {['column', 'column', 'row']} textAlign= {['center', 'center', 'left']}
             ml={{base:'90px', lg: "150px"}} 
            mr={{base:'10px', lg:"30px"}}
            mb={{base: '10px'}}
            >
                <Box  p={"20px"} h={"250px"} w={"340px"}>
                    
                        <GiWallet />
                        <Heading my={"10px"} >wallet</Heading>
                        <Text  mb={"10px"}>Issue secure digital records of your assets. Safely govern, license, and track your IP.</Text>
                        <Link href={"#"}>Learn more</Link>
                    
                </Box>

                <Box  p={"20px"} textAlign={'left'} h={"250px"} w={"340px"} boxShadow={'32px 49px 80px rgba(125, 149, 169, 0.12)'}>
                   
                        <GiWallet />
                        <Heading my={"10px"}>Assets</Heading>
                        <Text mb={"10px"}>Issue secure digital records of your assets. Safely govern, license, and track your IP.</Text>
                        <Link href={"#"}>Learn more</Link>
                    
                </Box>

                <Box  p={"20px"} textAlign={'left'} h={"250px"} w={"340px"}>
                    
                        <GiWallet />
                        <Heading my={"10px"}>Campaigns</Heading>
                        <Text mb={"10px"}>Issue secure digital records of your assets. Safely govern, license, and track your IP.</Text>
                        <Link href={"#"} >Learn more</Link>
                    
                </Box>
            </Stack>
            </Flex>
        </Box>
   
  )
}
