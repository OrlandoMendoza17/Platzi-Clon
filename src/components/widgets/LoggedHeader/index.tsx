"use client"
import { useEffect, useState } from 'react'
import supabase from '@/supabase'
import LandingHeader from '@/components/(Home)/LandingHeader'
import { Session } from '@supabase/supabase-js'
import HomeHeader from '../HomeHeader'

type Props = {
  children: React.ReactNode
}

const LoggedHeader = ({ children }: Props) => {
  
  const [mounted, setMounted] = useState<boolean>(false)
  const [session, setSession] = useState<Session | null>(null)
  
  useEffect(() => {
    (async () => {
      
      const { data: { session }, error } = await supabase.auth.getSession()
      console.log('session', session)
      
      if(session){
        setSession(session)
      }

      setMounted(true)

    })()
  }, [])
  
  return (
    mounted &&
    <>
      {
        session ?
        <HomeHeader>
          {children}
        </HomeHeader>
        :
        <>
          <LandingHeader/>
          {children}
        </>
      }
    </>
  )
}

export default LoggedHeader