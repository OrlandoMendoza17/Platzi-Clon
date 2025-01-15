import { CoursesShortData } from "@/schemas/ruta"
import styles from './RouteCourse.module.scss'
import Link from "next/link"

type Props = {
  course: CoursesShortData,
}

const RouteCourse = ({ course }: Props) => {
  return (
    <Link href={course.landing_url || ""} className={styles.RouteCourse}>
      <figure>
        <img src={course.badge_url as string} alt="" />
      </figure>
      <div>
        <h3>
          {course.title}
        </h3>
        <p>{course.duration} de contenido {course.practice_time} de práctica</p>
      </div>
    </Link>
  )
}

export default RouteCourse