import Link from 'next/link';
import styles from './styles/Header.module.scss';
import DropDown from './DropDown';
import Hamburger from '@/components/icons/Hamburger';

const Header = () => {

  const links = [
    {
      label: "Explorar",
      url: "https://platzi.com/cursos/",
    },
    {
      label: "Comunidad",
      url: "/",
      children: [
        {
          label: "Eventos",
          url: "https://platzi.com/comunidad/",
        },
        {
          label: "Blog",
          url: "https://platzi.com/blog/",
        },
        {
          label: "Live",
          url: "https://platzi.com/live/",
        },
      ]
    },
    {
      label: "Planes",
      url: "https://platzi.com/precios/",
    },
    {
      label: "Empresas",
      url: "https://platzi.com/business",
    },
  ]

  return (
    <header className={styles.Header}>
      <nav className="">
        <figure>
          <img className={styles.Header__logo} src="/images/platzi.svg" alt="" />
        </figure>
        <ul>
          {links.map(({ label, url, children }, index) =>
            <li key={index}>
              {
                children ?
                  <DropDown label={label} links={children} />
                  :
                  <Link href={url}>{label}</Link>
              }
            </li>
          )}

        </ul>
        <a href="https://platzi.com/login/?next=/home">
          <button className={styles.Header__loginButton}>
            Acceder
          </button>
        </a>
        <button className={styles.Header__hamburger}>
          <Hamburger/>
        </button>
      </nav>
    </header>
  )
}

export default Header