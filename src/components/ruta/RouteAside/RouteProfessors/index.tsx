"use client"
import { ProfessorData } from '@/schemas/ruta'
import styles from '../RouteAside.module.scss'
import { useState } from 'react'

type Props = {
  professors: ProfessorData[],
}

const RouteProfessors = ({ professors }: Props) => {

  const [showAdditionals, setShowAdditionals] = useState<boolean>(false)

  return (
    <div className="py-3 px-4 bg-primary-night">
      <div className="grid grid-cols-[1fr,auto]">
        <p className={styles.RouteAside__professors}>
          Quien enseña en la ruta
        </p>
        <button className="text-primary-sky text-[.875rem]" onClick={() => setShowAdditionals(!showAdditionals)}>
          Ver más
        </button>
      </div>
      <ul>
        {
          professors.map((professor, index) =>
            <li key={index} className={(index < 3) ? "block" : (showAdditionals ? "block" : "hidden" )}>
              <a href={professor.link as string} className={styles.RouteAside__professorLink}>
                <figure>
                  <img src={professor.image as string} alt="" />
                </figure>
                <span>{professor.name}</span>
              </a>
            </li>
          )
        }
      </ul>
    </div>
  )
}

export default RouteProfessors