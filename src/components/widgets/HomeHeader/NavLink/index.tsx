"use client"
import Link from 'next/link'
import styles from './NavLink.module.scss'
import { usePathname } from 'next/navigation'

type NavItem = {
  label: string;
  link: string;
  Icon: React.JSX.Element;
  ActiveIcon: React.JSX.Element;
  disabled: boolean;
}

type Props = {
  item: NavItem,
}

const NavLink = ({ item }: Props) => {
  
  const pathname = usePathname()
  const { link, label, Icon, ActiveIcon } = item
  
  const isActive = (pathname === link)
  
  return (
    <li className={styles.NavLink}>
      {
        isActive &&
        <div className={styles.active}></div>
      }
      <Link href={link}>
        {isActive ? ActiveIcon : Icon}
        <span>{label}</span>
      </Link>
    </li>
  )
}

export default NavLink