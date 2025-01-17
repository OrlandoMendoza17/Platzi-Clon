import { CourseData } from '@/schemas/home'
import styles from './CourseItem.module.scss'
import Link from 'next/link'

type Props = {
  course: CourseData,
}

const CourseItem = ({ course }: Props) => {
  const { title, professor, badge_url, landing_url, firstClassImage } = course
  return (
    <Link href={landing_url as string} className={styles.CourseItem}>
      <figure>
        <img src={firstClassImage as string} alt="" />
      </figure>
      <div className={styles.CourseItem__title}>
        <img src={badge_url as string} alt="" />
        <div>
          <h4>{title}</h4>
          <span>Por {professor}</span>
        </div>
      </div>
    </Link>
  )
}

export default CourseItem