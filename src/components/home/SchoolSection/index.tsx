import styles from './SchoolSection.module.scss'
import CourseItem from '../CourseItem'
import { SchoolSectionsData } from '@/schemas/home'
import Link from 'next/link'

type Props = {
  section: SchoolSectionsData,
}

const SchoolSection = ({ section }: Props) => {
  const { title, routes } = section
  return (
    <section className={styles.SchoolSection}>
      <div className={styles.SchoolSection__title}>
        <h3>{title}</h3>
        <hr />
      </div>
      {
        routes.map(({ title, courses, landing_url }, index) =>
          <section key={index} className={styles.SchoolSection__route}>
            <div className={styles.SchoolSection__route__title}>
              <h3>
                <Link href={landing_url as string}>{title}</Link>
              </h3>
            </div>
            <div className={styles.SchoolSection__route__courses}>
              {
                courses.map((course, index)=> 
                  <CourseItem key={index} course={course}/>
                )
              }
            </div>
          </section>
        )
      }
    </section>
  )
}

export default SchoolSection