"use client"
import { useEffect, useState } from 'react'
import FeatureItem, { Feature } from './FeatureItem'
import styles from './WeAreAuthority.module.scss'

const WeAreAuthority = () => {

  const data: Feature[] = [
    {
      label: 'Aprende algo nuevo cada 5 minutos',
      image: "https://static.platzi.com/media/uploads/1_aprendealgo_2e55c5a545.png",
      svg: <svg width="1em" height="1em" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" fillRule="evenodd" d="M11.68 10.895v4.209L15.237 13zm.7-1.184a1.375 1.375 0 0 0-2.076 1.184v4.209a1.375 1.375 0 0 0 2.075 1.184l3.558-2.105c.9-.532.9-1.835 0-2.367z" clipRule="evenodd" /><path fill="#fff" fillRule="evenodd" d="M7.5 5.438c-1.14 0-2.062.923-2.062 2.062v11c0 1.14.923 2.063 2.062 2.063h11c1.14 0 2.063-.924 2.063-2.063v-11c0-1.14-.924-2.062-2.063-2.062zM4.063 7.5A3.437 3.437 0 0 1 7.5 4.063h11A3.437 3.437 0 0 1 21.938 7.5v11a3.437 3.437 0 0 1-3.438 3.438h-11A3.437 3.437 0 0 1 4.063 18.5z" clipRule="evenodd" /></svg>,
    },
    {
      label: 'Rutas profesionales te guían de principiante a profesional',
      image: "https://static.platzi.com/media/uploads/2_rutas_79462a32e1.png",
      svg: <svg width="1em" height="1em" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path fill="#0AE98A" fillRule="evenodd" d="M30 27.949a2.692 2.692 0 1 0 0 5.384 2.692 2.692 0 0 0 0-5.384m-5 2.692a5 5 0 1 1 10 0 5 5 0 0 1-10 0m-13.461-25a4.23 4.23 0 0 0-4.231 4.23c0 .884.514 1.949 1.378 3.057.83 1.064 1.852 2.006 2.597 2.63a.43.43 0 0 0 .51 0c.745-.624 1.768-1.565 2.598-2.63.864-1.108 1.378-2.173 1.378-3.056a4.23 4.23 0 0 0-4.23-4.23M5 9.871a6.538 6.538 0 0 1 13.077 0c0 1.674-.914 3.254-1.866 4.476-.98 1.256-2.15 2.324-2.958 2.997l-.029.024a2.74 2.74 0 0 1-3.403-.025c-.806-.673-1.977-1.74-2.956-2.997C5.913 13.124 5 11.545 5 9.872m15.385 2.309c0-.638.516-1.154 1.153-1.154h3.077a5.77 5.77 0 0 1 0 11.538h-9.23a3.462 3.462 0 0 0 0 6.923H20a1.154 1.154 0 1 1 0 2.308h-4.615a5.77 5.77 0 0 1 0-11.538h9.23a3.462 3.462 0 0 0 0-6.924H21.54a1.154 1.154 0 0 1-1.154-1.153" clipRule="evenodd" /><path fill="#0AE98A" d="M11.539 11.41a1.538 1.538 0 1 0 0-3.077 1.538 1.538 0 0 0 0 3.077" /></svg>,
    },
    {
      label: 'Pon a prueba tu progreso de forma interactiva',
      image: "https://static.platzi.com/media/uploads/3_Playground_e47dd35017.png",
      svg: <svg width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#C4C8CE" fillRule="evenodd" d="M17 9.5a.705.705 0 0 1 0 .998l-4 4.001a.705.705 0 0 1-1.013-.016L10 12.363l-1.987 2.12a.705.705 0 0 1-1.028-.964l2.5-2.668a.705.705 0 0 1 1.03 0l2.003 2.136 3.486-3.486a.705.705 0 0 1 .997 0" clipRule="evenodd" /><path fill="#C4C8CE" fillRule="evenodd" d="M2.246 7.996a5.75 5.75 0 0 1 5.75-5.75h8.008a5.75 5.75 0 0 1 5.75 5.75v8.008a5.75 5.75 0 0 1-5.75 5.75H7.996a5.75 5.75 0 0 1-5.75-5.75zm5.75-4.25a4.25 4.25 0 0 0-4.25 4.25v8.008a4.25 4.25 0 0 0 4.25 4.25h8.008a4.25 4.25 0 0 0 4.25-4.25V7.996a4.25 4.25 0 0 0-4.25-4.25z" clipRule="evenodd" /></svg>,
    },
    {
      label: 'Inteligencia artificial y comunidad que responde tus dudas',
      image: "https://static.platzi.com/media/uploads/4_ada_5d06a60951.png",
      svg: <svg width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#C4C8CE" d="m9.6 14.575 1.252-2.723 2.723-1.252-2.723-1.252L9.6 6.625 8.348 9.348 5.625 10.6l2.723 1.252zm0 3.625-2.375-5.225L2 10.6l5.225-2.375L9.6 3l2.375 5.225L17.2 10.6l-5.225 2.375zm8.6 2.8-1.175-2.625L14.4 17.2l2.625-1.2 1.175-2.6 1.2 2.6 2.6 1.2-2.6 1.175z" /></svg>,
    },
    {
      label: 'Descarga las clases a tu teléfono y aprende sin Internet',
      image: "https://static.platzi.com/media/uploads/5_offline_ce948d77c4.png",
      svg: <svg width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="#fff" fillRule="evenodd" clipRule="evenodd"><path d="M12 3.75A8.25 8.25 0 0 0 3.75 12 8.25 8.25 0 0 0 12 20.25 8.25 8.25 0 0 0 20.25 12 8.25 8.25 0 0 0 12 3.75m0-1.5A9.75 9.75 0 0 0 2.25 12 9.75 9.75 0 0 0 12 21.75 9.75 9.75 0 0 0 21.75 12 9.75 9.75 0 0 0 12 2.25" /><path d="M12 8.25a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75" /><path d="M8.97 11.97a.75.75 0 0 1 1.06 0L12 13.94l1.97-1.97a.75.75 0 1 1 1.06 1.06l-2.5 2.5a.75.75 0 0 1-1.06 0l-2.5-2.5a.75.75 0 0 1 0-1.06" /></g></svg>,
    },
    {
      label: 'Mide el progreso de tu empresa',
      image: "https://static.platzi.com/media/uploads/7_progresoequipo_fd27b01c74.png",
      svg: <svg width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" fillRule="evenodd" d="M7 3.75A3.25 3.25 0 0 0 3.75 7v10A3.25 3.25 0 0 0 7 20.25h10A3.25 3.25 0 0 0 20.25 17V7A3.25 3.25 0 0 0 17 3.75zM2.25 7A4.75 4.75 0 0 1 7 2.25h10A4.75 4.75 0 0 1 21.75 7v10A4.75 4.75 0 0 1 17 21.75H7A4.75 4.75 0 0 1 2.25 17z" clipRule="evenodd" /><path fill="#fff" fillRule="evenodd" d="M21.61 8.564a.75.75 0 0 1-.174 1.046l-7 5a.75.75 0 0 1-.966-.08l-3.551-3.55-6.483 4.63a.75.75 0 1 1-.872-1.22l7-5a.75.75 0 0 1 .966.08l3.551 3.55 6.483-4.63a.75.75 0 0 1 1.046.174" clipRule="evenodd" /></svg>,
    },
    {
      label: 'Organiza el aprendizaje de tu equipo',
      image: "https://static.platzi.com/media/uploads/6_aprendizajeequipo_3de24f1d37.png",
      svg: <svg width="1em" height="1em" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path fill="#0AE98A" fillRule="evenodd" d="M14.58 4.16a1.25 1.25 0 1 0-2.5 0v1.251H9.996a6.25 6.25 0 0 0-6.252 6.252v18.341a6.25 6.25 0 0 0 6.252 6.252h20.008a6.25 6.25 0 0 0 6.252-6.252v-18.34a6.25 6.25 0 0 0-6.252-6.253H27.92v-1.25a1.25 1.25 0 0 0-2.5 0v1.25H14.58zm-2.5 3.751v1.251a1.25 1.25 0 0 0 2.5 0v-1.25h10.84v1.25a1.25 1.25 0 1 0 2.5 0v-1.25h2.084a3.75 3.75 0 0 1 3.752 3.751v2.085H6.244v-2.085a3.75 3.75 0 0 1 3.752-3.752zm-5.836 8.337v13.756a3.75 3.75 0 0 0 3.752 3.752h20.008a3.75 3.75 0 0 0 3.752-3.752V16.248zM20 20.418a1.25 1.25 0 1 0 0 2.5h8.337a1.25 1.25 0 0 0 0-2.5zm-8.327 6.669a1.25 1.25 0 0 0-.02 2.5l8.179.061a1.25 1.25 0 1 0 .019-2.5z" clipRule="evenodd" /></svg>,
    },
  ]

  const [matchesDesktop, setMatchesDesktop] = useState<boolean>(false)
  const [imageDisplayed, setImageDisplayed] = useState<string>(data[0].image)

  useEffect(() => {
    handleMatchMedia()
    window.addEventListener("resize", () => {
      handleMatchMedia()
    })
  }, [])
  
  const handleMatchMedia = () => {
    const matchesDesktop = window.matchMedia("(min-width: 1024px)").matches
    setMatchesDesktop(matchesDesktop)
  }

  return (
    <section className={styles.WeAreAuthority}>
      {
        matchesDesktop ?
          <div className={styles.WeAreAuthority__desktop}>
            <div>
              <h2 className={styles.WeAreAuthority__title}><span>Somos la autoridad</span> en escalar la educación en línea en América Latina</h2>
              <ul className={styles.features}>
                {
                  data.map((item, index) =>
                    <FeatureItem
                      key={index}
                      feature={item}
                      imageDisplayed={imageDisplayed}
                      setImageDisplayed={setImageDisplayed}
                    />
                  )
                }
              </ul>
            </div>
            <figure className={styles.displayedImage}>
              <img src={imageDisplayed} alt="" />
            </figure>
          </div>
          :
          <div className={styles.WeAreAuthority__mobile}>
            <h2 className={styles.WeAreAuthority__title}><span>Somos la autoridad</span> en escalar la educación en línea en América Latina</h2>
            {
              data.map((item, index) =>
                <article key={index} className={`${styles.Feature} ${styles.mobile} ${styles.active}`}>
                  <div className={styles.Feature__title}> {item.svg} <p>{item.label}</p></div>
                  <figure>
                    <img src={item.image} alt="" />
                  </figure>
                </article>
              )
            }
          </div>
      }
    </section>
  )
}

export default WeAreAuthority;

