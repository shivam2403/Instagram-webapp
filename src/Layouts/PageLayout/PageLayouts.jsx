import { Box, Flex, Spinner } from "@chakra-ui/react";
import React from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase";
import Navbar from "../../components/Navbar/Navbar";

const PageLayouts = ({ children }) => {
  const { pathname } = useLocation();
  const [user,loading,error]=useAuthState(auth);
  const canRenderSidebar=(pathname!=='/auth' && user);
  const canRenderNavbar=!user && !loading && pathname!=='/auth';

  const checkingUserIsAuth=!user && loading;
  if(checkingUserIsAuth)return <PageLayoutSpinner/>

  return (
    <Flex flexDir={canRenderNavbar ? 'column' : 'row'}>
      {/* Sidebar on the left */}
      {canRenderSidebar ? (
        <Box w={{base:"70px", md:"240px"}}>
          <Sidebar />
        </Box>
      ) : null}

      {/* Navbar */}
      {canRenderNavbar ? 
        <Navbar/> : null
      }

      {/* Page content on the right */}
      <Box flex={1} w={{base:'calc(100% - 70px)', md:'calc(100%-240px)'}} mx={'auto'}>{children}</Box>
    </Flex>
  );
};

export default PageLayouts;


const PageLayoutSpinner=()=>{
  return(
    <Flex justifyContent={'center'} alignItems={'center'} h={'100vh'} flexDir={'column'}>
      <Spinner size={'xl'}/>
    </Flex>
  )
}