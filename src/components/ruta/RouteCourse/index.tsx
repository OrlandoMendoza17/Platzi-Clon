import { CoursesShortData } from "@/schemas/ruta"
import styles from './RouteCourse.module.scss'

type Props = {
  course: CoursesShortData,
}

const RouteCourse = ({ course }: Props) => {
  return (
    <div className={styles.RouteCourse}>
      <figure>
        <img src={course.badge_url as string} alt="" />
      </figure>
      <div>
        <h3>
          {course.title}
        </h3>
        <p>{course.duration} de contenido {course.practice_time} de práctica</p>
      </div>
    </div>
  )
}

export default RouteCourse