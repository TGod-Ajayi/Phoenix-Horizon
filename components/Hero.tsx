import { Box, Button, Flex, Heading, HStack, Text,Icon  } from "@chakra-ui/react";
import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import mockup from "../public/21.png";
import {BsSlack, BsMicrosoft, } from 'react-icons/bs'


export default function Hero() {
  return (
    <>
      <Box bg={"#00D0D0"} w={"1350px"} h={"806px"}>
        <Navbar />
        <Box>
          <Flex mt={100}>
            <Box ml={"130"} color={"#FFFFFF"}>
              <Heading fontSize={"64px"} fontWeight={"700"} w={"574"}>
                Payments <br /> Infrastructure for the internet{" "}
              </Heading>
              <Text mt={"25"} mb={"10"}>
                Millions of companies of all sizes—from startups to Fortune
                <br /> 500s—use Stripe’s software and APIs to accept payments,
                send
                <br /> payouts, & manage their businesses online.
              </Text>
              <Button color={"rgba(16, 12, 46, 0.9)"} mr={"10"}>
                Download
              </Button>
              <Button color={"rgba(16, 12, 46, 0.9)"}>Watch our video</Button>
            </Box>
            <Box mr={"140"}>
              <Image src={mockup} alt="Mobile Image" width={300} height={250} />
            </Box>
          </Flex>
        </Box>

        <Box w={"800px"} h={"110px"} mt={"50px"} bg='white' ml={"280px"} position={"absolute"} zIndex={"1"}
        boxShadow={"0px 48px 60px rgba(108, 145, 181, 0.09)"}>
            <HStack spacing= "10">
                <Box mt={"20px"} ml={"30px"}>
                    <HStack>
                    <Icon as={BsSlack}/>
                    <Text>Slack</Text>
                    </HStack>
                
                </Box>
                <Box mt={"60px"}>
                    <HStack>
                    <Icon as={BsMicrosoft}/>
                    <Text>Microsoft</Text>
                    </HStack>
                
                </Box>
                <Box mt={"50px"}>
                    <HStack>
                    <Icon as={BsSlack}/>
                    <Text>Slack</Text>
                    </HStack>
                
                </Box>
                <Box mt={"80px"}>
                    <HStack>
                    <Icon as={BsSlack}/>
                    <Text>Slack</Text>
                    </HStack>
                
                </Box>
                
            </HStack>
        </Box>
      </Box>
    </>
  );
}
