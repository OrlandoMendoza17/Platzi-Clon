import Header from "@/components/widgets/Header"
import styles from '@/styles/buscar.module.scss'
import { searchCoursesBy } from "@/services/buscar"
import CourseLink from "@/components/buscar/CourseLink"
import { CourseData } from "@/schemas/buscar"

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

const SearchPage = async ({ searchParams }: Props) => {

  const defaultSearchs = [
    "Curso de Inglés Básico A1 para Principiantes",
    "Curso de Habilidades Blandas para el Desarrollo Profesional",
    "Curso de Bases de Datos con SQL",
    "Curso Gratis de Estrategias para Aprender Inglés en Línea",
    "Curso de Git y GitHub",
    "Curso de Java",
    "Curso de Python",
    "Curso de ChatGPT",
    "Curso de Introducción a la Inteligencia Artificial",
    "Curso de Excel Básico: Tablas y Fórmulas para la Gestión de Datos"
  ]

  const { search } = await searchParams

  let searchParam = ""

  if (typeof search === "string") {
    searchParam = search;
  }

  if (typeof search === "object") {
    console.clear()
    console.log('search', search)
    searchParam = search[0]
  }

  let courses: CourseData[] = []
  console.log('search', search)
  if (search === "" || search === undefined) {
    const SEARCH_LIMIT = 10
    courses = await searchCoursesBy(defaultSearchs, SEARCH_LIMIT)
  } else {
    courses = await searchCoursesBy([searchParam])
  }

  return (
    <div className={styles.Search}>
      <Header />
      <div className="py-5 ">
        <div className={styles.Search__ui_wrapper}>
          {
            search !== "" && search !== undefined ?
              Boolean(courses.length) ?
                <span className={styles.Search__text}>
                  Esto es lo que encontramos para "{typeof search === "object" ? search[0] : search}"
                </span>
                :
                <span className={styles.Search__text}>
                  No se encontraron resultados para tu búsqueda
                </span>
              :
              <span className={styles.Search__text}>
                Encuentra tu próximo curso
              </span>
          }
        </div>
      </div>
      <section className="border-t border-night-25 bg-night-12">
        <div className={`${styles.Search__ui_wrapper} py-6`}>
          <h2 className={styles.Search__title}>Cursos</h2>
          {
            courses.map((course, index) =>
              <CourseLink key={index} course={course} />
            )
          }
        </div>
      </section>
    </div>
  )
}

export default SearchPage;