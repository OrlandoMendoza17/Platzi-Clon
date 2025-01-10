"use client"
import { useEffect, useState } from "react"
import styles from '../Filter.module.scss'
import { Dispatch, SetStateAction } from 'react'
import { getIdFromTitle } from "@/utils"
import { CategoryData } from "@/schemas/cursos"
type Props = {
  categories: CategoryData[],
  selected: CategoryData,
  setSelected: Dispatch<SetStateAction<CategoryData>>
}

const CategoryFilter = ({ categories, selected, setSelected }: Props) => {

  const [opened, setOpened] = useState<boolean>(false)

  return (
    <div className={styles.Filter}>
      <button className={styles.Filter__button} onClick={() => setOpened(!opened)}>
        <div className="flex">
          <div dangerouslySetInnerHTML={{ __html: selected.icon as string }}>
          </div>
          <span>
            {selected.name}
          </span>
        </div>
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-down" className="svg-inline--fa fa-angle-down Dropdown-selected-icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" /></svg>
      </button>
      {
        opened &&
        <div className={`${styles.Filter__items} z-20`}>
          <span>
            Categorías
          </span>
          <ul>
            {
              categories.map((category, index) =>
                <li key={index}>
                  <button onClick={() => {
                    const $section = document.getElementById(getIdFromTitle(category.name) || "")
                    if ($section) {
                      window.scrollTo({
                        top: $section.offsetTop - 247,
                      })
                    }
                    setSelected(category);
                    setOpened(false);
                  }}>
                    <div dangerouslySetInnerHTML={{ __html: category.icon as string }}></div>
                    <span>{category.name}</span>
                  </button>
                </li>
              )
            }
          </ul>
        </div>
      }
    </div>
  )
}

export default CategoryFilter