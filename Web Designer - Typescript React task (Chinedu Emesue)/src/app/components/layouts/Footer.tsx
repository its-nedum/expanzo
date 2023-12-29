import { Box, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import logo from "../../images/logo-expanzo-black.svg"

const Footer = () => {
  return (
    <Box
      background={"#f9f9f9"}
      height={"40vh"}
    >
      <Box 
        as={Flex} 
        justifyContent={"space-around"}
        alignItems={"center"}
        color={"#000"}
        fontWeight={"bold"}
        paddingTop={["30px", "80px"]}
        fontSize={["14px", "16px"]}
        flexDirection={["column", "row"]}
      >
        <Box >
          <Image 
            src={logo} 
            alt='footer-img' 
            width={180}
          />
        </Box>
        <Box 
          as={Flex} 
          gap={10}
          mt={["50px", "0px"]}
          >
          <Text cursor={"pointer"}>CONTACTS</Text>
          <Text cursor={"pointer"}>PHONES</Text>
          <Text cursor={"pointer"}>TOP SEARCH</Text>
        </Box>
        <Box></Box>
      </Box>
    </Box>
  )
}

export default Footer