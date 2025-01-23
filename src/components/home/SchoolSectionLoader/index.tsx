import styles from './SchoolSectionLoader.module.scss'

const SchoolSectionLoader = () => {
  const placeholderCourses = Array(19).fill(0)
  return (
    <div className={styles.SchoolSectionLoader}>
      <div className={styles.SchoolSectionLoader__title}></div>
      <ul className="grid grid-flow-col justify-start gap-6 overflow-hidden">
        {
          placeholderCourses.map((_, index) =>
            <li key={index} className={styles.SchoolSectionLoader__courseItem}>
              <div className={styles.SchoolSectionLoader__courseItem__classImage}></div>
              <div className="grid grid-cols-[auto,1fr] gap-3">
                <div className={styles.SchoolSectionLoader__courseItem__badge}></div>
                <div className={styles.SchoolSectionLoader__courseItem__title}>
                  <div className="w-[100%]"></div>
                  <div className="w-[73%]"></div>
                  <div className="w-[50%]"></div>
                </div>
              </div>
            </li>
          )
        }
      </ul>
    </div>
  )
}

export default SchoolSectionLoader