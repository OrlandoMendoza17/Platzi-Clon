import styles from './SchoolFilterLoader.module.scss'

const SchoolFilterLoader = () => {
  const placeholderFilters = Array(19).fill(0)
  return (
    <>
      {
        placeholderFilters.map((_, index) => 
          <li key={index} className={styles.SchoolFilterLoader}>
            <div className={styles.SchoolFilterLoader__badge}></div>
            <div className={styles.SchoolFilterLoader__title}></div>
          </li>
        )
      }
    </>
  )
}

export default SchoolFilterLoader