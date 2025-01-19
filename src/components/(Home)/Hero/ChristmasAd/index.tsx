import styles from './ChristmasAd.module.scss'

const ChristmasAd = () => {
  return (
    <div className={styles.ChristmasAd}>
      <div className={styles.ChristmasAd__description}>
        <figure>
          <img src="https://static.platzi.com/media/banners/Blue_variation_tiny.png" alt="" />
        </figure>
        <div className="flex flex-col">
          <p>Invierte en tu educación con el precio especial</p>
          <p>Ahorra: <img className={styles.ChristmasAd__usaBadge} src="https://static.platzi.com/media/flags/US.png" alt="" /> <span className="text-[#362ae3]">$40</span> en Plan expert <span className="ml-[.375rem] pl-[.375rem] border-l border-neutral-005 hidden md:inline">Paga a <span className="text-[#362ae3]">4 cuotas sin intereses</span></span></p>
        </div>
      </div>
      <p className={`${styles.ChristmasAd__countdown}`}>
        <span>Termina en:</span>
        <span className="flex gap-3 text-[#FDC05B]">
          <span>11 días</span>
          <span>23 hrs</span>
          <span>33 min</span>
          <span>37 seg</span>
        </span>
      </p>
    </div>
  )
}

export default ChristmasAd