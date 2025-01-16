import styles from './styles/Teacher.module.scss'

export type TeacherInfo = {
  professor: string;
  image: string;
  role: string;
  course: {
    title: string;
    badge: string;
    link: string;
  };
}

type Props = {
  teacher: TeacherInfo,
}

const Teacher = ({ teacher }: Props) => {
  const { professor, role, image, course } = teacher
  return (
    <a href={course.link}>
      <article className={styles.Teacher}>
        <figure>
          <img src={image} alt="" />
        </figure>
        <div className={styles.Teacher__container}>
          <h3>{professor}</h3>
          <p>{role}</p>
          <div className={styles.Teacher__course}>
            <figure>
              <img src={course.badge} alt="" />
            </figure>
            <p>{course.title}</p>
            <svg width="1em" height="1em" fill="none" viewBox="0 0 18 18">
              <path fill="#C4C8CE" d="M4.586 15.173 5.914 16.5l7.5-7.5-7.5-7.5-1.328 1.328L10.76 9z" />
            </svg>
          </div>
        </div>
      </article>
    </a>
  )
}

export default Teacher