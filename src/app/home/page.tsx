"use client"
import SchoolFilter from "@/components/home/SchoolFilter";
import AllSchool from "@/components/icons/AllSchool";
import { useEffect, useState } from "react";
import styles from '@/styles/homePage.module.scss'
import stylesFilter from '../../components/home/SchoolFilter/SchoolFilter.module.scss'
import { getSchoolFilters } from "@/services/home";
import { SchoolData, SchoolSectionsData } from "@/schemas/home";
import SchoolSection from "@/components/home/SchoolSection";
import supabase from "@/supabase";
import { useRouter } from "next/navigation";

const HomePage = () => {

  const router = useRouter()

  const [schools, setSchools] = useState<SchoolData[]>([])
  const [selectedSchool, setSelectedSchool] = useState<SchoolData | null>(null)

  const [schoolSections, setSchoolSections] = useState<SchoolSectionsData[] | null>(null)

  useEffect(() => {
    (async () => {

      const schools = await getSchoolFilters()
      setSchools(schools)

    })()
  }, [])

  return (
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
  )
}

export default HomePage;