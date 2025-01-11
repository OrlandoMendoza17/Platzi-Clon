import { CoursesShortData, ProfessorData } from '@/schemas/ruta'
import styles from './RouteAside.module.scss'
import Book from '@/components/icons/Book'
import RouteProfessors from './RouteProfessors'

type Props = {
  first_class: CourseClass,
  courses: CoursesShortData[],
}

const RouteAside = ({ first_class, courses }: Props) => {

  const professors = courses.map(({ professors }) => professors)

  const unrepeatedProfessorNames = [...new Set(professors.map(({ name }) => name))]

  const unrepeatedProfessors = unrepeatedProfessorNames.map((professorName) => {
    const foundProfessor = professors.find((professor) => professorName === professor.name)
    return foundProfessor;
  }) as ProfessorData[]

  return (
    <div className={styles.RouteAside}>
      <img src={first_class.image as string} alt="" />
      <div className={styles.RouteAside__headline}>
        <h2>{first_class.title}</h2>
        <div className="grid grid-cols-[auto,1fr] gap-1">
          <figure>
            <img src={courses[0].badge_url as string} alt="" />
          </figure>
          <p>{courses[0].title}</p>
        </div>
      </div>
      <div className={styles.RouteAside__courses}>
        <figure>
          <Book />
        </figure>
        <p>{courses.length} cursos</p>
      </div>
      <RouteProfessors professors={unrepeatedProfessors} />
    </div>
  )
}

export default RouteAside