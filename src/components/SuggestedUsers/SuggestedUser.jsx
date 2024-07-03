import { Avatar, Box, Button, Flex, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import useFollowUser from '../../hooks/useFollowUser';
import useAuthStore from '../../store/authStore';
import { Link } from 'react-router-dom';

const SuggestedUser = ({user,setUser}) => {
    const [isFollowed,setIsFollowed]=useState(false);
    const {isFollowing,isUpdating,handleFollower}=useFollowUser(user?.uid);
    const authUser=useAuthStore(state=>state.user);

    const onFollowUser=async()=>{
        await handleFollower();
        setUser({
            ...user,
            followers: isFollowing ? user.followers.filter((follower)=>follower.uid !== authUser.uid) : [...user.followers,authUser],
        })
    }

  return (
    <Flex justifyContent={'space-between'} alignItems={'center'} w={'full'}>
        <Flex alignItems={'center'} gap={2}>
            <Link to={`/${user?.username}`}>
                <Avatar src={user?.profilePicURL} size={'md'}/>
            </Link>
            <VStack spacing={2}>
                <Box fontSize={12} fontWeight={'bold'}>
                    <Link to={`/${user?.username}`}>
                        {user?.fullName}
                    </Link>
                </Box>
                <Box fontSize={11} fontWeight={'gray.500'}>
                    {user?.followers.length} followers
                </Box>
            </VStack>
        </Flex>
        {authUser?.uid !== user?.uid && 
        (<Button fontSize={13} bg={'transparent'} p={0} h={'max-content'} fontWeight={'medium'} color={'blue.400'} cursor={'pointer'} _hover={{color:'white',bg:'transparent'}} onClick={onFollowUser} isLoading={isUpdating}>
            {isFollowing ? 'Unfollow' : 'Follow'}
        </Button>)
        }
    </Flex>
  )
}

export default SuggestedUser