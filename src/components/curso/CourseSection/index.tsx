import { CourseSectionData } from '@/schemas/curso'
import CourseClass from './CourseClass'
import styles from './CourseSection.module.scss'

type Props = {
  classes: CourseClass[],
  courseSection: CourseSectionData,
}

const CourseSection = ({ classes, courseSection }: Props) => {
  const { title, courseClasses } = courseSection
  return (
    <article className={styles.CourseSection}>
      <h2>{title}</h2>
      <ul>
        {
          courseClasses.map((courseClass, index) =>
            <CourseClass key={index} classes={classes} courseClass={courseClass} />
          )
        }
      </ul>
    </article>
  )
}

export default CourseSection