import { Box, Button, Flex, Image, Input, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';
import GoogleAuth from './GoogleAuth';

const AuthForm = () => {
    const [isLogin,setIsLogin]=useState(true);
    const navigate=useNavigate();
    const [inputs,setInputs]=useState({
        email:"",
        password:"",
        confirmPassword:"",
    })

    

  return (
    <>
      <Box border={"1px solid gray"} borderRadius={4} padding={5} mt={10} w={350}>
        <VStack spacing={4}>
				<Text
            textAlign={"left"}
            cursor={"pointer"}
            fontSize={30}
            fontWeight={"bold"}
          >
            <Flex direction={"row"} alignItems={"center"} gap={"10px"}>
              <img
                style={{ height: "35px" }}
                src="https://img.icons8.com/?size=100&id=Kp6YDPLCRJIe&format=png&color=000000"
              />
              <span>
                Snap<span style={{ color: "skyblue" }}>io.</span>
              </span>
            </Flex>
          </Text>
            
            {isLogin ? <Login/> : <SignUp/>}

            {/* OR Text */}
            <Flex alignItems={"center"} justifyContent={"center"} my={1} gap={1} w={"full"}>
                <Box flex={2} h={"1px"} bg={"gray.400"}/>
                <Text mx={1} color={"white"}>OR</Text>
                <Box flex={2} h={"1px"} bg={"gray.400"}/>
            </Flex>


            <GoogleAuth prefix={isLogin ? "Log in" : "Sign up"}/>
        </VStack>
      </Box>

      <Box border={"1px solid gray"} borderRadius={4} padding={5} w={350}>
        <Flex alignItems={"center"} justifyContent={"center"}>
            <Box mx={2} fontSize={14}>
                { isLogin ? "Don't have an account?" : "Already have an account?"}
            </Box>
            <Box onClick={()=>setIsLogin(!isLogin)} color={"blue.500"} cursor={"pointer"}>
                {isLogin ? "Sign up" : "Log in"}
            </Box>
        </Flex>
        
      </Box> 
    </>
  )
}

export default AuthForm