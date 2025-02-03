import styles from './styles/Professors.module.scss'
import Teacher, { TeacherInfo } from './Teacher'

const Professors = () => {
  
  const teachers: TeacherInfo[] = [
    {
      professor: 'Carli Florida',
      image: 'https://static.platzi.com/media/uploads/Carla_Florida_ebb63295d7.png',
      role: 'Teacher In-house en Platzi',
      course: {
        title: 'Curso de Python',
        badge: 'https://static.platzi.com/cdn-cgi/image/width=1024,quality=50,format=auto/media/achievements/piezas-landing-fundamentos-python_badge-94d12a42-85b2-4f31-a9e1-3a43775a1a73.png',
        link: '/cursos/python',
      },
    },
    {
      professor: 'Anibal Rojas',
      image: 'https://static.platzi.com/media/uploads/Anibal_Rojas_4b57a6308d.png',
      role: 'VP de Ingeniería en Platzi',
      course: {
        title: 'Curso de ChatGPT para Empresas',
        badge: 'https://static.platzi.com/cdn-cgi/image/width=1024,quality=50,format=auto/media/achievements/badge_chatgpt-63194262-82e2-43e2-9037-be6474754c94.png',
        link: '/cursos/chatgpt',
      },
    },
    {
      professor: 'Carolina Castañeda',
      image: 'https://static.platzi.com/media/uploads/Carolina_Castaneda_1935cf0de6.png',
      role: 'Online Tech Teacher en Platzi',
      course: {
        title: 'Curso de Bases de Datos con SQL',
        badge: 'https://static.platzi.com/cdn-cgi/image/width=1024,quality=50,format=auto/media/achievements/badge-fundamentos-de-bases-de-datos-cc5eff2a-a7e0-4110-af5d-a47b628611da-42_QNTHmBh.png',
        link: '/cursos/dbsql',
      },
    },
    {
      professor: 'Luis Martínez',
      image: 'https://static.platzi.com/media/uploads/Luis_Martinez_6a15bc8e42.png',
      role: 'Platform Engineer en Deel',
      course: {
        title: 'Curso de Django',
        badge: 'https://static.platzi.com/cdn-cgi/image/width=1024,quality=50,format=auto/media/achievements/badge_curso_django-7e6cf222-a74c-4ded-bf42-5151e904db8e.png',
        link: '/cursos/django',
      },
    },
  ]
  
  return (
    <section className={styles.Professors}>
      <div className={styles.Professors__container}>
        <h2>Nuestros profesores son <br /> expertos de la industria</h2>
        <div className={styles.teachers}>
          {
            teachers.map((teacher, index) =>
              <Teacher key={index} teacher={teacher} />
            )
          }
        </div>
      </div>
    </section>
  )
}

export default Professors;