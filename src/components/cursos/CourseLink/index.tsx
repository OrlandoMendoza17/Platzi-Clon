import styles from './CourseLink.module.scss'

type Props = {
  course: CourseShortData,
}

const CourseLink = ({ course }: Props) => {
  
  const { title, badge_url, professor, first_class } = course
  
  return (
    <a href={`https://platzi.com${first_class as string}`} className={styles.CourseLink}>
      <figure>
        <img src={badge_url as string} alt="" />
      </figure>
      <div>
        <h4>{title}</h4>
        <p>Por {professor}</p>
      </div>
    </a>
  )
}

export default CourseLink;