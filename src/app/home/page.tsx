"use client"
import SchoolFilter from "@/components/home/SchoolFilter";
import AllSchool from "@/components/icons/AllSchool";
import { MouseEventHandler, useEffect, useState } from "react";
import { getSchoolFilters } from "@/services/home";
import { SchoolData, SchoolSectionsData } from "@/schemas/home";
import { useRouter } from "next/navigation";
import SchoolSection from "@/components/home/SchoolSection";
import styles from '@/styles/homePage.module.scss'
import stylesFilter from '../../components/home/SchoolFilter/SchoolFilter.module.scss'
import SchoolFilterLoader from "@/components/home/SchoolFilterLoader";
import SchoolSectionLoader from "@/components/home/SchoolSectionLoader";
import AllSchoolsButton from "@/components/home/AllSchoolsButton";
import { searchCoursesBy } from "@/services/buscar";

const HomePage = () => {

  const router = useRouter()

  const [schools, setSchools] = useState<SchoolData[]>([])
  const [selectedSchool, setSelectedSchool] = useState<SchoolData | null>(null)

  const [loadingFilters, setLoadingFilters] = useState<boolean>(false)
  const [loadingSchool, setLoadingSchool] = useState<boolean>(false)

  const [schoolSections, setSchoolSections] = useState<SchoolSectionsData[]>([])

  const placeholderSections = Array(4).fill(0)
  
  const coursesToSearch = [
    [
      "Curso de Inglés Básico A1 para Principiantes",
      "Curso de Habilidades Blandas para el Desarrollo Profesional",
      "Curso de Bases de Datos con SQL",
      "Curso Gratis de Estrategias para Aprender Inglés en Línea",
      "Curso Profesional de Git y Github",
      "Curso de Java",
      "Curso de Python",
      "Curso de ChatGPT",
      "Curso de Introducción a la Inteligencia Artificial",
      "Curso de Excel Básico: Tablas y Fórmulas para la Gestión de Datos"
    ],
    [
      "Curso de Inglés Básico A1 para Principiantes",
      "Curso de ChatGPT",
      "Curso de Python",
      "Curso Gratis de Estrategias para Aprender Inglés en Línea",
      "Curso de Excel Básico: Tablas y Fórmulas para la Gestión de Datos",
      "Curso de Habilidades Blandas para el Desarrollo Profesional",
      "Curso de Power BI",
      "Curso de Fundamentos de JavaScript",
      "Curso de Introducción a Educación Financiera",
      "Curso de Pensamiento Lógico: Algoritmos y Diagramas de Flujo"
    ]
  ]
  
  useEffect(() => {
    (async () => {
      setLoadingFilters(true)

      const schools = await getSchoolFilters()
      setSchools(schools)

      setLoadingFilters(false)
    })()
  }, [])

  useEffect(() => {
    handleSearchCourses()
  }, [])

  const handleSearchCourses = async () => {
    try {
      setSelectedSchool(null)
      setLoadingSchool(true)
      const courses1 = await searchCoursesBy(coursesToSearch[0])
      const courses2 = await searchCoursesBy(coursesToSearch[1])

      const recomendedSection: SchoolSectionsData = {
        title: "",
        routes: [
          {
            title: "Cursos recomendados para ti",
            landing_url: "",
            courses: courses1
          },
          {
            title: "Nuestros mejores cursos",
            landing_url: "",
            courses: courses2,
          }
        ]
      }

      setSchoolSections([recomendedSection])
      setLoadingSchool(false)
    } catch (error) {
      setLoadingSchool(false)
      console.log('error', error)
    }
  }

  return (
    <main className={styles.Home}>
      <div className={styles.Home__container}>
        <h2>Descubre las escuelas</h2>
        <ul className={styles.Home__schoolFilters}>
          {
            loadingFilters ?
              <SchoolFilterLoader />
              :
              <>
                <AllSchoolsButton
                  {...{
                    selectedSchool,
                    handleSearchCourses
                  }}
                />
                {
                  schools.map((school, index) =>
                    <SchoolFilter
                      key={index}
                      school={school}
                      setSchoolSections={setSchoolSections}
                      setLoadingSchool={setLoadingSchool}
                      selectedSchool={selectedSchool}
                      setSelectedSchool={setSelectedSchool}
                    />
                  )
                }
              </>
          }

        </ul>
        {
          loadingSchool ?
            placeholderSections.map((_, index) =>
              <SchoolSectionLoader key={index} />
            )
            :
            schoolSections.map((section, index) =>
              <SchoolSection
                key={index}
                section={section}
              />
            )
        }
      </div>
    </main>
  )
}

export default HomePage;