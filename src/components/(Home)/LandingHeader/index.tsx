import Link from 'next/link';
import styles from './LandingHeader.module.scss';
import DropDown from './DropDown';
import Hamburger from '@/components/icons/Hamburger';
import PlatziLogo from '@/components/icons/PlatziLogo';

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

  return (
    <header className={styles.LandingHeader}>
      <nav className="">
        <Link href="/">
          <PlatziLogo />
        </Link>
        <ul>
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
        <a href="https://platzi.com/login/?next=/home">
          <button className={styles.LandingHeader__loginButton}>
            Acceder
          </button>
        </a>
        <button className={styles.LandingHeader__hamburger}>
          <Hamburger />
        </button>
      </nav>
    </header>
  )
}

export default LandingHeader