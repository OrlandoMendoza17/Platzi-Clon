"use client"
import Link from "next/link"
import styles from "./DropDown.module.scss"
import Arrow from "@/components/icons/Arrow"
import { useState } from "react"

type Link = {
  label: string,
  url: string,
  inApp: boolean,
}

type Props = {
  openedMenu?: boolean,
  label: string,
  links: Link[]
}

const DropDown = ({ openedMenu = false, label, links }: Props) => {

  const [opened, setOpened] = useState(false)

  return (
    <button
      className={styles.DropDown}
      onClick={() => setOpened(!opened)}
      // onMouseLeave={() => setOpened(false)}
    >
      {label} <Arrow />
      {
        opened &&
        <div
          className={`${styles.DropDown__list} ${openedMenu ? styles.DropDown__mobile : ""}`}
        // onMouseOver={() => setOpened(true)}
        // onMouseOut={() => setOpened(false)}
        >
          <span>
            {label} <Arrow />
          </span>
          <ul>
            {links.map(({ label, url, inApp }, index) =>
              <li key={index}>
                {
                  inApp ?
                    <Link href={url}>{label}</Link>
                    :
                    <a href={url}>{label}</a>
                }
              </li>
            )}
          </ul>
        </div>
      }
    </button>
  )
}

export default DropDown