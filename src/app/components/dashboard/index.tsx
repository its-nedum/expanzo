import React from 'react';
import Header from '../utils/Header';
import Footer from '../utils/Footer';
import { Box, Flex } from '@chakra-ui/react';
import MenuTabs from './MenuTabs';
import logo from "../../images/logo-expanzo-black.svg";
import Image from 'next/image';

const Dashboard = () => {
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
          <Box>
            <Flex justifyContent={"center"}>
              <Image 
                src={logo} 
                alt={"expanzo"} 
                width={170} 
                style={{marginTop:"30px"}}
              />
            </Flex>
            <Flex justifyContent={"center"}>
              <MenuTabs />
            </Flex>
          </Box>
        </Box>
        <Footer />
    </Box>
  )
}

export default Dashboard