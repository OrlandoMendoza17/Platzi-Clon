"use client"
import { useEffect, useState } from "react"
import styles from '../Filter.module.scss'
import { getIdFromTitle } from "@/utils"
import { CategoryData, RouteData, SchoolData } from "@/schemas/cursos"

type Props = {
  schoolsRoutes: (SchoolData | RouteData)[],
  selectedCategory: CategoryData,
}

const SchoolsRouteFilter = ({ schoolsRoutes, selectedCategory }: Props) => {

  const defaultObject = {
    id: 0,
    title: 'Todas las escuelas',
    badge_url: '',
    categoryId: 0,
    created_at: '',
    description: '',
    landing_url: '',
    schoolSectionId: 0,
    courses: [],
  }
  
  const defaultRoutes = [defaultObject, ...schoolsRoutes]
  
  const [opened, setOpened] = useState<boolean>(false)
  const [selected, setSelected] = useState<SchoolData | RouteData>(defaultObject)
  
  const isLocked = schoolsRoutes.length === 0
  
  useEffect(() => {
    setSelected(defaultRoutes[0])
    if(isLocked){
      setOpened(false)
    }
  }, [schoolsRoutes])
  
  
  return (
    <div className={styles.Filter}>
      <button 
        id="SchoolsRouteFilterBtn" 
        disabled={isLocked} 
        className={`${styles.Filter__button} ${isLocked ? styles["Filter__button--locked"] : ""}`} 
        onClick={() => setOpened(!opened)}
        >
        <div className="flex">
          {
            selected?.badge_url &&
            <img src={selected.badge_url} alt="" />
          }
          <span>
            {selected?.title}
          </span>
        </div>
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-down" className="svg-inline--fa fa-angle-down Dropdown-selected-icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" /></svg>
      </button>
      {
        opened &&
        <div className={`${styles.Filter__items} z-10`}>
          <span>
            Escuelas
          </span>
          <ul>
            {
              defaultRoutes.map((school, index) =>
                <li key={index}>
                  <button onClick={() => {
                    
                    const $section = document.getElementById(((index === 0) ? getIdFromTitle(selectedCategory.name) :  getIdFromTitle(school.title)) || "")
                    if ($section) {
                      window.scrollTo({
                        top: $section.offsetTop - 247,
                      })
                    }
                    setSelected(school);
                    setOpened(false);
                  }}>
                    {
                      school?.badge_url &&
                      <img src={school.badge_url} alt="" />
                    }
                    <span>{school?.title}</span>
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

export default SchoolsRouteFilter