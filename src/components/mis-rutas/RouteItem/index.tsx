import { RouteData } from '@/schemas/mis-rutas'
import styles from './RouteItem.module.scss'
import Link from 'next/link'
import Trash from '@/components/icons/Trash'

type Props = {
  route: RouteData,
}

const RouteItem = ({ route }: Props) => {
  
  const {title, badge_url, landing_url, routeModules } = route
  const courses = routeModules.map(({ courses }) => courses).flat()
  
  return (
    <li className={styles.RouteItem}>
      <Link className={styles.RouteItem__container} href={landing_url as string}>
        <figure>
          <img src={badge_url as string} alt="" />
        </figure>
        <div>
          <h3>{title}</h3>
          <p>Ruta de Platzi | {courses.length} Cursos</p>
        </div>
      </Link>
      <button className={styles.RouteItem__delete}>
        <Trash />
      </button>
    </li>
  )
}

export default RouteItem