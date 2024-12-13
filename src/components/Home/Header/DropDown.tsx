"use client"
import Link from "next/link"
import styles from "./styles/DropDown.module.scss"
import Arrow from "@/components/icons/Arrow"
import { useState } from "react"

type Link = {
  label: string,
  url: string,
}

type Props = {
  label: string,
  links: Link[]
}

const DropDown = ({ label, links }: Props) => {

  const [opened, setOpened] = useState(false)

  return (
    <button 
      className={styles.DropDown}
      onClick={() => setOpened(!opened)}
      onMouseLeave={() => setOpened(false)}
    >
      {label} <Arrow />
      {
        opened &&
        <div
          className={styles.DropDown__list}
          // onMouseOver={() => setOpened(true)}
          // onMouseOut={() => setOpened(false)}
        >
          <ul>
            {links.map(({ label, url }, index) =>
              <li key={index}>
                <Link href={url}>{label}</Link>
              </li>
            )}
          </ul>
        </div>
      }
    </button>
  )
}

export default DropDown