import { RouteData, SchoolData } from '@/schemas/curso'
import Link from 'next/link'
import styles from './CourseRelatedRoute.module.scss'

type Props = {
  route: RouteData,
  school: SchoolData,
}

const CourseRelatedRoute = ({ school, route }: Props) => {
  const { courses } = route
  const ruteDuration = courses.reduce((acummulator, current) => acummulator + (current.duration as number), 0)
  console.log('courses', courses.length)
  return (
    <Link href={route.landing_url as string}>
      <article className={`${styles.CourseRelatedRoute} ${styles[`CourseRelatedRoute__category_${school.categories.id}`]}`}>
        <div className={styles.CourseRelatedRoute__header}>
          <span className={styles.CourseRelatedRoute__tag}>
            Ruta
          </span>
          <div className="flex">
            {
              courses.slice(0, 4).map(({ badge_url }, index) =>
                <figure key={index}>
                  <img src={badge_url as string} alt="" />
                </figure>
              )
            }
          </div>
          <span>
            {courses.length.toString()} Cursos
          </span>
        </div>
        <div className={styles.CourseRelatedRoute__container}>
          <h3>{route.title}</h3>
          <div>
            <span className={styles.CourseRelatedRoute__tag}>{ruteDuration} horas</span>
          </div>
          <p>{route.description}</p>
        </div>
        <span className={styles.CourseRelatedRoute__link}>
          Ver ruta
        </span>
      </article>
    </Link>
  )
}

export default CourseRelatedRoute