"use client"
import Link from "next/link"
import DropDown from "./DropDown"
import OldHamburger from "@/components/icons/OldHamburger"
import { getCategoriesInfo } from "@/services"
import styles from './Header.module.scss'
import ExploreList from "./ExploreList"
import InputSearch from "./InputSearch"
import { MouseEventHandler, use, useEffect, useState } from "react"
import { CategoryHeaderData } from "@/schemas/header"
import OldCross from "@/components/icons/OldCross"
import AltMagnifyingGlass from "@/components/icons/AltMagnifyingGlass"
import { usePathname } from 'next/navigation'
import supabase from "@/supabase"
import SignInButton from "../SignInButton"
import { User } from "@supabase/supabase-js"
import UserOptions from "../HomeHeader/UserOptions"

type Props = {
  sticky?: boolean,
}

const Header = ({ sticky }: Props) => {

  const links = [
    {
      label: "Cursos",
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
      label: "Lanzamientos",
      url: "https://platzi.com/agenda/",
      inApp: false,
    },
    {
      label: "Planes",
      url: "https://platzi.com/precios/",
      inApp: false,
    },
    {
      label: "Contáctanos",
      url: "https://platzi.com/contacto/",
      inApp: false,
    },
  ]

  const pathname = usePathname()

  const [user, setUser] = useState<User | null>(null)
  const [openedMenu, setOpenedMenu] = useState<boolean>(false)
  const [categories, setCategories] = useState<CategoryHeaderData[]>([])
  const [openedLogIn, setOpenedLogIn] = useState<boolean>(false)

  useEffect(() => {
    (async () => {
      const categories = await getCategoriesInfo()
      setCategories(categories)
    })()
  }, [])

  useEffect(() => {
    (async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (user) {
        setUser(user)
      }
    })()
  }, [])


  useEffect(() => {
    window.addEventListener("resize", () => {
      const matchesDesktop = window.matchMedia("(min-width: 768px)").matches
      if (matchesDesktop) {
        console.log('matchesDesktop', matchesDesktop)
        setOpenedMenu(false)
      }
    })
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
    <header className={`${styles.Header} ${sticky ? "sticky" : ""}`}>
      <nav>
        <Link href="/" className={styles.Logo}>
          <figure>
            <img src="https://static.platzi.com/media/platzi-isotipo@2x.png" alt="" />
          </figure>
          <figure>
            <img src="https://static.platzi.com/media/logotipo-platzi.png" alt="" />
          </figure>
        </Link>
        <ExploreList categories={categories} />

        {
          pathname !== "/buscar" &&
          <a href="/buscar" className={styles.search_button}>
            <AltMagnifyingGlass />
          </a>
        }

        <InputSearch />

        <section className={openedMenu ? styles.mobile : ""}>
          <ul className="">
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
        {
          user ?
            <UserOptions />
            :
            <>
              <button className={`${styles.action_btn} ${styles["action_btn--ghost"]}`}>Empresas</button>
              <SignInButton
                openedLogIn={openedLogIn}
                setOpenedLogIn={setOpenedLogIn}
                stylesButton={styles.action_btn}
                text="Ingresar Ahora"
              />
            </>
        }
        <button
          onClick={handleOpenMenu}
          className={styles.menu_btn}
        >
          {
            openedMenu ? <OldCross /> : <OldHamburger />
          }
        </button>
      </nav>
    </header>
  )
}

export default Header