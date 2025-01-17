import { SchoolData, SchoolSectionsData } from "@/schemas/home"
import styles from './SchoolFilter.module.scss'
import { Dispatch, MouseEventHandler, SetStateAction } from "react"
import { getSchoolSections } from "@/services/home"

type Props = {
  school: SchoolData,
  setSchoolSections: Dispatch<SetStateAction<SchoolSectionsData[] | null>>,
}

const SchoolFilter = ({ school, setSchoolSections }: Props) => {
  const { id, title, badge_url } = school
  
  const handleClick: MouseEventHandler<HTMLButtonElement> = async () => {
    try {
      const schoolSections = await getSchoolSections(id)
      setSchoolSections(schoolSections)
    } catch (error) {
      alert("Ha habido un error trayendose los cursos")
    }
  }
  
  return (
    <li className={styles.SchoolFilter}>
      <button onClick={handleClick}>
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