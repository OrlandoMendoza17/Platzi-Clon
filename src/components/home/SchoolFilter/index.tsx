import { SchoolData } from "@/schemas/home"
import styles from './SchoolFilter.module.scss'

type Props = {
  school: SchoolData
}

const SchoolFilter = ({ school }: Props) => {
  const { title, badge_url } = school
  return (
    <li className={styles.SchoolFilter}>
      <button>
        <figure className={styles.iconContainer}>
          <img src={badge_url as string} alt="" />
        </figure>
        <div className={styles.title}>
          <span>{title}</span>
        </div>
      </button>
    </li>
  )
}

export default SchoolFilter