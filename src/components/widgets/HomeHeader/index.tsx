import Link from 'next/link'
import styles from './HomeHeader.module.scss'
import PlatziLogo from '@/components/icons/PlatziLogo'
import NavLink from './NavLink'
import InputSearch from '../Header/InputSearch'
import React from 'react'
import UserOptions from './UserOptions'

type Props = {
  children: React.ReactNode,
}

const HomeHeader = ({ children }: Props) => {

  const navList = [
    {
      label: "Inicio",
      link: "/home",
      Icon: <svg width="1em" height="1em" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" fillRule="evenodd" d="M10.762 3.263a1.75 1.75 0 0 1 2.475 0l6.707 6.707a2.75 2.75 0 0 1 .806 1.944V20.5a.75.75 0 0 1-.75.75h-5.5a.75.75 0 0 1-.75-.75V16a1.75 1.75 0 1 0-3.5 0v4.5a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75v-8.586c0-.73.29-1.429.806-1.944zM12 12.75A3.25 3.25 0 0 1 15.25 16v3.75h4v-7.836c0-.33-.132-.65-.366-.884l-6.707-6.707a.25.25 0 0 0-.353 0L5.116 11.03a1.25 1.25 0 0 0-.366.884v7.836h4V16A3.25 3.25 0 0 1 12 12.75" clipRule="evenodd" /></svg>,
      ActiveIcon: <svg width="1em" height="1em" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M13.237 3.263a1.75 1.75 0 0 0-2.475 0L4.056 9.97a2.75 2.75 0 0 0-.806 1.944V20.5c0 .414.336.75.75.75h5.5a.75.75 0 0 0 .75-.75V16a1.75 1.75 0 1 1 3.5 0v4.5c0 .414.336.75.75.75H20a.75.75 0 0 0 .75-.75v-8.586c0-.73-.29-1.429-.806-1.944z" /></svg>,
      disabled: false,
    },
    {
      label: "Mis Rutas",
      link: "/home/mis-rutas",
      Icon: <svg width="1em" height="1em" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" fillRule="evenodd" d="M2.246 10.999a2.75 2.75 0 0 1 2.75-2.75h14.008a2.75 2.75 0 0 1 2.75 2.75v8.005a2.75 2.75 0 0 1-2.75 2.75H4.996a2.75 2.75 0 0 1-2.75-2.75zm2.75-1.25c-.69 0-1.25.56-1.25 1.25v8.005c0 .69.56 1.25 1.25 1.25h14.008c.69 0 1.25-.56 1.25-1.25v-8.005c0-.69-.56-1.25-1.25-1.25zm-.249-3.752a.75.75 0 0 1 .75-.75h13.006a.75.75 0 0 1 0 1.5H5.497a.75.75 0 0 1-.75-.75m2.001-3a.75.75 0 0 1 .75-.75h10.004a.75.75 0 0 1 0 1.5H7.498a.75.75 0 0 1-.75-.75" clipRule="evenodd" /></svg>,
      ActiveIcon: <svg width="1em" height="1em" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" fillRule="evenodd" d="M4.996 8.249a2.75 2.75 0 0 0-2.75 2.75v8.005a2.75 2.75 0 0 0 2.75 2.75h14.008a2.75 2.75 0 0 0 2.75-2.75v-8.005a2.75 2.75 0 0 0-2.75-2.75zm-.249-2.252a.75.75 0 0 1 .75-.75h13.006a.75.75 0 0 1 0 1.5H5.497a.75.75 0 0 1-.75-.75m2.001-3a.75.75 0 0 1 .75-.75h10.004a.75.75 0 0 1 0 1.5H7.498a.75.75 0 0 1-.75-.75" clipRule="evenodd" /></svg>,
      disabled: false,
    },
    {
      label: "Mi progreso",
      link: "/home/mi-progreso",
      Icon: <svg width="1em" height="1em" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#C4C8CE" fillRule="evenodd" d="M17 9.5a.705.705 0 0 1 0 .998l-4 4.001a.705.705 0 0 1-1.013-.016L10 12.363l-1.987 2.12a.705.705 0 0 1-1.028-.964l2.5-2.668a.705.705 0 0 1 1.03 0l2.003 2.136 3.486-3.486a.705.705 0 0 1 .997 0" clipRule="evenodd" /><path fill="#C4C8CE" fillRule="evenodd" d="M2.246 7.996a5.75 5.75 0 0 1 5.75-5.75h8.008a5.75 5.75 0 0 1 5.75 5.75v8.008a5.75 5.75 0 0 1-5.75 5.75H7.996a5.75 5.75 0 0 1-5.75-5.75zm5.75-4.25a4.25 4.25 0 0 0-4.25 4.25v8.008a4.25 4.25 0 0 0 4.25 4.25h8.008a4.25 4.25 0 0 0 4.25-4.25V7.996a4.25 4.25 0 0 0-4.25-4.25z" clipRule="evenodd" /></svg>,
      ActiveIcon: <svg width="1em" height="1em" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#C4C8CE" fillRule="evenodd" d="M17 9.5a.705.705 0 0 1 0 .998l-4 4.001a.705.705 0 0 1-1.013-.016L10 12.363l-1.987 2.12a.705.705 0 0 1-1.028-.964l2.5-2.668a.705.705 0 0 1 1.03 0l2.003 2.136 3.486-3.486a.705.705 0 0 1 .997 0" clipRule="evenodd" /><path fill="#C4C8CE" fillRule="evenodd" d="M2.246 7.996a5.75 5.75 0 0 1 5.75-5.75h8.008a5.75 5.75 0 0 1 5.75 5.75v8.008a5.75 5.75 0 0 1-5.75 5.75H7.996a5.75 5.75 0 0 1-5.75-5.75zm5.75-4.25a4.25 4.25 0 0 0-4.25 4.25v8.008a4.25 4.25 0 0 0 4.25 4.25h8.008a4.25 4.25 0 0 0 4.25-4.25V7.996a4.25 4.25 0 0 0-4.25-4.25z" clipRule="evenodd" /></svg>,
      disabled: true,
    },
    {
      label: "Chat ADA",
      link: "/home/chat",
      Icon: <svg width="1em" height="1em" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#C4C8CE" d="m9.6 14.575 1.252-2.723 2.723-1.252-2.723-1.252L9.6 6.625 8.348 9.348 5.625 10.6l2.723 1.252zm0 3.625-2.375-5.225L2 10.6l5.225-2.375L9.6 3l2.375 5.225L17.2 10.6l-5.225 2.375zm8.6 2.8-1.175-2.625L14.4 17.2l2.625-1.2 1.175-2.6 1.2 2.6 2.6 1.2-2.6 1.175z" /></svg>,
      ActiveIcon: <svg width="1em" height="1em" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="m9.6 18.2-2.375-5.225L2 10.6l5.225-2.375L9.6 3l2.375 5.225L17.2 10.6l-5.225 2.375zm8.6 2.8-1.175-2.625L14.4 17.2l2.625-1.2 1.175-2.6 1.2 2.6 2.6 1.2-2.6 1.175z" /></svg>,
      disabled: true,
    },
  ]

  return (
    <div className={styles.HomeHeader}>
      <aside className={styles.HomeHeader__aside}>
        <nav>
          <Link href="/home" className={styles.HomeHeader__aside__logo}>
            <PlatziLogo />
          </Link>
          <ul>
            {
              navList.map((navItem, index) =>
                <NavLink key={index} item={navItem} />
              )
            }
          </ul>
        </nav>
      </aside>
      <header>
        <Link href="/home" className={styles.logo}>
          <PlatziLogo />
        </Link>
        <InputSearch alt />
        <div>
          <UserOptions />
        </div>
      </header>
      {children}
    </div>
  )
}

export default HomeHeader