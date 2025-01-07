import React from 'react'
import RouteSection from '../RouteSection'
import styles from './Categories.module.scss'

type Props = {
  categories: CategoryData[]
}

const Categories = ({ categories }: Props) => {
  return (
    <>
      {
        categories.map(({ name, schools, icon }, index) => {
          return (
            <section id={name?.split(" ").join("")} key={index} className={styles.Category}>
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