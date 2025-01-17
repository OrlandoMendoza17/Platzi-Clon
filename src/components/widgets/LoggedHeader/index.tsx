import React from 'react'
import styles from './LoggedHeader.module.scss'
import Link from 'next/link'
import PlatziLogo from '@/components/icons/PlatziLogo'

type Props = {
  children: React.ReactNode
}

const LoggedHeader = ({ children }: Props) => {
  return (
    <div className={styles.LoggedHeader}>
      <aside>
        <Link href="/home">
          <PlatziLogo />
        </Link>
      </aside>
      <header></header>
      {children}
    </div>
  )
}

export default LoggedHeader