"use client"
import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCircleUser, faPencil } from '@fortawesome/free-solid-svg-icons';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import styles from "../../styles/header.module.css";
import logo from "../../images/logo-expanzo.svg";


const Header = () => {
  const router = useRouter();
  const path = usePathname();
  
  const handleNavigation = (href: string) => router.push(href);

  return (
    <Box as={Flex}
      justifyContent={"space-between"}
      background={"#129576"}
      minHeight={"47px"}
      paddingY={"12px"}
      paddingX={"20px"}
    >
      <Box as={Flex} gap={5} alignItems={"center"}>
          <FontAwesomeIcon 
            icon={faBars} 
            width={"36px"} height={"36px"}
            color="rgb(0, 194, 157)" 
          />
          <a onClick={() => handleNavigation("/")} className={styles.nav_link}>DASHBOARD</a>
          <a onClick={() => handleNavigation("/contact")} className={styles.nav_link}>CONTACT</a>
        </Box>

        {
          // Only show this image logo if the current page is contact
          path.includes("contact") ?
            <Image src={logo} alt="header-img" width={"45"}/>
          : null
        }

        <Box as={Flex} gap={5} >
            <Box as={Flex} alignItems={"center"}>
                <FontAwesomeIcon color="rgb(0, 194, 157)" icon={faCircleUser} width={20} style={{marginRight:10}}/>
                <Link href={"#"} className={styles.auth_link}>LOGIN</Link>
            </Box>
            <Box as={Flex} alignItems={"center"}>
                <FontAwesomeIcon color="rgb(0, 194, 157)" icon={faPencil} width={20} style={{marginRight:10}}/>
                <Link href={"#"} className={styles.auth_link}>REGISTRATION</Link>
            </Box>
        </Box>
    </Box>
  )
}

export default Header