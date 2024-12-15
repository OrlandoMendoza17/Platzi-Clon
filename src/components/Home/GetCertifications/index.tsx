import PointerIcon from '../Schools/PointerIcon';
import styles from './GetCertifications.module.scss'

const GetCertifications = () => {
  const certifications = [
    {
      link: 'https://platzi.com/escuela/ingles/',
      title: 'Alianza con ETS para la certificación TOEFL en Inglés',
      logo: 'https://static.platzi.com/media/uploads/toefl_1c45bb83c2.png',
    },
    {
      link: 'https://platzi.com/ruta/google-cloud/',
      title: 'Convenio de certificación en tecnologías cloud',
      logo: 'https://static.platzi.com/media/uploads/google_acc2471b81.png',
    },
    {
      link: 'https://platzi.com/escuela/ciberseguridad/',
      title: 'Domina la seguridad digital con CompTIA security+',
      logo: 'https://static.platzi.com/media/uploads/comptia_logo_939065f9ea.png',
    },
  ]

  return (
    <section className={styles.GetCertifications}>
      <h2><span>Obtén certificaciones</span> oficiales de:</h2>
      <div className={styles.GetCertifications__container}>
        {certifications.map(({link, logo, title}, index) =>
          <a key={index} href={link}>
            <article className={styles.GetCertifications__certification}>
              <div className={styles.container}>
                <figure>
                  <img src={logo} alt="" />
                </figure>
                <h3>{title}</h3>
              </div>
              <div className={styles.callToAction}>
                <span>Ir a los cursos</span>
                <PointerIcon />
              </div>
            </article>
          </a>
        )}
      </div>
    </section>
  )
}

export default GetCertifications;