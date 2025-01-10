import { CategoryData, RoutesData } from '@/schemas/escuela'
import styles from './RouteArticle.module.scss'
import Link from 'next/link';
import Plus from '@/components/icons/Plus';

type Props = {
  route: RoutesData;
  categoryColor: CategoryData["color"]
}

const RouteArticle = ({ route, categoryColor }: Props) => {

  const { title, description, landing_url, courses } = route

  return (
    <Link href={landing_url as string} className={styles.RouteArticle}>
      <div className={styles.RouteArticle__title}>
        <span style={{ color: categoryColor as string }}>Ruta</span>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div>
        <div className={styles.RouteArticle__courses}>
          <div className="flex items-center">
            <div className="flex">
              {courses.slice(0, 3).map(({ badge_url }, index) =>
                <img key={index} src={badge_url as string} />
              )}
              <div className={styles.RouteArticle__courses__plus_icon}>
                <Plus />
              </div>
            </div>
            <span>
              <span className="text-white font-bold">
                {courses.length}
              </span>
              {" "}
              cursos
            </span>
          </div>
          <span>•</span>
          <div>
            <span>
              <span className="text-white font-bold">
                {courses.reduce((accumulator, currentValue) => accumulator + (currentValue.duration as number), 0)}
              </span>
              {" "}
              horas
            </span>
          </div>
        </div>
        <button className={styles.RouteArticle__button}>
          Conocer ruta
        </button>
      </div>
    </Link>
  )
}

export default RouteArticle