"use client"
import { useState } from "react"
import styles from './Filter.module.scss'
import CategoryFilter from "./CategoryFilter"
import SchoolsRouteFilter from "./SchoolsRouteFilter"

type Props = {
  categories: CategoryData[]
}

const Filter = ({ categories }: Props) => {
  
  const defaultObject = {
    id: 0,
    name: "Todas las categorías",
    categoryId: 0,
    created_at: '',
    description: '',
    landing_url: '',
    schools: [],
    color: "",
    color2: "",
    icon: "",
  }
  
  const defaultCategories = [defaultObject, ...categories]
  
  const [selected, setSelected] = useState<CategoryData>(defaultCategories[0])
  console.log('selected', selected)

  const schoolsRoutes = selected.schools.map((school) => {
    return [school, school.routes]
  }).flat().flat()
  
  return (
    <div className={styles.Filters}>
      <CategoryFilter categories={defaultCategories} {...{ selected, setSelected }} />
      <SchoolsRouteFilter schoolsRoutes={schoolsRoutes} selectedCategory={selected}/>
    </div>
  )
}

export default Filter