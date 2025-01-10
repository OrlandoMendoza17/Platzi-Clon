import { CategoryData, SchoolSectionsData } from '@/schemas/escuela'
import RouteArticle from '../RouteArticle'
import styles from './SchoolSection.module.scss'
import { getIdFromTitle } from '@/utils'

type Props = {
  section: SchoolSectionsData,
  categoryColor: CategoryData["color"]
}

const SchoolSection = ({ section, categoryColor }: Props) => {

  const { title, description, routes } = section
  
  return (
    <section id={getIdFromTitle(title)} className={styles.SchoolSection}>
      <hr />
      <div className={styles.SchoolSection__container}>
        <div className={styles.SchoolSection__title}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className={styles.SchoolSection__routes_container}>
          {
            routes.map((route, index) =>
              <RouteArticle key={index} {...{route, categoryColor}}/>
            )
          }
        </div>
      </div>
    </section>
  )
}

export default SchoolSection