import { Box, Button, Flex, Heading, HStack, Text,Icon,createIcon  } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import mockup from "../public/21.png";
import slack from "../public/slack.png"
import microsoft from "../public/microsoft.png"
import apple from "../public/apple.png"
import forbes from "../public/Forbes.png"


export default function Hero() {
  return (
    <>
      <Box bg={"#00D0D0"} maxW={"8xl"} minH={'100vh'} > 
        <Box >
          <Flex direction={{ base: 'column', md: 'row' }} ml={"9.8%"} >
            <Box  color={"#FFFFFF"} textAlign={{base: 'center', lg:'left'}} mt={'34'} w={{base:'sm' ,lg:'2xl'}}>
              <Heading fontSize={{ base: '3xl', md: '4xl', lg: '6xl' }} fontWeight={"700"}>
                Payments Infrastructure for the internet{" "}
              </Heading>
              <Text mt={"25"} mb={"10"} fontSize={{ base: 'md', md: 'sm', lg: 'lg' }}>
                Millions of companies of all sizes—from startups to Fortune
                 500s—use Stripe’s software and APIs to accept payments,
                send
                payouts, & manage their businesses online.
              </Text>
              <HStack>
              <Button bg={'#FFFFFF'} borderRadius={'30'} color={"rgba(16, 12, 46, 0.9)"} mr={"10"}>
                Download
              </Button>
              <Button bg={"#00D0D0"} borderRadius='full' leftIcon={<PlayIcon h={4} w={4} color={'gray.300'} />} >Watch our video</Button>
              </HStack>
            </Box>
            <Box mr={{base: '10', lg: '120'}} mt={{base:'20',lg:'50'}} 
            ml={{base:'20',lg:'60'}}
             mb={{base: '28'}}>
              <Image src={mockup} alt="Mobile Image" width={300} height={250} />
            </Box>
          </Flex>
        </Box>

        <Box w={{base:'400px', lg: "800px"}} h={{base:'80px', lg: "110px"}} bg='white' ml={{base:'65px', lg: "280px"}} position={"absolute"} zIndex={"1"}
        top={{base:'1120', lg: '670'}} 
        boxShadow={"0px 48px 60px rgba(108, 145, 181, 0.09)"}>
            <Flex justifyContent={'center'} justify="space-between" mt={"20px"}>
              <Box mr={'40px'} mt={'10px'} ml={{base: '12px'}}>
              <Image src={slack} alt="Slack" width={120} height={60} />
              </Box>
               
               <Box mr={'40px'}  mt={'10px'}>
               <Image src={microsoft} alt="Slack" width={140} height={60}/>
                </Box>

                <Box mr={'40px'}>
                <Image src={apple} alt="Slack" width={120} height={60}/>
              </Box>

              <Box mr={{base:'12px', lg:'40px'}}>
              <Image src={forbes} alt="Slack" width={120} height={60}/>
              </Box>
               

                
            </Flex>
        </Box>
      </Box>
    </>
  );
}

const PlayIcon = createIcon({
  displayName: 'PlayIcon',
  viewBox: '0 0 58 58',
  d:
    'M28.9999 0.562988C13.3196 0.562988 0.562378 13.3202 0.562378 29.0005C0.562378 44.6808 13.3196 57.438 28.9999 57.438C44.6801 57.438 57.4374 44.6808 57.4374 29.0005C57.4374 13.3202 44.6801 0.562988 28.9999 0.562988ZM39.2223 30.272L23.5749 39.7247C23.3506 39.8591 23.0946 39.9314 22.8332 39.9342C22.5717 39.9369 22.3142 39.8701 22.0871 39.7406C21.86 39.611 21.6715 39.4234 21.5408 39.1969C21.4102 38.9705 21.3421 38.7133 21.3436 38.4519V19.5491C21.3421 19.2877 21.4102 19.0305 21.5408 18.8041C21.6715 18.5776 21.86 18.3899 22.0871 18.2604C22.3142 18.1308 22.5717 18.064 22.8332 18.0668C23.0946 18.0696 23.3506 18.1419 23.5749 18.2763L39.2223 27.729C39.4404 27.8619 39.6207 28.0486 39.7458 28.2713C39.8709 28.494 39.9366 28.7451 39.9366 29.0005C39.9366 29.2559 39.8709 29.507 39.7458 29.7297C39.6207 29.9523 39.4404 30.1391 39.2223 30.272Z',
});
