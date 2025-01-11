import { RoutesModuleData } from "@/schemas/ruta"

type Props = {
  routeModule: RoutesModuleData,
}

const RouteModule = ({routeModule}:Props) => {
  return (
    <section>
      <h2>{routeModule.title}</h2>
      {
        routeModule.courses.map((course, index) =>
          <div key={index}>
            <figure style={{ width: "32px", height: "32px", }}>
              <img src={course.badge_url as string} alt="" />
            </figure>
            <div>
              <h3>
                {course.title}
              </h3>
              <p>{course.duration} de contenido {course.practice_time} de práctica</p>
            </div>
          </div>
        )
      }
    </section>
  )
}

export default RouteModule