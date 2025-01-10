import React from 'react'
import RouteSection from '../RouteSection'
import styles from './Categories.module.scss'
import { CategoryData } from '@/schemas/cursos'
import { getIdFromTitle } from '@/utils'

type Props = {
  categories: CategoryData[]
}

const Categories = ({ categories }: Props) => {
  return (
    <>
      {
        categories.map(({ name, schools, icon }, index) => {
          return (
            <section id={getIdFromTitle(name)} key={index} className={styles.Category}>
              <h2>
                <span>
                  <div dangerouslySetInnerHTML={{ __html: icon as string }}></div>
                  {name}
                </span>
              </h2>
              {
                schools.map((school, index) =>
                  <RouteSection key={index} route={school} routes={school.routes} />
                )
              }
            </section>
          )
        })
      }
    </>
  )
}

export default Categories