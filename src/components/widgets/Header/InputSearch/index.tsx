"use client"
import { ChangeEventHandler, FocusEventHandler, FormEventHandler, useState } from 'react'
import { searchCoursesBy } from '@/services/buscar'
import { CourseData } from '@/schemas/buscar'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import MagnifyingGlass from '@/components/icons/MagnifyingGlass'
import CourseLink from '@/components/buscar/CourseLink'
import styles from './InputSearch.module.scss'

type Props = {
  alt?: boolean,
}

const InputSearch = ({ alt = false }: Props) => {

  const pathname = usePathname()
  console.log('pathname', pathname)

  const [active, setActive] = useState<boolean>(false)
  const [courses, setCourses] = useState<CourseData[]>([])

  const [inputValue, setInputValue] = useState<string>("")
  const [search, setSearch] = useState<string>("")

  const handleSearch = async (search: string) => {
    try {
      const limitSearch = 3;

      if (search) {
        const courses = await searchCoursesBy([search], limitSearch)
        setCourses(courses)
      } else {
        const courses = await searchCoursesBy(["javascript", "react"], limitSearch)
        setCourses(courses)
      }

      setActive(true)

    } catch (error) {
      console.log('error', error)
    }
  }

  const router = useRouter()

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
    router.push(`/buscar?search=${search}`)
  }

  const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    setInputValue(target.value)
    handleSearch(target.value)
    setSearch(target.value)
  }

  const handleFocus: FocusEventHandler<HTMLInputElement> = async ({ target }) => {
    try {
      const limitSearch = 3;

      if (target.value) {
        const courses = await searchCoursesBy([target.value], limitSearch)
        setCourses(courses)
      } else {
        const courses = await searchCoursesBy(["javascript", "react"], limitSearch)
        setCourses(courses)
      }

      setActive(true)

    } catch (error) {
      console.log('error', error)
    }
  }

  const handleBlur: FocusEventHandler<HTMLInputElement> = () => {
    setTimeout(() => {
      setActive(false)
    }, 200);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`${styles.InputSearch} ${alt ? styles["InputSearch--home"] : ""} ${active ? styles["InputSearch--active"] : ""}`}
    >
      <button type="submit">
        <MagnifyingGlass />
      </button>
      <input
        id="search"
        type="text"
        name="search"
        value={inputValue}
        autoComplete="off"
        placeholder="¿Qué quieres aprender?"
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <div className={styles.list}>
        {
          courses.map((course, index) =>
            <CourseLink key={index} course={course} search={true} />
          )
        }
        {
          inputValue &&
          <a
            className={styles.list__all}
            href={`/buscar?search=${search}`}
          >
            Ver todos los resultados
          </a>
        }
      </div>
    </form>
  )
}

export default InputSearch