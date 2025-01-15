import styles from './CourseProject.module.scss'

type Props = {
  courseProject: CourseProject,
}

const CourseProject = ({ courseProject }: Props) => {
  const { title, description, link, image } = courseProject
  return (
    <section className={styles.CourseProject}>
      <h2>Proyecto del curso</h2>
      <div className={styles.CourseProject__container}>
        <figure className="justify-self-center">
          <img src={image as string} alt="" />
        </figure>
        <div className="flex flex-col gap-2">
          <h3>{title}</h3>
          <p>{description}</p>
          <a href={link as string}>
            Ver proyecto
          </a>
        </div>
      </div>
    </section>
  )
}

export default CourseProject