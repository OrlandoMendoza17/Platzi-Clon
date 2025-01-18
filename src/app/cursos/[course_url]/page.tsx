import { getCourse } from "@/services/cursos"
import LandingHeader from "@/components/(Home)/LandingHeader"
import CourseInfo from "@/components/curso/CourseInfo"
import CourseSection from "@/components/curso/CourseSection"
import CourseProfessor from "@/components/curso/CourseProfessor"
import CourseCertificate from "@/components/curso/CourseCertificate"
import CourseProject from "@/components/curso/CourseProject"
import CourseTags from "@/components/curso/CourseTags"
import CourseOpinions from "@/components/curso/CourseOpinions"
import CourseRoutes from "@/components/curso/CourseRoutes"
import CourseAside from "@/components/curso/CourseAside"
import styles from '@/styles/curso.module.scss'

type Props = {
  params: Promise<{ course_url: string }>
}

const CoursePage = async ({ params }: Props) => {

  const { course_url } = await params
  const course = await getCourse(course_url)

  const classes: CourseClass[] = course.courseSections.map(({ courseClasses }) => {
    return courseClasses
  }).flat()

  const countClasses = classes.length

  const { schools, courseRelated_routes } = course
  const { courseProject, prior_knowledge, software_requirements } = course

  return (
    <div>
      <LandingHeader />
      <main className={styles.Course}>
        <div className={styles.Course__container}>
          <div className="grid gap-y-6 relative">
            <img  className={styles.Course__backgroundImage} src="https://static.platzi.com/media/uploads/gradient_hero_2500ec75e1.webp" alt="" />
            <CourseInfo course={course} countClasses={countClasses} />
            <section>
              <p className="font-medium text-2xl">Clases del cursos</p>
              <section className="pl-4">
                {
                  course.courseSections.map((courseSection, index) =>
                    <CourseSection
                      key={index}
                      classes={classes}
                      courseSection={courseSection}
                    />
                  )
                }
              </section>
            </section>
            <CourseCertificate certificate={course.certificate as string} />
            {
              course.professors &&
              <CourseProfessor professor={course.professors} />
            }
            {
              Boolean(courseProject.length) &&
              <CourseProject courseProject={courseProject[0]} />
            }
            {
              prior_knowledge &&
              <CourseTags title="conocimientos previos" tags={prior_knowledge} />
            }
            {
              software_requirements &&
              <CourseTags title="software y recursos necesarios" tags={software_requirements} />
            }
          </div>
          <CourseAside classes={classes} />
        </div>
        <CourseOpinions course={course} />
        <CourseRoutes 
          school={schools} 
          courseRelated_routes={courseRelated_routes} 
        />
      </main>
    </div>
  )
}

export default CoursePage