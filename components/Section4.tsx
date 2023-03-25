import React from 'react'
import { Box, Button, Container, Flex, Heading,Stack,Text, VStack } from '@chakra-ui/react'
import Image from "next/image";
import illu4 from "../public/illustration4.png"



export default function Section4() {
  return (
    <Box  as={'section'} w={"1350px"} bg={"red.400"} h={"500px"} pt={"20px"}>
        <Flex justify="space-between" >
            <Box  ml={"130"}>
                <Image
                src={illu4}
                alt={"Illustration 4"}
                width={600}
                height={900} />
            </Box>
            <Box mt={50} pl={"60px"}>
                <Heading my={"20px"}>Progress</Heading>
                <Text>Set Challenges and track your progress</Text>
                <Text>Build your financial literacy within a transparent community. Follow other investors, 
                    share insights with people from different professional backgrounds,
                     and never be alone with your charts & numbers.</Text>
                <Text my={"20px"}>
                Build your financial literacy within a transparent community. 
                Follow other investors, share insights with people 
                from different professional backgrounds.
                </Text>
                <Button my={"20px"}>Learn More</Button>
            </Box>
        </Flex>
    </Box>
  )
}
