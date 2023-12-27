"use client"
import React, {useState} from 'react'
import { 
    Tabs, 
    TabList, 
    TabPanels, 
    Tab, 
    TabPanel,
    TabIndicator,
    Text
} from '@chakra-ui/react'
import { MenuList } from "../utils/data";

const MenuTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const handleMenuChange = (MenuId: number) => setActiveTab(MenuId)

  return (
    <Tabs 
      position="relative" 
      variant="unstyled"
      style={{marginTop:"50px"}}
      >
    <TabList>
      {
        MenuList.map((menu) => (
          <Tab 
            key={menu.id} 
            fontSize={"18px"} 
            fontWeight={"semibold"}
            color={activeTab === menu.id ? "#129576" : "#000"}
            onClick={() => handleMenuChange(menu.id)}
            >{menu.name}</Tab>
        ))
      }
    </TabList>
    <TabIndicator
      marginTop="-1.5px"
      height="2px"
      background="#129576"
      borderRadius="1px"
    />
    <TabPanels>
      {
        MenuList.map((menu) => (
          <TabPanel key={menu.id}>
            <Text>{menu.name} tab</Text>
          </TabPanel>
        ))
      }
    </TabPanels>
  </Tabs>
  )
}

export default MenuTabs