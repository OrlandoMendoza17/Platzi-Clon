import { CourseData } from '@/schemas/curso'
import styles from './CourseInfo.module.scss'
import Level, { CourseLevel } from '@/components/icons/Level'
import Videos from '@/components/icons/Videos'
import Clock from '@/components/icons/Clock'
import Lightning from '@/components/icons/Lightning'
import Star from '@/components/icons/Star'
import ArrowRight from '@/components/icons/ArrowRight'

type Props = {
  countClasses: number,
  course: CourseData,
}

const CourseInfo = ({ course, countClasses  }: Props) => {

  const getCourseLevel = (courseLevel: CourseLevel) => {
    const levels = {
      basic: "Básico",
      intermidiate: "Intermedio",
      advanced: "Avanzado",
    }
    return levels[courseLevel]
  }
  
  const metricsNumber = Math.ceil(course.metrics as number)
  const metricsStars = Array(metricsNumber).fill(0)
  
  return (
    <section className={styles.CourseInfo}>
      <div className={styles.CourseInfo__head}>
        <figure style={{ width: "44px", height: "44px" }}>
          <img src={course.badge_url || ""} alt="" />
        </figure>
        <h1>{course.title}</h1>
        <div className="flex items-center gap-2">
          <div className={styles.CourseInfo__head__metrics}>
            <div className="flex items-center">
              {
                metricsStars.map((_, index)=> 
                  <Star key={index}/>
                )
              }
            </div>
            <span>
              {course.metrics}
            </span>
          </div>
          <a className={styles.CourseInfo__head__opinions}>
            <span>{course.opinions} opiniones</span>
            <ArrowRight />
          </a>
        </div>
        <p>Publicado el {course.date}</p>
      </div>
      <div className={styles.CourseInfo__tags}>
        <div className={styles.CourseInfo__tags__item}>
          <Level courseLevel={course.level as CourseLevel} />
          <span>Nivel {getCourseLevel(course.level as CourseLevel)}</span>
        </div>
        <div className={styles.CourseInfo__tags__item}>
          <Videos />
          <span>{countClasses} clases</span>
        </div>
        <div className={styles.CourseInfo__tags__item}>
          <Clock />
          <span>{course.duration} horas de contenido</span>
        </div>
        <div className={styles.CourseInfo__tags__item}>
          <Lightning />
          <span>{course.practice_time} horas de práctica</span>
        </div>
      </div>
      <p className={styles.CourseInfo__description}>{course.description}</p>
    </section>
  )
}

export default CourseInfo
