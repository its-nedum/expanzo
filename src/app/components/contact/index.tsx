"use client"
import React from 'react';
import Header from '../utils/Header';
import Footer from '../utils/Footer';
import { Box, Flex, Text } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope} from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  
  return (
    <Box
      width={"100%"}
      overflow={"hidden"}
    >
        <Header />
        <Box
          height={"53vh"}
          background={"#fff"}
          color={"#000"}
        >
          <Flex
            justifyContent={"center"}
            paddingTop={"80px"}
          >
            <Text
              fontWeight={"semibold"}
              fontSize={"14px"}
            >Contact</Text>
          </Flex>
          <Flex 
            justifyContent={"center"} 
            gap={40} 
            marginBottom={"30px"}
            fontSize={"14px"}
            >
            <Box>
              <Box as={Flex} gap={2} alignItems={"center"} mb={5}>
                  <FontAwesomeIcon 
                    icon={faLocationDot} 
                    color={"#129576"}
                    width={17}
                    />
                  <Text>Headquarters</Text>
              </Box>
              <Box>
                <Text>DHO s.r.o.</Text>
                <Text>Borivojova 878/35</Text>
                <Text>130 00 Praha 3</Text>
              </Box>
            </Box>
            <Box>
              <Box as={Flex} gap={2} alignItems={"center"} mb={5}>
                <FontAwesomeIcon 
                    icon={faEnvelope} 
                    color={"#129576"}
                    width={17}
                    />
                  <Text>Email</Text>
              </Box>
              <Box>
                <a href='mailto:info@expanzo.com'>info@expanzo.com</a>
              </Box>
            </Box>
          </Flex>
        </Box>
        <Footer />
    </Box>
  )
}

export default Contact
