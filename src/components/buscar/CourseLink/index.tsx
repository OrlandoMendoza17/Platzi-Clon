import { CourseData } from '@/schemas/buscar'
import styles from './CourseLink.module.scss'
import Link from 'next/link';

type Props = {
  course: CourseData,
}

const CourseLink = ({ course }: Props) => {

  const { badge_url, title, description, professor, landing_url, firstClassImage } = course;

  const shortenDescription = (description: string | null) => {
    if (description) {
      return `${description.slice(0, 140)}...`;
    }
    return ""
  }

  return (
    <Link href={landing_url as string} className={styles.CourseLink}>
      <figure className={styles.CourseLink__firstClass}>
        <img src={firstClassImage as string} alt="" />
      </figure>
      <div className={styles.CourseLink__title}>
        <img src={badge_url as string} alt="" />
        <h2>{title}</h2>
      </div>
      <div className={styles.CourseLink__description}>
        <p>{shortenDescription(description)}</p>
        <span>Profe Platzi: {professor}</span>
      </div>
    </Link>
  )
}

export default CourseLink