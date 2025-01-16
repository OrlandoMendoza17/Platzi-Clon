import { CourseData } from '@/schemas/home'
import styles from './CourseItem.module.scss'

type Props = {
  course: CourseData,
}

const CourseItem = ({ course }: Props) => {
  const {title, professor, badge_url} = course
  return (
    <div className={styles.CourseItem}>
      <figure>
        <img src="https://thumbs.cdn.mdstrm.com/thumbs/512e13acaca1ebcd2f000279/thumb_620aa2e45a343b277e4a6fb7_620aa2e45a343b277e4a6fc3_21s.jpg" alt="" />
      </figure>
      <div>
        <img src={badge_url as string} alt="" />
        <div>
          <h4>{title}</h4>
          <p>Por {professor}</p>
        </div>
      </div>
    </div>
  )
}

export default CourseItem