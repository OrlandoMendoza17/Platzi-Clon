"use client"
import Link from 'next/link';
import styles from './LandingHeader.module.scss';
import DropDown from './DropDown';
import Hamburger from '@/components/icons/Hamburger';
import PlatziLogo from '@/components/icons/PlatziLogo';
import { MouseEventHandler, useEffect, useState } from 'react';
import Cross from '@/components/icons/Cross';
import SignInButton from '@/components/widgets/SignInButton';
import supabase from '@/supabase';
import { useRouter } from 'next/navigation';

const LandingHeader = () => {

  const links = [
    {
      label: "Explorar",
      url: "/cursos",
      inApp: true,
    },
    {
      label: "Comunidad",
      url: "/",
      children: [
        {
          label: "Eventos",
          url: "https://platzi.com/comunidad/",
          inApp: false,
        },
        {
          label: "Blog",
          url: "https://platzi.com/blog/",
          inApp: false,
        },
        {
          label: "Live",
          url: "https://platzi.com/live/",
          inApp: false,
        },
      ]
    },
    {
      label: "Planes",
      url: "https://platzi.com/precios/",
      inApp: false,
    },
    {
      label: "Empresas",
      url: "https://platzi.com/business",
      inApp: false,
    },
  ]

  const router = useRouter()
  const [openedMenu, setOpenedMenu] = useState<boolean>(false)
  const [openedLogIn, setOpenedLogIn] = useState<boolean>(false)

  useEffect(() => {
    (async ()=> {
      const { data: { user } } = await supabase.auth.getUser()
      if(user){
        router.push("/home")
      }
      window.addEventListener("resize", () => {
        const matchesDesktop = window.matchMedia("(min-width: 768px)").matches
        if (matchesDesktop) {
          console.log('matchesDesktop', matchesDesktop)
          setOpenedMenu(false)
        }
      })
    })()
  }, [])

  const handleOpenMenu: MouseEventHandler<HTMLButtonElement> = () => {
    if (openedMenu) {
      setOpenedMenu(false)
      document.body.style.overflow = ""
    } else {
      setOpenedMenu(true)
      document.body.style.overflow = "hidden"
    }
  }

  return (
    <header className={styles.LandingHeader}>
      <nav className="">
        <Link href="/" className={styles.LandingHeader__logo}>
          <PlatziLogo />
        </Link>
        <section className={openedMenu ? styles.mobile : ""}>
          <ul>
            {
              links.map(({ label, url, children, inApp }, index) =>
                <li key={index}>
                  {
                    children ?
                      <DropDown openedMenu={openedMenu} label={label} links={children} />
                      :
                      inApp ?
                        <Link href={url}>{label}</Link>
                        :
                        <a href={url}>{label}</a>
                  }
                </li>
              )
            }
          </ul>
        </section>
        <div className="flex items-center">
          <SignInButton
            openedLogIn={openedLogIn}
            setOpenedLogIn={setOpenedLogIn}
            stylesButton={styles.LandingHeader__loginButton}
            text="Acceder"
          />
          <button
            onClick={handleOpenMenu}
            className={styles.LandingHeader__hamburger}
          >
            {
              openedMenu ? <Cross /> : <Hamburger />
            }
          </button>
        </div>
      </nav>
    </header>
  )
}

export default LandingHeader