import React, { useEffect, useState } from 'react'
import useShowToast from './useShowToast';
import useAuthStore from '../store/authStore';
import { collection, getDocs, limit, orderBy, query, where } from 'firebase/firestore';
import { firestore } from '../firebase/firebase';

const useGetSuggestedUsers = () => {
    const [isLoading,setIsLoading]=useState(false);
    const [suggestedUsers,setSuggestedUsers]=useState([]);
    const showToast=useShowToast();
    const authUser=useAuthStore(state=>state.user);

    useEffect(()=>{
        const getSuggestedUsers=async()=>{
            try {
                const usersRef=collection(firestore,'users')
                const q=query(usersRef,where('uid','not-in',[authUser.uid, ...authUser.following]),orderBy('uid'),limit(3));

                const querySanpshot=await getDocs(q);
                const users=[];

                querySanpshot.forEach(doc=>{
                    users.push({...doc.data(), id: doc.id});
                })

                setSuggestedUsers(users);

            } catch (error) {
                showToast('Error',error.message,'error');
            }finally{
                setIsLoading(false);
            }
        }

        if(authUser)getSuggestedUsers();
    },[authUser,showToast])

  return {isLoading,suggestedUsers};
}

export default useGetSuggestedUsers