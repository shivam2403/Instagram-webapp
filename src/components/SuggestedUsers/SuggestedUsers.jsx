import { Box, Flex, LinkBox, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import SuggestedHeader from './SuggestedHeader'
import SuggestedUser from './SuggestedUser'
import { Link } from 'react-router-dom'
import useGetSuggestedUsers from '../../hooks/useGetSuggestedUsers'

const SuggestedUsers = () => {
  const {isLoading,suggestedUsers}=useGetSuggestedUsers();

  if(isLoading)return null;

  return (
    <VStack py={8} px={6} gap={4}>
        <SuggestedHeader/>

        {suggestedUsers.length !==0 && (
        <Flex alignItems={'center'} justifyContent={'space-between'} w={'full'}>
            <Box fontSize={12} fontWeight={'bold'} color={'gray.500'}>Suggested for you</Box>
            <Box fontSize={12} fontWeight={'bold'} _hover={{color:'gray.500'}} cursor={'pointer'}>See All</Box>
        </Flex>
        )}

        {suggestedUsers.map((user)=>(
            <SuggestedUser user={user} key={user.uid}/>
        ))}

        <Flex alignItems={'center'} justifyContent={'space-between'} w={'full'} fontSize={12} color={'gray.500'} mt={5}>
            &copy; 2023 Built By {" "}
            <Link to={'/'} fontSize={14}>Shivam Pawar</Link>
        </Flex>
    </VStack>
  )
}

export default SuggestedUsers