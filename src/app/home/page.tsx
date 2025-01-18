"use client"
import SchoolFilter from "@/components/home/SchoolFilter";
import AllSchool from "@/components/icons/AllSchool";
import { useEffect, useState } from "react";
import styles from '@/styles/homePage.module.scss'
import stylesFilter from '../../components/home/SchoolFilter/SchoolFilter.module.scss'
import { getSchoolFilters } from "@/services/home";
import { SchoolData, SchoolSectionsData } from "@/schemas/home";
import SchoolSection from "@/components/home/SchoolSection";
import LoggedHeader from "@/components/widgets/LoggedHeader";

const HomePage = () => {

  const [schools, setSchools] = useState<SchoolData[]>([])
  const [selectedSchool, setSelectedSchool] = useState<SchoolData | null>(null)

  const [schoolSections, setSchoolSections] = useState<SchoolSectionsData[] | null>(null)

  useEffect(() => {
    (async () => {
      const schools = await getSchoolFilters()
      setSchools(schools)
    })()
  }, [])

  const schoolsData = [
    {
      "badge_url": "https://static.platzi.com/media/learningpath/badges/58c8b016-00c0-4852-99fc-f5203fe748ff.jpg",
      "title": "Programación y Software"
    },
    {
      "badge_url": "https://static.platzi.com/media/learningpath/badges/ef0e163a-5ca4-48a2-a5df-eec4f4191838.jpg",
      "title": "Data Science e Inteligencia Artificial"
    },
    {
      "badge_url": "https://static.platzi.com/media/learningpath/badges/b7c4fcdc-df05-47ba-b5c1-8a3f1e373337.jpg",
      "title": "Desarrollo Web"
    },
    {
      "badge_url": "https://static.platzi.com/media/learningpath/badges/58ffcf7b-b6d0-4a39-988a-6b220ab18398.jpg",
      "title": "Negocios"
    },
    {
      "badge_url": "https://static.platzi.com/media/learningpath/badges/f8a934e0-e400-4ebe-9ea7-1f2064cd0e81.jpg",
      "title": "Transformación Digital"
    },
    {
      "badge_url": "https://static.platzi.com/media/learningpath/badges/6ffa5e41-5b45-4ab5-9b07-81b8e4d9b81a.jpg",
      "title": "English Academy"
    },
    {
      "badge_url": "https://static.platzi.com/media/learningpath/badges/19451906-07d5-4f58-afce-29be7804c93b.jpg",
      "title": "Marketing Digital"
    },
    {
      "badge_url": "https://static.platzi.com/media/learningpath/badges/007275f6-3e98-42f2-a1f9-a1a839cdaf0c.jpg",
      "title": "Talento y Recursos Humanos"
    },
    {
      "badge_url": "https://static.platzi.com/media/learningpath/badges/39808ba6-fa54-4e40-af35-b37e7c20bb8b.jpg",
      "title": "Blockchain y Web3"
    },
    {
      "badge_url": "https://static.platzi.com/media/learningpath/badges/3ba82f60-df82-4734-a109-7b951116d9fd.jpg",
      "title": "Contenido Audiovisual"
    },
    {
      "badge_url": "https://static.platzi.com/media/learningpath/badges/21294f19-27a8-4c8c-9fce-885c2ad4d7b2.jpg",
      "title": "Liderazgo y Management"
    },
    {
      "badge_url": "https://static.platzi.com/media/learningpath/badges/4138b2b6-1fbf-4455-8150-2b94d9fc950b.jpg",
      "title": "Startups"
    },
    {
      "badge_url": "https://static.platzi.com/media/learningpath/badges/3ec0eb68-becd-4a46-a48e-76416dcf7e44.jpg",
      "title": "Producto"
    },
    {
      "badge_url": "https://static.platzi.com/media/learningpath/badges/36d94a11-6243-41e8-a594-d89e78fdaf1d.jpg",
      "title": "Finanzas e Inversiones"
    },
    {
      "badge_url": "https://static.platzi.com/media/learningpath/badges/593f897c-b1a1-4984-bffe-44ff69fa15ca.jpg",
      "title": "DevOps y Cloud Computing"
    },
    {
      "badge_url": "https://static.platzi.com/media/learningpath/badges/0728f1c3-9dec-4b3e-bfa4-ddbc8387bba1.jpg",
      "title": "JavaScript"
    },
    {
      "badge_url": "https://static.platzi.com/media/learningpath/badges/bf1d1731-0634-4537-b83f-0580e4f07bb7.jpg",
      "title": "Ciberseguridad"
    },
    {
      "badge_url": "https://static.platzi.com/media/learningpath/badges/87b27743-9418-41c5-beb2-e808548a89c4.jpg",
      "title": "Diversidad e Inclusión"
    },
    {
      "badge_url": "https://static.platzi.com/media/learningpath/badges/7eaa3edf-960c-41f2-8018-05edbafbfce2.jpg",
      "title": "Diseño Gráfico"
    }
  ]

  return (
    <LoggedHeader>
      <main className={styles.Home}>
        <div className={styles.Home__container}>
          <h2>Descubre las escuelas</h2>
          <ul className={styles.Home__schoolFilters}>
            <li className={stylesFilter.SchoolFilter}>
              <button>
                <div className={stylesFilter.iconContainer} >
                  <AllSchool />
                </div>
                <div className={stylesFilter.title} >
                  <span>Todo</span>
                </div>
              </button>
            </li>
            {
              schools.map((school, index) =>
                <SchoolFilter
                  key={index}
                  school={school}
                  setSchoolSections={setSchoolSections}
                />
              )
            }
          </ul>
          {
            schoolSections &&
            schoolSections.map((section, index) =>
              <SchoolSection key={index} section={section} />
            )
          }
        </div>
      </main>
    </LoggedHeader>
  )
}

export default HomePage;