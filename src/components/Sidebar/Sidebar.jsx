import { Avatar, Box, Button, Flex, Link, Text, Tooltip } from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  CreatePostLogo,
  InstagramLogo,
  InstagramMobileLogo,
  NotificationsLogo,
  SearchLogo,
} from "../../assets/Constants";
import { AiFillHome } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";
import SidebarItems from "./SidebarItems";

const Sidebar = () => {
  const sidebarItems = [
    {
      icon: <AiFillHome size={25} />,
      text: "Home",
      link: "/",
    },
    {
      icon: <SearchLogo />,
      text: "Search",
    },
    {
      icon: <NotificationsLogo />,
      text: "Notifications",
    },
    {
      icon: <CreatePostLogo />,
      text: "Create",
    },
    {
      icon: <Avatar size={"sm"} name="Burak Orkmez" src="/profilepic.png" />,
      text: "Profile",
      link: "/asaprogrammer",
    },
  ];

  const {handleLogout,isLoggingOut,error}=useLogout();

  return (
    <Box
      height={"100vh"}
      borderRight={"1px solid"}
      borderColor={"whiteAlpha.300"}
      py={8}
      position={"sticky"}
      top={0}
      left={0}
      px={{ base: 2, md: 4 }}
    >
      <Flex direction={"column"} gap={10} w={"full"} h={"full"}>
      <Link to={'/'} style={{textDecoration:"none"}}>
				<Text textAlign={'left'} cursor={"pointer"} fontSize={30} fontWeight={'bold'}>
          <Flex direction={"row"} alignItems={'center'} gap={"10px"}>

          <img style={{height:"35px"}} src="https://img.icons8.com/?size=100&id=Kp6YDPLCRJIe&format=png&color=000000"/>
          <span>Snap<span style={{color:'skyblue'}}>io.</span></span> 
          </Flex>
          </Text>
				</Link>
        <Link
          to={"/"}
          as={RouterLink}
          p={2}
          display={{ base: "block", md: "none" }}
          cursor={"pointer"}
          borderRadius={6}
          _hover={{ bg: "whiteAlpha.200" }}
          w={10}
        >
          <InstagramMobileLogo />
        </Link>
        <Flex direction={"column"} gap={5} cursor={"pointer"}>
          <SidebarItems/>
        </Flex>

        <Tooltip
              hasArrow
              label={"Logout"}
              placement="right"
              ml={1}
              openDelay={500}
              display={{ base: "block", md: "none" }}
            >
              <Link
                onClick={handleLogout}
                alignItems={"center"}
                _hover={{ bg: "whiteAlpha.400" }}
                borderRadius={6}
                p={2}
                w={{base:10,md:'full'}}
                mt={'auto'}
                display={'flex'}
                
              >
                <BiLogOut size={25}/>
                <Button display={{ base: "none", md: "block" }} variant={'ghost'} _hover={{bg:'transparent'}} isLoading={isLoggingOut}>Logout</Button>
              </Link>
            </Tooltip>
      </Flex>
    </Box>
  );
};

export default Sidebar;
