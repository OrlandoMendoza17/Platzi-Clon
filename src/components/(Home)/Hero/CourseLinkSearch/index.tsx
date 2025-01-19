import { CourseData } from "@/schemas/buscar"
import Link from "next/link"
import styles from './CourseLinkSearch.module.scss'

type Props = {
  course: CourseData;
}

const CourseLinkSearch = ({ course }: Props) => {
  const { title, badge_url, landing_url } = course
  return (
    <li className={styles.CourseLinkSearch}>
      <Link href={landing_url as string}>
        <figure>
          <img src={badge_url as string} alt="" />
        </figure>
        <span>{title}</span>
      </Link>
    </li>
  )
}

export default CourseLinkSearch