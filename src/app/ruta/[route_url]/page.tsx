import { getRoutePageInfo } from '@/services'
import ChoosePlan from '@/components/(Home)/ChoosePlan'
import Header from '@/components/widgets/Header'
import styles from '@/styles/ruta.module.scss'
import RouteHero from '@/components/ruta/RouteHero'
import RouteCourse from '@/components/ruta/RouteCourse'
import { getFirstClass } from '@/services/cursos'
import RouteAside from '@/components/ruta/RouteAside'

type Props = {
  params: Promise<{ route_url: string }>
}

const RoutePage = async ({ params }: Props) => {

  const { route_url } = await params

  // console.log('route_url', route_url)

  const route = await getRoutePageInfo(route_url)
  const courses = route.routeModules.map(({ courses }) => courses).flat()

  const firstCourse = courses[0]

  const first_class = await getFirstClass(firstCourse.id)

  // console.log('first_class', first_class)

  return (
    <main>
      <Header />
      <div className={styles.ui_wrapper}>
        <div>
          <RouteHero route={route} />
          <div className="block md:hidden">
            <RouteAside {...{ first_class, courses }} />
          </div>
          <section className="p-4 mt-4 border border-night-37 rounded-12">
            {
              route.routeModules.map((module, index) =>
                <section key={index}>
                  <h2>{module.title}</h2>
                  {
                    module.courses.map((course, index) =>
                      <RouteCourse key={index} course={course} />
                    )
                  }
                </section>
              )
            }
          </section>
        </div>
        <div className="hidden md:block">
          <RouteAside {...{ first_class, courses }} />
        </div>
      </div>
      <div className="bg-neutral-005 py-10">
        <ChoosePlan title="Suscríbete y potencia tu futuro profesional" />
      </div>
    </main>
  )
}

export default RoutePage;