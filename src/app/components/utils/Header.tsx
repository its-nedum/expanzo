"use client"
import React from 'react';
import { 
  Box, 
  Flex, 
  Avatar, 
  Hide, 
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faPencil, faUser } from '@fortawesome/free-solid-svg-icons';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import styles from "../../styles/header.module.css";
import logo from "../../images/logo-expanzo.svg";
import { NavMenus } from "./data"


const Header = () => {
  const router = useRouter();
  const path = usePathname();
  
  const handleNavigation = (href: string) => router.push(href);
  
  return (
    <Box as={Flex}
      justifyContent={"space-between"}
      background={"#129576"}
      minHeight={"47px"}
      paddingY={"10px"}
      paddingX={"20px"}
    >
      <Box as={Flex} gap={5} alignItems={"center"}>
          <Hide below='md'>
            <FontAwesomeIcon 
              icon={faBars} 
              width={"25px"} 
              height={"25px"}
              color="rgb(0, 194, 157)" 
              fontSize={"25px"}
            />
            {
              NavMenus.map((menu) => (
                <a key={menu.id} onClick={() => handleNavigation(menu.href)} className={styles.nav_link}>{menu.name}</a>
              ))
            }
          </Hide>

          <Hide above='md'> 
            <Popover>
              <PopoverTrigger>
                <FontAwesomeIcon 
                  icon={faBars} 
                  width={"25px"} 
                  height={"25px"}
                  color="rgb(0, 194, 157)" 
                  fontSize={"25px"}
                />
              </PopoverTrigger>
              <PopoverContent p={2} w={"170px"} background={"#fff"}>
                  <a onClick={() => handleNavigation("/")} className={styles.nav_link_mobile}>DASHBOARD</a>
                  <a onClick={() => handleNavigation("/contact")} className={styles.nav_link_mobile}>CONTACT</a>
              </PopoverContent>
            </Popover>
          </Hide>
        </Box>

        {
          // Only show this image logo if the current page is contact
          path.includes("contact") ?
            <Image src={logo} alt="header-img" width={50}/>
          : null
        }

        <Box as={Flex} gap={5}>
            <Box as={Flex} alignItems={"center"}>
                <Avatar 
                  background={"rgb(0, 194, 157)"} 
                  size={"xs"} 
                  style={{marginRight:6}} 
                  icon={<FontAwesomeIcon icon={faUser} width={10}/>}
                />
                <Hide below='md'>
                  <Link href={"#login"} className={styles.auth_link}>LOGIN</Link>
                </Hide>
            </Box>
            <Box as={Flex} alignItems={"center"}>
            <Avatar
              background={"rgb(0, 194, 157)"} 
              size={"xs"} 
              style={{marginRight:6}} 
              icon={<FontAwesomeIcon icon={faPencil} width={10}/>}
            />
            <Hide below='md'>
              <Link href={"#registration"} className={styles.auth_link}>REGISTRATION</Link>
            </Hide>
            </Box>
        </Box>
    </Box>
  )
}

export default Header