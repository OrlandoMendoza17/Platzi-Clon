import Link from "next/link"
import DropDown from "./DropDown"
import styles from './Header.module.scss'
import Arrow from "@/components/icons/Arrow"
import OldHamburger from "@/components/icons/OldHamburger"
type Props = {
  categories: CategoryData[]
}
const Header = ({ categories }: Props) => {

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

  return (
    <header className={styles.Header}>
      <nav>
        <Link href="/" className={styles.Logo}>
          <figure>
            <img src="https://static.platzi.com/media/platzi-isotipo@2x.png" alt="" />
          </figure>
          <figure>
            <img src="https://static.platzi.com/media/logotipo-platzi.png" alt="" />
          </figure>
        </Link>
        <div className={styles.Explore}>
          <button>Explorar <Arrow /></button>
        </div>
        <div className={styles.input_search}>
          <input type="text" name="" id="" />
        </div>
        <ul className="justify-self-end">
          {
            links.map(({ label, url, children, inApp }, index) =>
              <li key={index}>
                {
                  children ?
                    <DropDown label={label} links={children} />
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
        <button className={`${styles.action_btn} ${styles["action_btn--ghost"]}`}>Empresas</button>
        <button className={styles.action_btn}>Ingresar Ahora</button>
        <button className={styles.menu_btn}>
          <OldHamburger/>
        </button>
      </nav>
    </header>
  )
}

export default Header