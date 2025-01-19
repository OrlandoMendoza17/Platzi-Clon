import styles from './Hero.module.scss'
import Search from '@/components/icons/Search'
import ChristmasAd from './ChristmasAd';
import InputSearch from './InputSearch';

const Hero = () => {
  return (
    <section className={styles.Hero}>
      <ChristmasAd />
      <h1>La escuela de tecnología <span>de Latinoamérica</span></h1>
      <p>Más de 5 millones de estudiantes y más de 3.000 empresas aprenden en Platzi</p>
      <InputSearch />
      <h6>Empieza cualquier curso sin costo. <br /> O consigue <a href="https://empresa.platzi.com/business" className="underline">Platzi para tu empresa</a></h6>
    </section>
  )
}

export default Hero