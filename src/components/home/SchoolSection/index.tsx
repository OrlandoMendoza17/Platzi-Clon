import React from 'react'
import styles from './SchoolSection.module.scss'
import CourseItem from '../CourseItem'

const SchoolSection = () => {
  return (
    <section className={styles.SchoolSection}>
      <div className={styles.SchoolSection__title}>
        <h3></h3>
        <hr />
      </div>
      <section className={styles.SchoolSection__route}>
        <h3></h3>
        <div>
          
          {/* <CourseItem /> */}
        </div>
      </section>
    </section>
  )
}

export default SchoolSection