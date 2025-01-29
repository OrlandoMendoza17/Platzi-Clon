"use client"
import { MouseEventHandler, useEffect, useState } from 'react';
import styles from './UserOptions.module.scss'
import { IoLogOut } from "react-icons/io5";
import supabase from '@/supabase';
import { useRouter } from 'next/navigation';
import { createClient } from '@/supabase/client';

const Arrow = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24"><path fill="#C4C8CE" fillRule="evenodd" d="M7.47 9.47a.75.75 0 0 1 1.06 0L12 12.94l3.47-3.47a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 0 1 0-1.06" clipRule="evenodd" /></svg>
  )
}

const UserOptions = () => {

  const router = useRouter()
  const [openedSettings, setOpenedSettings] = useState<boolean>(false)

  const [user, setUser] = useState({
    name: "",
    image: "https://i.imgur.com/btkuvS5.png",
  })


  const handleLogout: MouseEventHandler<HTMLButtonElement> = async () => {
    const supabase = createClient()
    const { error } = await supabase.auth.signOut()
    router.push("/")
  }

  useEffect(() => {
    (async () => {
      const supabase = createClient()
      const { data: { user: userInfo } } = await supabase.auth.getUser()

      if (userInfo) {
        console.log('user', userInfo)
        setUser({
          ...user,
          name: userInfo.user_metadata?.full_name,
        })
      }
    })()

    document.body.addEventListener("click", ({ target, currentTarget }) => {
      
      const targetElement = target as HTMLElement
      const element = document.getElementById("userOptionsButton")
      
      if(targetElement.id !== "userOptionsButton" && element){
        const childs = Array.from(element?.childNodes)
        
        if(!childs.includes(targetElement)){
          setTimeout(()=> setOpenedSettings(false), 100)
        }
      }
    })
  }, [])


  return (
    <div className={styles.UserOptions}>
      <button
        id="userOptionsButton"
        onClick={() => setOpenedSettings(!openedSettings)}
        className={styles.UserOptions__button}
      >
        <figure>
          {/* <img src="https://static.platzi.com/media/avatars/avatars/OrlandoMendoza20_675db526-41e7-43ff-81b2-d64a486fdc7c.jpg" alt="" /> */}
          <img src={user.image} alt="" />
        </figure>
        <span>
          {user.name}
        </span>
        <Arrow />
      </button>
      {
        openedSettings &&
        <button
          onClick={handleLogout}
          className={styles.UserOptions__logoutBtn}
        >
          Cerrar Sesión
          <IoLogOut />
        </button>
      }
    </div>
  )
}

export default UserOptions