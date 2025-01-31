import { getMyRoutes } from '@/services/mis-rutas'
import styles from './RoutesSection.module.scss'
import { createClient } from '@/supabase/server'
import RouteItem from '../RouteItem'

const RoutesSection = async () => {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (user) {
    const routes = await getMyRoutes(user.id)
    return (
      <section className={styles.RoutesSection}>
        <div className="mb-4 flex justify-between">
          <h1 className="text-headline-md">Mis Rutas</h1>
          <button className={styles.RoutesSection__button}>
            Crear una ruta
          </button>
        </div>
        <hr className="border-neutral-020" />
        {
          Boolean(routes.length) ?
            <ul className="mt-4">
              {
                routes.map((route, index) =>
                  <RouteItem key={index} route={route} />
                )
              }
            </ul>
            :
            <div className={styles.RoutesSection__noRoutes}>
              <h3>Todavía no tienes cursos en esta ruta. <br /> Agrega una personalizada que te llame la atención o crea una desde cero.</h3>
              <button className={styles.RoutesSection__button}>
                Crear una ruta
              </button>
            </div>
        }
      </section>
    )
  } else {
    return <></>
  }
}

export default RoutesSection