"use client"
import { ChangeEventHandler, FocusEventHandler, useEffect, useState } from 'react'
import styles from './InputSearch.module.scss'
import { searchCoursesBy } from '@/services/buscar'
import { CourseData } from '@/schemas/buscar'
import Search from '@/components/icons/Search'
import CourseLinkSearch from '../CourseLinkSearch'

type Props = {

}

const InputSearch = ({ }: Props) => {

  const SEARCH_LIMIT = 3

  const defaultSearchs = [
    "Curso de Introducción a la Inteligencia Artificial",
    "Curso de Introducción a Ciberseguridad: Prevención de Ataques Informáticos",
    "Curso de Inglés Básico A1 para Principiantes"
  ]

  const [isFocused, setIsFocused] = useState<boolean>(false)
  const [courses, setCourses] = useState<CourseData[]>([])

  const handleChange: ChangeEventHandler<HTMLInputElement> = async ({ target }) => {
    const { value } = target
    try {

      const courses = await searchCoursesBy([value], SEARCH_LIMIT)
      setCourses(courses)

    } catch (error) {
      console.log(error)
    }
  }

  const handleFocus: FocusEventHandler<HTMLInputElement> = async () => {
    try {
      
      const courses = await searchCoursesBy(defaultSearchs, SEARCH_LIMIT)
      setCourses(courses)
      setIsFocused(true)
      
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <article className={styles.InputSearch}>
      <label htmlFor="">¿Qué quieres aprender?</label>
      <div>
        <input 
          type="text" 
          onFocus={handleFocus}
          onChange={handleChange}
          onBlur={() => {
            setTimeout(() => setIsFocused(false), 200);
          }}
          placeholder="Inteligencia Artificial"
        />
        <button>
          <Search />
        </button>
      </div>
      <ul className={isFocused ? styles.list : ""}>
      {/* <ul className={styles.list}> */}
        {
          courses.map((course, index) =>
            <CourseLinkSearch key={index} course={course} />
          )
        }
      </ul>
    </article>
  )
}

export default InputSearch;