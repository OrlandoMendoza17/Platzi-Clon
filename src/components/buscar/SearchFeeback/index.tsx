import { CourseData } from '@/schemas/buscar'
import styles from './SearchFeeback.module.scss'
import stylesPage from '@/styles/buscar.module.scss'

type Props = {
  courses: CourseData[],
  search: string | string[] | undefined,
}

const SearchFeeback = ({ search, courses }: Props) => {
  return (
    <div className={styles.SearchFeeback}>
      <div className={stylesPage.Search__ui_wrapper}>
        {
          search !== "" && search !== undefined ?
            Boolean(courses.length) ?
              <span className={styles.SearchFeeback__text}>
                Esto es lo que encontramos para "{typeof search === "object" ? search[0] : search}"
              </span>
              :
              <span className={styles.SearchFeeback__text}>
                No se encontraron resultados para tu búsqueda
              </span>
            :
            <span className={styles.SearchFeeback__text}>
              Encuentra tu próximo curso
            </span>
        }
      </div>
    </div>
  )
}

export default SearchFeeback