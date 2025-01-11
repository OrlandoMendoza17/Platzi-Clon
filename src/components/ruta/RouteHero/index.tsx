import { RouteData } from '@/schemas/ruta'
import styles from './RouteHero.module.scss'

type Props = {
  route: RouteData,
}

const RouteHero = ({ route }: Props) => {
  return (
    <section className={styles.RouteHero}>
      <span style={{color: route.categories.color || ""}}>Ruta</span>
      <h1>{route.title}</h1>
      <p>{route.description}</p>
    </section>
  )
}

export default RouteHero