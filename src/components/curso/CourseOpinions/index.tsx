import Tag from '@/components/widgets/Tag'
import Heart from '@/components/icons/Heart'
import styles from './CourseOpinions.module.scss'
import { CourseData } from '@/schemas/curso'
import Star from '@/components/icons/Star'
import CourseOpinion from './CourseOpinion'

type Props = {
  course: CourseData;
}

const CourseOpinions = ({ course }: Props) => {

  const { courseOpinions, opinions_link } = course

  const metricsNumber = Math.ceil(course.metrics as number)
  const metricsStars = Array(metricsNumber).fill(0)

  return (
    <section className={styles.CourseOpinions}>
      <Tag Icon={Heart} text="Opiniones del curso" />
      <div className={styles.CourseOpinions__head}>
        <div className="flex items-center">
          {
            metricsStars.map((_, index) =>
              <Star key={index} />
            )
          }
        </div>
        <span>
          {course.metrics} · {course.opinions} opiniones
        </span>
      </div>
      <div className={styles.CourseOpinions__container}>
        {
          courseOpinions.map((opinion, index) =>
            <CourseOpinion
              key={index}
              metricsStars={metricsStars}
              opinion={opinion}
            />
          )
        }
      </div>
      <a href={opinions_link as string} className="text-body-lg underline">
        Ver las {course.opinions} opiniones
      </a>
    </section>
  )
}

export default CourseOpinions