import Star from '@/components/icons/Star'
import styles from './CourseOpinion.module.scss'

type Props = {
  metricsStars: any[],
  opinion: CourseOpinion,
}

const CourseOpinion = ({ opinion, metricsStars }: Props) => {
  const { name, user_name, user_image, opinion: text } = opinion
  return (
    <article className={styles.CourseOpinion}>
      <figure>
        <img src={user_image as string} alt="" />
      </figure>
      <div>
        <h3>{name}</h3>
        <div  className={styles.CourseOpinion__user}>
          <span>{user_name}</span>
          ·
          <div className="flex items-center">
            {
              metricsStars.map((_, index) =>
                <Star key={index} />
              )
            }
        </div>
        </div>
        <p>{text}</p>
      </div>
    </article>
  )
}

export default CourseOpinion