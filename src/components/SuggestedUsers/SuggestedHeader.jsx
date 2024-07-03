import { Avatar, Box, Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { Link, Link as RouterLink } from 'react-router-dom'
import useLogout from '../../hooks/useLogout'
import useAuthStore from '../../store/authStore'

const SuggestedHeader = () => {
  const {handleLogout,isLoggingOut}=useLogout();
  const authUser=useAuthStore(state=>state.user);

  if(!authUser)return null;

  return (
    <Flex alignItems={'center'} w={'full'} justifyContent={'space-between'}>
        <Flex alignItems={'center'} gap={2}>
          <Link to={`${authUser?.username}`}>
            <Avatar size={'lg'} src={authUser?.profilePicURL}/>
          </Link>
          <Link to={`${authUser?.username}`}>
            <Text fontSize={12} fontWeight={'bold'}>
                {authUser?.username}
            </Text>
          </Link>
        </Flex>
        <Box cursor={'pointer'}>
        <Button size={'xs'} _hover={{background:'transparent'}}  fontSize={14} color={'blue.400'} fontWeight={'medium'} isLoading={isLoggingOut} onClick={handleLogout} >
                Logout
        </Button>
        </Box>
    </Flex>
  )
}

export default SuggestedHeader