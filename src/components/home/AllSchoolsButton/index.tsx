import AllSchool from '@/components/icons/AllSchool'
import { Dispatch, MouseEventHandler, SetStateAction } from 'react'
import stylesFilter from '../SchoolFilter/SchoolFilter.module.scss'
import { SchoolData, SchoolSectionsData } from '@/schemas/home'
import { searchCoursesBy } from '@/services/buscar'

type Props = {
  selectedSchool: SchoolData | null,
  handleSearchCourses: () => Promise<void>
}

const AllSchoolsButton = ({ selectedSchool, handleSearchCourses }: Props) => {

  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    handleSearchCourses()
  }

  return (
    <li className={stylesFilter.SchoolFilter}>
      <button onClick={handleClick}>
        <div className={`${stylesFilter.iconContainer} ${!selectedSchool ? "!bg-white" : ""}`} >
          <AllSchool className={!selectedSchool ? "!text-black" : ""} />
        </div>
        <div className={stylesFilter.title} >
          <span>Todo</span>
        </div>
      </button>
    </li>
  )
}

export default AllSchoolsButton