import SchoolHero from '@/components/escuela/SchoolHero'
import SchoolSection from '@/components/escuela/SchoolSection'
import { getSchoolPageInfo } from '@/services'
import styles from '../../../styles/escuela.module.scss'
import ChoosePlan from '@/components/Home/ChoosePlan'
import SchoolSectionLinks from '@/components/escuela/SchoolSectionsLinks'
import Header from '@/components/widgets/Header'

type Props = {
  params: Promise<{ school_url: string }>
}

const SchoolsPage = async ({ params }: Props) => {
  const { school_url } = await params

  const school = await getSchoolPageInfo(school_url)

  const { schoolSections } = school

  const categoryColor = school.categories.color

  return (
    <main>
      <Header />
      <SchoolHero school={school} />
      <div className={styles.ui_wrapper}>
        <SchoolSectionLinks {...{ schoolSections }} />
        {
          schoolSections.map((section, index) =>
            <SchoolSection key={index} {...{ section, categoryColor }} />
          )
        }
      </div>
      <div className="bg-neutral-005 py-10">
        <ChoosePlan title="Suscríbete y potencia tu futuro profesional" />
      </div>
    </main>
  )
}

export default SchoolsPage;