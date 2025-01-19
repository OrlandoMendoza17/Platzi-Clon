"use client"
import Link from "next/link"
import DropDown from "./DropDown"
import OldHamburger from "@/components/icons/OldHamburger"
import { getCategoriesInfo } from "@/services"
import styles from './Header.module.scss'
import ExploreList from "./ExploreList"
import InputSearch from "./InputSearch"
import { MouseEventHandler, useEffect, useState } from "react"
import { CategoryHeaderData } from "@/schemas/header"
import OldCross from "@/components/icons/OldCross"

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

  const [openedMenu, setOpenedMenu] = useState<boolean>(false)
  const [categories, setCategories] = useState<CategoryHeaderData[]>([])
  
  useEffect(() => {
    (async ()=> {
      const categories = await getCategoriesInfo()
      setCategories(categories)
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

        <InputSearch />
        
        <section className={openedMenu ? styles.mobile : ""}>
          <ul className="">
            {
              links.map(({ label, url, children, inApp }, index) =>
                <li key={index}>
                  {
                    children ?
                      <DropDown openedMenu={openedMenu}  label={label} links={children} />
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
        
        <button className={`${styles.action_btn} ${styles["action_btn--ghost"]}`}>Empresas</button>
        <button className={styles.action_btn}>Ingresar Ahora</button>
        
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