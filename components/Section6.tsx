import React from 'react'
import { Box, Button, Container, Flex, Heading,Stack,Text, VStack } from '@chakra-ui/react'
import Image from "next/image";
import illu6 from "../public/Illustration6.png"


export default function Section6() {
  return (
    <Box>
        <Flex justify="space-between">
            <Box ml={"130"}>
                <Image
                src={illu6}
                alt={"Illustration 6"}
                width={600}
                height={900}
                />
            </Box>
            <Box mt={"200px"}>
                <Heading my={"20px"}>Get Tyro  App on Google Play or App Store</Heading>
                <Text>Build your financial literacy within a transparent community. Follow other investors, share insights with people.</Text>
                
            </Box>
        </Flex>
    </Box>
  )
}
