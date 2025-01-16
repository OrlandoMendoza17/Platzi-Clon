import styles from './DiscoverLearningRoad.module.scss'

const DiscoverLearningRoad = () => {
  return (
    <section className={styles.DiscoverLearningRoad}>
      <h2>Descubre tu ruta de aprendizaje personalizada</h2>
      <form>
        <textarea name="" id="" placeholder="Quiero crear experiencias de usuario atractivas en la web, escribir y crear contenido"></textarea>
        <button type="submit">Generar mi ruta</button>
      </form>
    </section>
  )
}

export default DiscoverLearningRoad;