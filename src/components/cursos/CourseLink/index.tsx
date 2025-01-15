import { CourseShortData } from '@/schemas/cursos'
import styles from './CourseLink.module.scss'
import Link from 'next/link'

type Props = {
  course: CourseShortData,
}

const CourseLink = ({ course }: Props) => {
  
  const { title, badge_url, professor, first_class, landing_url } = course
  
  return (
    <Link
      className={styles.CourseLink}
      href={landing_url || ""} 
      // href={`https://platzi.com${first_class as string}`} 
    >
      <figure>
        <img src={badge_url as string} alt="" />
      </figure>
      <div>
        <h4>{title}</h4>
        <p>Por {professor}</p>
      </div>
    </Link>
  )
}

export default CourseLink;