import Link from 'next/link'
import styles from './CourseSchool.module.scss'
import { SchoolData } from '@/schemas/curso'

type Props = {
  school: SchoolData,
}

const CourseSchool = ({ school }: Props) => {
  return (
    <Link href={school.landing_url as string}>
      <article className={`${styles.CourseSchool} ${styles[`CourseSchool__category_${school.categories.id}`]}`}>
        <figure>
          <img src={school.badge_url as string} alt="" />
        </figure>
        <div className={styles.CourseSchool__container}>
          <h3>{school.title}</h3>
          <p>{school.description}</p>
        </div>
        <span>Ver escuela</span>
      </article>
    </Link>
  )
}

export default CourseSchool