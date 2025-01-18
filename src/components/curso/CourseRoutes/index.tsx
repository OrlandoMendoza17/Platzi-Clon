import Tag from '@/components/widgets/Tag'
import styles from './CourseRoutes.module.scss'
import ShootingStar from '@/components/icons/ShootingStar'
import CourseSchool from './CourseSchool'
import CourseRelatedRoute from './CourseRelatedRoute'
import { RouteData, SchoolData } from '@/schemas/curso'

type Props = {
  school: SchoolData,
  courseRelated_routes: RouteData[],
}

const CourseRoutes = ({ school, courseRelated_routes }: Props) => {
  return (
    <section className={styles.CourseRoutes}>
      <Tag Icon={ShootingStar} text="Eleva tu aprendizaje" />
      <h2 className="mb-8">Complementa este curso con nuestras rutas de aprendizaje</h2>
      <div className={styles.CourseRoutes__container}>
        <CourseSchool school={school} />
        {
          courseRelated_routes.map((route, index) =>
            <CourseRelatedRoute
              key={index}
              route={route}
              school={school}
            />
          )
        }
      </div>
    </section>
  )
}

export default CourseRoutes