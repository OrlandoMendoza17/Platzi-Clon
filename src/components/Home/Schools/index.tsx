
"use client"
import { useState } from 'react'
import SchoolItem, { School } from './SchoolItem'
import styles from './styles/School.module.scss'
import PointerIcon from './PointerIcon'

const Schools = () => {
  
  const [hiddenSchools, sethiddenSchools] = useState<boolean>(true)
  
  const schools: School[] = [
    {
      href: 'http://localhost:3000/escuela/datos/',
      title: 'Data Science e Inteligencia Artificial',
      color1: '#59A15B',
      color2: '#39909D',
      image: 'https://static.platzi.com/media/learningpath/emblems/1d093a9a-5203-4206-91a9-2ab466ed7e89.jpg',
    },
    {
      href: 'http://localhost:3000/escuela/ciberseguridad/',
      title: 'Ciberseguridad',
      color1: '#59A15B',
      color2: '#39909D',
      image: 'https://static.platzi.com/media/learningpath/emblems/68c4c14c-729f-4c77-9a2f-0277ef607ab8.jpg',
    },
    {
      href: 'http://localhost:3000/escuela/liderazgo-management/',
      title: 'Liderazgo y Management',
      color1: '#E16E6C',
      color2: '#E16E6C',
      image: 'https://static.platzi.com/media/learningpath/emblems/3d48737e-b3ec-47e0-aaec-34775e61d758.jpg',
    },
    {
      href: 'http://localhost:3000/escuela/ingles/',
      title: 'English Academy',
      color1: '#CD74A7',
      color2: '#CD74A7',
      image: 'https://static.platzi.com/media/learningpath/emblems/c8bf262f-e3bd-4b4f-93c3-a4144a5eb19f.jpg',
    },
    {
      href: 'http://localhost:3000/escuela/web/',
      title: 'Desarrollo Web',
      color1: '#59A15B',
      color2: '#39909D',
      image: 'https://static.platzi.com/media/learningpath/emblems/d8116873-e982-4b5d-8255-af9b08b45d72.jpg',
    },
    {
      href: 'http://localhost:3000/escuela/marketing/',
      title: 'Marketing Digital',
      color1: '#5099C0',
      color2: '#5099C0',
      image: 'https://static.platzi.com/media/learningpath/emblems/94ab7ed6-cd44-42cb-b9b1-4c1a4bda4853.jpg',
    },
    {
      href: 'http://localhost:3000/escuela/producto/',
      title: 'Producto',
      color1: '#9D82DD',
      color2: '#9D82DD',
      image: 'https://static.platzi.com/media/learningpath/emblems/d4433128-f508-483c-b5fd-6ec3da92bcba.jpg',
    },
    {
      href: 'http://localhost:3000/escuela/audiovisual/',
      title: 'Contenido Audiovisual',
      color1: '#CD843C',
      color2: '#CD843C',
      image: 'https://static.platzi.com/media/learningpath/emblems/022ae749-6c4e-4b6f-a6f3-60405502aefe.jpg',
    },
    {
      href: 'http://localhost:3000/escuela/transformacion-digital-business/',
      title: 'Transformación Digital',
      color1: '#CD843C',
      color2: '#CD843C',
      image: 'https://static.platzi.com/media/learningpath/emblems/babc2c02-ea4d-47be-b8a9-39e8399a350e.jpg',
    },
    {
      href: 'http://localhost:3000/escuela/negocios/',
      title: 'Negocios',
      color1: '#CD931D',
      color2: '#CD931D',
      image: 'https://static.platzi.com/media/learningpath/emblems/d97d6226-5800-421b-b897-11e063eec518.jpg',
    },
    {
      href: 'http://localhost:3000/escuela/recursos-humanos/',
      title: 'Talento y Recursos Humanos',
      color1: '#E16E6C',
      color2: '#E16E6C',
      image: 'https://static.platzi.com/media/learningpath/emblems/34e131e7-38c9-4ec6-8d2c-8b3a92d7f128.jpg',
    },
    {
      href: 'http://localhost:3000/escuela/startups/',
      title: 'Startups',
      color1: '#559D91',
      color2: '#559D91',
      image: 'https://static.platzi.com/media/learningpath/emblems/91a640fb-1170-451f-b5ed-9c94bb249952.jpg',
    },
    {
      href: 'http://localhost:3000/escuela/finanzas/',
      title: 'Finanzas e Inversiones',
      color1: '#CD931D',
      color2: '#CD931D',
      image: 'https://static.platzi.com/media/learningpath/emblems/c9e023b0-d7f0-41c3-b55c-1bb1db3e6900.jpg',
    },
    {
      href: 'http://localhost:3000/escuela/diversidad/',
      title: 'Diversidad e Inclusión',
      color1: '#E16E6C',
      color2: '#E16E6C',
      image: 'https://static.platzi.com/media/learningpath/emblems/24166776-63e9-4595-a512-b826b3526bf1.jpg',
    },
    {
      href: 'http://localhost:3000/escuela/devops-cloud/',
      title: 'DevOps y Cloud Computing',
      color1: '#59A15B',
      color2: '#39909D',
      image: 'https://static.platzi.com/media/learningpath/emblems/35ad4e7b-ee64-494c-8b8c-7014a9bdff0f.jpg',
    },
    {
      href: 'http://localhost:3000/escuela/javascript/',
      title: 'JavaScript',
      color1: '#59A15B',
      color2: '#39909D',
      image: 'https://static.platzi.com/media/learningpath/emblems/26a9c51f-127f-4867-9f93-64c92f68bec4.jpg',
    },
    {
      href: 'http://localhost:3000/escuela/programacion-software/',
      title: 'Programación y Software',
      color1: '#59A15B',
      color2: '#39909D',
      image: 'https://static.platzi.com/media/learningpath/emblems/ae12b8cc-5e3b-4754-82ad-bc7910aa40c2.jpg',
    },
    {
      href: 'http://localhost:3000/escuela/blockchain/',
      title: 'Blockchain y Web3',
      color1: '#59A15B',
      color2: '#39909D',
      image: 'https://static.platzi.com/media/learningpath/emblems/29a5cd6e-d8cd-4ceb-8aa5-58e75f30aa2a.jpg',
    },
    {
      href: 'http://localhost:3000/escuela/diseno/',
      title: 'Diseño Gráfico',
      color1: '#9D82DD',
      color2: '#9D82DD',
      image: 'https://static.platzi.com/media/learningpath/emblems/43463fc6-1164-492d-b88e-1831160ec5ac.jpg',
    },
  ]
  
  return (
    <section className={`${styles.Schools}`}>
      <ul className={hiddenSchools ? styles.Schools__hidden_items : ""}>
        {schools.map((item, index)=>
          <SchoolItem 
            key={index} 
            school={item}
            hiddenSchools={hiddenSchools}
          />
        )}
      </ul>
      <button onClick={() => sethiddenSchools(!hiddenSchools)}>
        {hiddenSchools ? <>Ver todas las escuelas <PointerIcon/></> : <>Ver las más populares <PointerIcon/></>}
      </button>
    </section>
  )
}

export default Schools