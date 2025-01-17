import { CourseData } from '@/schemas/buscar'
import styles from './CourseLink.module.scss'
import Link from 'next/link';

type Props = {
  search?: boolean,
  course: CourseData,
}

const CourseLink = ({ course, search = false}: Props) => {

  const { badge_url, title, description, professor, landing_url, firstClassTitle, firstClassImage } = course;

  const shortenDescription = (description: string | null) => {
    if (description) {
      return `${description.slice(0, 140)}...`;
    }
    return ""
  }
  
  const className = search ? "CourseLinkSearch"  : "CourseLink"
  
  return (
    <Link href={landing_url as string} className={styles[className]}>
      <figure className={styles[`${className}__firstClass`]}>
        <img src={firstClassImage as string} alt="" />
      </figure>
      <div className={styles[`${className}__title`]}>
        <img src={badge_url as string} alt="" />
        <h2>{title}</h2>
      </div>
      <div className={styles[`${className}__description`]}>
        <p>{shortenDescription(search ? firstClassTitle : description)}</p>
        <span>Profe Platzi: {professor}</span>
      </div>
    </Link>
  )
}

export default CourseLink