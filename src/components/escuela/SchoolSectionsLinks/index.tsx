import { SchoolSectionsData } from '@/schemas/escuela'
import { getIdFromTitle } from '@/utils'
import Link from 'next/link'
import styles from './SchoolSectionsLinks.module.scss'

type Props = {
  schoolSections: SchoolSectionsData[],
}

const SchoolSectionLinks = ({ schoolSections }: Props) => {
  return (
    <nav className={styles.SchoolSectionsLinks}>
      <ul className={styles.SchoolSectionsLinks__container}>
        {schoolSections.map((section, index) =>
          <li key={index}>
            <Link href={`#${getIdFromTitle(section.title)}`}>
              {section.title}
            </Link>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default SchoolSectionLinks