"use client"
import supabase from '@/supabase'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

type Props = {
  children: React.ReactNode
}

const AuthRoute = ({children}: Props) => {
  const router = useRouter()
  
  const [mounted, setMounted] = useState<boolean>(false)
  
  useEffect(() => {
    (async () => {
     
      const { data: { session }, error } = await supabase.auth.getSession()
      
      if (!session) {
        router.push("/")
      }else{
        setMounted(true)
      }

    })()
  }, [])
  
  return (
    <>
      {
        mounted &&
        children
      }
    </>
  )
}

export default AuthRoute