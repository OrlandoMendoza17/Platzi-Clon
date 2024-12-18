import styles from './MoreThan.module.scss'

const MoreThan = () => {
  return (
    <section className={styles.MoreThan}>
      <h2 className={styles.MoreThan__title}><span>Más de 3000</span> empresas usan Platzi para la formación de sus equipos</h2>
      <a className={`${styles.MoreThan__getADemo} ${styles["MoreThan__getADemo--secondary"]}`} href="https://platzi.com/business/precios/">
        Agenda una demo
      </a>
    </section>
  )
}

export default MoreThan