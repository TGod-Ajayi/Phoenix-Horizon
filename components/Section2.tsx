import { Box, Container, Flex, Heading,Stack,Text, VStack } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import {GiWallet} from 'react-icons/gi'


export default function Section2() {
  return (
         <Box as={'section'} w={"1350px"} h={"500px"} pt={"100px"} bg={"red.200"}>
            <Box textAlign={'center'} mb={"50px"}>
            <Heading fontSize={"42px"}>Better Tools to Manage your Career</Heading>
            <Text fontSize={"18px"}> Our unique process gives you peace of mind</Text>
            </Box>
            <Flex justify="space-between" >
            <Stack spacing={7} direction = {['column', 'column', 'row']} textAlign= {['center', 'center', 'left']} ml={"150px"} mr={"30px"}>
                <Box  p={"20px"} h={"250px"} w={"340px"} bg={"yellow"}>
                    
                        <GiWallet />
                        <Heading my={"10px"} >wallet</Heading>
                        <Text  mb={"10px"}>Issue secure digital records of your assets. Safely govern, license, and track your IP.</Text>
                        <Link href={"#"}>Learn more</Link>
                    
                </Box>

                <Box  p={"20px"} textAlign={'left'} h={"250px"} w={"340px"} bg={"yellow"} boxShadow={'32px 49px 80px rgba(125, 149, 169, 0.12)'}>
                   
                        <GiWallet />
                        <Heading my={"10px"}>Assets</Heading>
                        <Text mb={"10px"}>Issue secure digital records of your assets. Safely govern, license, and track your IP.</Text>
                        <Link href={"#"}>Learn more</Link>
                    
                </Box>

                <Box  p={"20px"} textAlign={'left'} h={"250px"} w={"340px"} bg={"yellow"}>
                    
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
