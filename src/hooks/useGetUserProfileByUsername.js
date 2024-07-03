import React, { useEffect, useState } from 'react'
import useShowToast from './useShowToast';
import useUserProfileStore from '../store/userProfileStore';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { firestore } from '../firebase/firebase';

const useGetUserProfileByUsername = (username) => {
    const [isLoading,setIsLoading] = useState();
    const showToast=useShowToast();
    
    const {userProfile,setUserProfile}=useUserProfileStore();
    // or const userProfile=useUserProfileStore(state=>state.userProfile);

    useEffect(()=>{
        const getUserProfile=async()=>{
            setIsLoading(true);
            try {
                const q=query(collection(firestore,"users"),where("username","==",username));
                const querySanpshot=await getDocs(q);

                if(querySanpshot.empty)return setUserProfile(null);
                let userDoc;
                querySanpshot.forEach((doc)=>{
                    userDoc = doc.data();
                })

                setUserProfile(userDoc);
            } catch (error) {
                showToast('Error',error.message,'error');
            }finally{
                setIsLoading(false);
            }
        }

        getUserProfile();
    },[setUserProfile,username,showToast])

  return {isLoading,userProfile}
}

export default useGetUserProfileByUsername