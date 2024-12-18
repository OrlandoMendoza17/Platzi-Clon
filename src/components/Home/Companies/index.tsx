import styles from './Companies.module.scss'

const Companies = () => {
  
    const companies = [
      "https://static.platzi.com/cdn-cgi/image/width=384,quality=75,format=auto/ms-landings-admin/media/davivienda_a4d7872c1c.svg",
      "https://static.platzi.com/cdn-cgi/image/width=256,quality=75,format=auto/ms-landings-admin/media/Fundacion_grupo_social_0aa7561224.svg",
      "https://static.platzi.com/cdn-cgi/image/width=96,quality=75,format=auto/ms-landings-admin/media/grupoexito_024e3d77b4.svg",
      "https://static.platzi.com/cdn-cgi/image/width=256,quality=75,format=auto/ms-landings-admin/media/gruposura_e9e5efdf0b.svg",
      "https://static.platzi.com/cdn-cgi/image/width=128,quality=75,format=auto/ms-landings-admin/media/mapfre_3fabe6a7f0.svg",
      "https://static.platzi.com/cdn-cgi/image/width=128,quality=75,format=auto/ms-landings-admin/media/rappi_0cce7f9f43.svg",
      "https://static.platzi.com/media/uploads/avianca_86876f8bb8.svg",
      "https://static.platzi.com/cdn-cgi/image/width=256,quality=75,format=auto/ms-landings-admin/media/Lenovo_65f74f30af.svg",
      "https://static.platzi.com/media/uploads/bancolombia_114ce59ab3.svg",
      "https://static.platzi.com/cdn-cgi/image/width=384,quality=75,format=auto/ms-landings-admin/media/colsubsidio_9e843d8531.svg",
    ]
  
  return (
    <section className={styles.Companies}>
      <div className={styles.Companies__container}>
        <div className={styles.Companies__container__sliderItem}>
          {
            companies.map((imageSrc, index)=>
              <figure key={index}>
                <img src={imageSrc} alt="" />
              </figure>
            )
          }
        </div>
        <div className={styles.Companies__container__sliderItem}>
          {
            companies.map((imageSrc, index)=>
              <figure key={index}>
                <img src={imageSrc} alt="" />
              </figure>
            )
          }
        </div>
        <div className={styles.Companies__container__sliderItem}>
          {
            companies.map((imageSrc, index)=>
              <figure key={index}>
                <img src={imageSrc} alt="" />
              </figure>
            )
          }
        </div>
      </div>
    </section>
  )
}

export default Companies