import Header from "@/components/widgets/Header"
import styles from '../../styles/buscar.module.scss'
import { searchCoursesBy } from "@/services/buscar"
import CourseLink from "@/components/buscar/CourseLink"

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

const SearchPage = async ({ searchParams }: Props) => {

  const { search } = await searchParams

  let searchParam = ""

  if (typeof search === "string") {
    searchParam = search;
  }

  if (typeof search === "object") {
    searchParam = search[0]
  }

  console.log('search', search)
  const courses = await searchCoursesBy(searchParam)

  return (
    <div className={styles.Search}>
      <Header />
      <div className="py-5 ">
        <div className={styles.Search__ui_wrapper}>
          {
            Boolean(courses.length) ?
              <span className={styles.Search__text}>
                Esto es lo que encontramos para "{search}"
              </span>
              :
              <span className={styles.Search__text}>
                No se encontraron resultados para tu búsqueda
              </span>
          }
        </div>
      </div>
      <section className="border-t border-night-25 bg-night-12">
        <div className={`${styles.Search__ui_wrapper} py-6`}>
          <h2 className={styles.Search__title}>Cursos</h2>
          {
            courses.map((course, index) =>
              <CourseLink key={index} course={course}/>
            )
          }
        </div>
      </section>
    </div>
  )
}

export default SearchPage;