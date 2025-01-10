import RouteSection from '@/components/cursos/RouteSection'
import supabase from '@/supabase'
import { PostgrestError } from '@supabase/supabase-js'
import axios from 'axios'
import React from 'react'
import styles from '../../styles/cursos.module.scss'
import Header from '@/components/widgets/Header'
import Filter from '@/components/cursos/Filter'
import Categories from '@/components/cursos/Categories'
import { getCursosPageInfo } from '@/services'

const CoursesPage = async () => {
  const categories = await getCursosPageInfo()
  return (
    <main>
      <Header categories={categories} />
      <div className={styles.ui_wrapper}>
        <div id="Todaslascategorías"></div>
        <div className={styles.headline}>
          <div className="hidden md:block">
            <h1>Cursos online para trabajar en tecnología</h1>
            <p>Elige entre más de 1000 cursos online para aprender desde cero o desarrollar las habilidades más demandadas del trabajo en tecnología.</p>
          </div>
          <Filter categories={categories} />
        </div>
        <Categories {...{categories}}/>
      </div>
    </main>
  )
}

export default CoursesPage;