import Tag from '@/components/widgets/Tag'
import styles from './CourseProfessor.module.scss'
import Teachers from '@/components/icons/Teachers'

type Props = {
  professor: Professor,
}

const CourseProfessor = ({ professor }: Props) => {
  const { name, description, image, link } = professor

  const firstName = name?.split(" ")[0]
  let details = ""
  if (professor.details) {
    details = professor.details.replaceAll("\n", "<br/>")
  }
  return (
    <section className={styles.CourseProfessor}>
      <Tag Icon={Teachers} text="Profes del curso" />
      <h2>Conoce quién enseña en el curso</h2>
      <div className={styles.CourseProfessor__container}>
        <figure>
          <img src={image as string} alt="" />
        </figure>
        <div className="flex flex-col gap-3">
          <p className={styles.CourseProfessor__name}>
            {name}
          </p>
          <p className={styles.CourseProfessor__description}>
            {description}
          </p>
          <p className={styles.CourseProfessor__details} dangerouslySetInnerHTML={{ __html: details }}>
          </p>
          <a className={styles.CourseProfessor__link} href={link as string}>
            Ver cursos de {firstName}
          </a>
        </div>
      </div>
    </section>
  )
}

export default CourseProfessor