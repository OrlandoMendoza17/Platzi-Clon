import { SchoolData } from "@/schemas/escuela"
import stylesSchool from '@/styles/escuela.module.scss'
import styles from './SchoolHero.module.scss'

type Props = {
  school: SchoolData
}

const SchoolHero = ({ school }: Props) => {
  return (
    <div className={styles.SchoolHero} style={{backgroundImage: `url(${school.backgroundImage})`}}>
      <div className={stylesSchool.ui_wrapper}>
        <div className={styles.SchoolHero__container}>
          <div className={styles.SchoolHero__container__headline}>
            <figure>
              <img src={school.badge_url as string} alt="" />
            </figure>
            <div>
              <span style={{color: school.categories.color as string}}>Escuela</span>
              <h1>{school.title}</h1>
            </div>
          </div>
          <p ></p>
          <p dangerouslySetInnerHTML={{__html: school.description as string}}></p>
          <button>Seguir la Escuela</button>
        </div>
      </div>
    </div>
  )
}

export default SchoolHero