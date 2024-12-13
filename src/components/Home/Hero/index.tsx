import styles from './styles/Hero.module.scss'
import Search from '@/components/icons/Search'
import { LuSearch } from "react-icons/lu";
import ChristmasAd from './ChristmasAd';


const Hero = () => {
  return (
    <section className={styles.Hero}>
      <ChristmasAd />
      <h1>La escuela de tecnología <span>de Latinoamérica</span></h1>
      <p>Más de 5 millones de estudiantes y más de 3.000 empresas aprenden en Platzi</p>
      <article>
        <label htmlFor="">¿Qué quieres aprender?</label>
        <div>
          <input type="text" placeholder="Inteligencia Artificial"/>
          {/* icon */}
        </div>
        <button>
          <Search />
        </button>
      </article>
      <h6>Empieza cualquier curso sin costo. <br /> O consigue <a href="" className="underline">Platzi para tu empresa</a></h6>
    </section>
  )
}

export default Hero