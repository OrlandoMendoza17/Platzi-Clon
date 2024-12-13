import Link from 'next/link';
import styles from './styles/Header.module.scss';
import Arrow from '../../icons/Arrow';
import DropDown from './DropDown';
import Hamburger from '@/components/icons/Hamburger';

const Header = () => {

  const links = [
    {
      label: "Explorar",
      url: "/",
    },
    {
      label: "Comunidad",
      url: "/",
      children: [
        {
          label: "Eventos",
          url: "/",
        },
        {
          label: "Blog",
          url: "/",
        },
        {
          label: "Live",
          url: "/",
        },
      ]
    },
    {
      label: "Planes",
      url: "/",
    },
    {
      label: "Empresas",
      url: "/",
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
        <button className={styles.Header__loginButton}>
          Acceder
        </button>
        <button className={styles.Header__hamburger}>
          <Hamburger/>
        </button>
      </nav>
    </header>
  )
}

export default Header