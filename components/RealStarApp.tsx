import { Box, Button, ButtonGroup, Text, Flex  } from "@chakra-ui/react";
import {DownloadIcon} from "@chakra-ui/icons";
import React from "react";
import { AiFillAndroid, AiFillApple } from "react-icons/ai";

import Image from "next/image";
import img3 from "../public/3.svg";

export default function RealStarApp() {
  return (
    <>
      <Box
        position={'relative'}
        zIndex={1}
        as="section"
        bg="blue.50"
        w="100%"
        height={{
          base: '220%', // 0-48em
          md: '150%', // 48em-80em,
          xl: '115%', // 80em+
        }}
        p={4}
        color="white"
        _after={{
          transform: "skewY(-10deg)",
          bgColor:"#0e2258",
          zIndex: "-1",
          h:'50%',
          w: "100%",
          bottom: "-20%"
        }

        }
        
        
        textAlign={"center"}
      >
        <Text fontSize='20px' color= "#0e2258" >
          App Made <br /> For iOS &amp; Android
        </Text>

        <Flex
            direction = {['column', 'column', 'row']}
           
            alignItems={['left','left','center']} 
            border='3px' 
            borderColor='gray.500'
            w={{
              base: '200%', // 0-48em
              md: '150%', // 48em-80em,
              xl: '100%', // 80em+
            }}
           >
        
          <Box position={'relative'} zIndex={1}  ml={['66','66','250']}>
              <Image  src={img3} alt="illustration111" />
                <Box
                backgroundColor={'#a4c639'}
                w={100}
                h={100}
                borderRadius={20}
                fontSize={50}
                position="absolute"
                top="8rem"
                
                >
                  <Box pt={5} pl={6}>
                  <AiFillAndroid fa-3x/>
                  </Box>
                  
                  <Box position="absolute"
                     top="23.2rem"
                    left="4rem">
                    <Button leftIcon={<DownloadIcon />} colorScheme='linkedin' variant='solid' size='lg'>
                    DOWNLOAD NOW
                    </Button>
                    </Box>

                </Box>

          </Box>
          <Box position={'relative'} zIndex={1} ml={['66','66','100']}>
            
                  <Image src={img3} alt="illustration111" />
                  <Box
                  backgroundColor={'#a4c639'}
                  w={100}
                  h={100}
                  borderRadius={20}
                  fontSize={50}
                  position="absolute"
                  top="8rem"
                  left="16rem"
                  >
                    <Box pt={6} pl={6}>
                    <AiFillApple fa-3x/>
                    </Box>

                    <Box position="absolute"
                     top="23.2rem"
                    right="4rem">
                    <Button leftIcon={<DownloadIcon />} colorScheme='linkedin' variant='solid' size='lg'>
                    DOWNLOAD NOW
                    </Button>
                    </Box>
                </Box>
               
            </Box>
        </Flex>
      </Box>
    </>
  );
}
