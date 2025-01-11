"use client"
import { CategoryHeaderData } from "@/schemas/header"
import styles from './ExploreList.module.scss'
import stylesHeader from '../Header.module.scss'
import Arrow from "@/components/icons/Arrow"
import { useState } from "react"
import Link from "next/link"

type Props = {
  categories: CategoryHeaderData[]
}

const ExploreList = ({ categories }: Props) => {
  const [show, setShow] = useState<boolean>(false)
  return (
    <div className={stylesHeader.Explore} onMouseLeave={() => setShow(false)}>
      <button onClick={() => setShow(!show)}>Explorar <Arrow /></button>
      {
        show &&
        <div id="ExploreList" className={styles.ExploreList}>
          <div className={`${styles.ExploreList__section}  ${styles.categories}`}>
            <span className={styles.ExploreList__section__title}>
              Categorías
            </span>
            <ul>
              {
                categories.map(({ name, icon, schools }, index) =>
                  <li key={index}>
                    <span>
                      <div dangerouslySetInnerHTML={{ __html: icon as string }}></div>
                      <span>{name}</span>
                    </span>
                    <div className={`${styles.ExploreList__section} ${styles.list} ${styles.schools}`} >
                      <span className={styles.ExploreList__section__title}>
                        Escuelas <span>{schools.length}</span>
                      </span>
                      <ul>
                        {
                          schools.map(({ title, landing_url, routes }, index) =>
                            <li key={index}>
                              <Link href={landing_url as string}>{title}</Link>
                              <div className={`${styles.ExploreList__section} ${styles.list} ${styles.routes}`} >
                                <span className={styles.ExploreList__section__title}>
                                  Rutas <span>{routes.length}</span>
                                </span>
                                <ul>
                                  {
                                    routes.map(({ title, landing_url }, index) =>
                                      <li key={index}>
                                        <Link href={landing_url as string}>{title}</Link>
                                      </li>
                                    )
                                  }
                                </ul>
                              </div>
                            </li>
                          )
                        }
                      </ul>
                    </div>
                  </li>
                )
              }
              <li>
                <span>Ver todos los cursos</span>
              </li>
            </ul>
          </div>
        </div>
      }
    </div>
  )
}

export default ExploreList