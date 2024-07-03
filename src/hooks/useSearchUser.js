import React, { useState } from 'react'
import useShowToast from './useShowToast';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { firestore } from '../firebase/firebase';

const useSearchUser = () => {
  const [isLoading,setIsLoading]=useState();
  const [user,setUser]=useState(null);
  const showToast = useShowToast();

  const getUserProfile=async(username)=>{
    setIsLoading(true);
    setUser(null);
    
    try {
      const q=query(collection(firestore,'users'),where("username","==",username));      
      const querySanpshot=await getDocs(q);

      if(querySanpshot.empty)return showToast('Error',"User not found","error");

      querySanpshot.forEach((doc)=>{
        setUser(doc.data())
      })
    } catch (error) {
      showToast('Error',error.message,'error');
    }finally{
      setIsLoading(false);
    }
  }

  return {user,isLoading,getUserProfile,setUser};
}

export default useSearchUser