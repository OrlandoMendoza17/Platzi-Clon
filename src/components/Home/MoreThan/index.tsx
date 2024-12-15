import styles from './MoreThan.module.scss'

const MoreThan = () => {
  return (
    <section className={styles.MoreThan}>
      <h2 className={styles.MoreThan__title}><span>Más de 3000</span> empresas usan Platzi para la formación de sus equipos</h2>
      <button className={styles.MoreThan__getADemo}>Agenda una demo</button>
    </section>
  )
}

export default MoreThan