import Tag from '@/components/widgets/Tag'
import styles from './CourseCertificate.module.scss'
import Certificate from '@/components/icons/Certificate'

type Props = {
  certificate: string,
}

const CourseCertificate = ({certificate}: Props) => {
  return (
    <section className={styles.CourseCertificate}>
      <div className={styles.CourseCertificate__container}>
        <Tag Icon={Certificate} text="Certificado digital" />
        <h2>¡Comparte tus logros con un certificado!</h2>
        <p>Cuando termines el curso tendrás acceso al certificado digital para compartirlo con tu familia, amigos, empleadores y la comunidad.</p>
      </div>
      <figure>
        <img src={certificate} alt="" />
      </figure>
    </section>
  )
}

export default CourseCertificate