import { Box, Container, Image } from '@chakra-ui/react'
import React from 'react'
import PostHeader from './PostHeader'
import PostFooter from './PostFooter'
import useGetUserProfileById from '../../hooks/useGetUserProfileById'

const FeedPost = ({post}) => {
  const {userProfile} = useGetUserProfileById(post.createdBy);

  return (
    <Box mb={10}>
      <PostHeader post={post} creatorProfile={userProfile}/>
      <Box my={2} borderRadius={4} overflow={'hidden'}>
        <Image src={post.imageURL} alt='FEED POST IMAGE'/>
      </Box>
      <PostFooter post={post} creatorProfile={userProfile}/>
    </Box>
  )
}

export default FeedPost