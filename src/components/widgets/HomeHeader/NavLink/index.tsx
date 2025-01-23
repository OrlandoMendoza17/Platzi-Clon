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
  hideInMobile: boolean,
}

type Props = {
  item: NavItem,
  className?: string,
}

const NavLink = ({ item, className = "" }: Props) => {
  
  const pathname = usePathname()
  const { link, label, Icon, ActiveIcon, hideInMobile } = item
  
  const isActive = (pathname === link)
  
  return (
    <li className={`${styles.NavLink} ${className} ${hideInMobile ? "hidden md:block" : "" }`}>
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