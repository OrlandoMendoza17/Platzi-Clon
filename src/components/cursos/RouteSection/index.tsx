import { RouteData, SchoolData } from "@/schemas/cursos"
import CourseLink from "../CourseLink"
import styles from './RouteSection.module.scss'
import { getIdFromTitle } from "@/utils"

type Props = {
  route: SchoolData | RouteData,
  routes?: RouteData[]
}

const RouteSection = ({ route, routes }: Props) => {
  const { title, description, badge_url, courses,  landing_url } = route
  return (
    <section id={getIdFromTitle(title)} className={styles.RouteSection}>
      <div className={styles.RouteSection__title}>
        <figure>
          <img src={badge_url as string} alt=""/>
        </figure>
        <h3>
          <a href={landing_url as string}>{title}</a>
        </h3>
      </div>
      <p>{description}</p>
      <ul>
        {
          courses.map((course, index) => {
            return (
              <li key={index}>
                <CourseLink course={course} />
              </li>
            )
          })
        }
      </ul>
      {
        routes && (routes.length !== 0) &&
        routes.map((route, index)=>{
          return (
            <RouteSection key={index} route={route}/>
          )
        })
      }
    </section>
  )
}

export default RouteSection