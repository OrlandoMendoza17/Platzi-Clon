import styles from './CourseTags.module.scss'

type Props = {
  title: string,
  tags: string,
}

const CourseTags = ({ title, tags }: Props) => {
  const tagList = tags.split(",")
  return (
    <section className={styles.CourseTags}>
      <h2>{title}</h2>
      <ul>
        {
          tagList.map((item, index)=>
            <li key={index}>{item}</li>
          )
        }
      </ul>
    </section>
  )
}

export default CourseTags