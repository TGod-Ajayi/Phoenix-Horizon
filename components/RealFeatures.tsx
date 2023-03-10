import { ChatIcon, LockIcon, SettingsIcon } from "@chakra-ui/icons";
import {
  Box,
  Heading,
  HStack,
  Icon,
  Stack,
  Text,
  VStack,
  Flex,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

export default function RealFeatures() {
  return (
    <Box bg="blue.900" as="section"
    w="100%"
    height={{
        base: '180%', // 0-48em
        md: '160%', // 48em-80em,
        xl: '90%', // 80em+
      }}>
        <Flex   alignItems = {['center', 'center', "left"]} direction = {['column', 'column', 'row']}>
            <Box ml={'30px'}>
                <Image
                src="/assets/img/illustration/23.png"
                alt="Laptop illustration"
                width={580}
                height={500}
                                />
            </Box>
            <Box color="white" ml={['1','1','150']} pt={25} maxW='50%'>
                <Text ml={['10','10','70']} pb={10} fontSize="lg">Powered with multiple design blocks</Text>
                <Flex  >
                    <Box mr={8}>
                        <Flex direction={"column"} >
                            <Box  position={'relative'} zIndex={1}>
                            <SettingsIcon w={'3.5rem'} h={'3.5rem'} />

                            <Box position="relative" right={'-5rem'} bottom={'4rem'}>
                            <Text  > <Text fontSize='lg' >Custom Shortcut</Text>
                             Semper a augue suscipit, luctus neque purus ipsum <br/> neque
                            dolor primis libero tempus velna culpa expedita.</Text>

                            </Box>
                           
                            </Box>
                                
                            <Box mt={'4rem'}>
                            <LockIcon  w={'3.5rem'} h={'3.5rem'} position={'relative'} top={'-4rem'}/>

                            <Box position="relative" right={'-5rem'} bottom={'8rem'}>
                            <Text  > <Text fontSize='lg' >Secure Integration</Text>
                             Semper a augue suscipit, luctus neque purus ipsum <br/> neque
                            dolor primis libero tempus velna culpa expedita.</Text>

                            </Box>

                            </Box>
                            <Box >
                            <ChatIcon w={'3.5rem'} h={'3.5rem'}  position={'relative'} top={'-4rem'} />

                            <Box position="relative" right={'-5rem'} bottom={'8rem'}>
                            <Text  > <Text fontSize='lg' >Free Live Chat</Text>
                             Semper a augue suscipit, luctus neque purus ipsum <br/> neque
                            dolor primis libero tempus velna culpa expedita.</Text>

                            </Box>

                            </Box>
                        </Flex>
                        
                    </Box>
                   

                </Flex>
            </Box>
        </Flex>
    </Box>
    );
}

{/* <Box >
<Flex direction={'column'} textAlign={'left'}  break-word>
    <Box>
    
    </Box>

    <Box mt={'1.5rem'}>
    

    </Box>

    <Box mt={'2rem'} mb={'2rem'}>
    
    </Box>
</Flex>
</Box> */}