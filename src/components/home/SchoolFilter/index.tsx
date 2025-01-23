import { SchoolData, SchoolSectionsData } from "@/schemas/home"
import styles from './SchoolFilter.module.scss'
import { Dispatch, MouseEventHandler, SetStateAction } from "react"
import { getSchoolSections } from "@/services/home"

type Props = {
  school: SchoolData,
  setSchoolSections: Dispatch<SetStateAction<SchoolSectionsData[]>>,
  setLoadingSchool: Dispatch<SetStateAction<boolean>>,
  selectedSchool: SchoolData | null,
  setSelectedSchool: Dispatch<SetStateAction<SchoolData | null>>,
}

const SchoolFilter = (props: Props) => {
  const { school, selectedSchool } = props
  const { setSchoolSections, setLoadingSchool, setSelectedSchool } = props
  const { id, title, badge_url } = school
  
  const handleClick: MouseEventHandler<HTMLButtonElement> = async () => {
    try {
      setLoadingSchool(true)
      setSelectedSchool(school)
      
      const schoolSections = await getSchoolSections(id)
      setSchoolSections(schoolSections)
      
      setLoadingSchool(false)
    } catch (error) {
      setLoadingSchool(false)
      alert("Ha habido un error trayendose los cursos")
    }
  }
  
  const selected = selectedSchool?.id === school?.id
  
  return (
    <li className={styles.SchoolFilter}>
      <button className={`${styles[`category_${school?.categories.id}`]}`} onClick={handleClick}>
      {/* <button className={styles.category_5} onClick={handleClick}> */}
        <figure className={`${styles.iconContainer} ${selected ? styles.selected : ""}`}>
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