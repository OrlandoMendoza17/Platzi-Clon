"use client"
import { useEffect, useState } from 'react';
import Plan, { PlanInfo } from './Plan';
import styles from './styles/ChoosePlan.module.scss'
import CrossIcon from './CrossIcon';
import CheckIcon from './CheckIcon';

const ChoosePlan = () => {

  const planBasic: PlanInfo = {
    id: "e0818119-8ba1-4ea3-b92e-d9ed6523ff68",
    title: "Plan Basic",
    type: "monthly",
    category: "Basic",
    students: 1,
    pricePerMonth: 39,
    pricePerYear: null,
    promoBefore: 249,
    promoSaving: 40,
    link: "https://platzi.com/comprar/basic/?course=todos",
  }

  const planExpert: PlanInfo = {
    id: "10b9e3e1-05e1-451a-838e-d8fdc163fb7d",
    title: "Plan Expert",
    type: "yearly",
    category: "Expert",
    students: 1,
    pricePerMonth: 18,
    pricePerYear: 209,
    promoBefore: 249,
    promoSaving: 40,
    link: "https://platzi.com/comprar/navidad-expert/?course=todos",
  }

  const planExpertDuo: PlanInfo = {
    id: "11f12473-5c11-44b0-b75b-b79bcd1fcc64",
    title: "Plan Expert Duo",
    type: "yearly",
    category: "Expert",
    students: 2,
    pricePerMonth: 24,
    pricePerYear: 279,
    promoBefore: 329,
    promoSaving: 50,
    link: "https://platzi.com/comprar/navidad/?course=todos",
  }

  const planExpertFamily: PlanInfo = {
    id: "c684e3d7-d6cd-4842-8c2f-8e40f45f4618",
    title: "Plan Expert Family",
    type: "yearly",
    category: "Expert",
    students: 4,
    pricePerMonth: 35,
    pricePerYear: 419,
    promoBefore: 499,
    promoSaving: 80,
    link: "https://platzi.com/comprar/navidad-family/?course=todos",
  }

  const benefits = [
    "Contenido profesional y actualizado con certificados digitales",
    "Certificados físicos para las rutas de aprendizaje profesional",
    "Acceso a las escuelas de Startups, Inglés y liderazgo",
    "Eventos exclusivos como Platzi Conf",
    "Descarga contenido en la app móvil",
  ]

  const [matchesDesktop, setMatchesDesktop] = useState<boolean>(false)

  useEffect(() => {
    handleMatchMedia()
    window.addEventListener("resize", () => {
      handleMatchMedia()
    })
  }, [])

  const handleMatchMedia = () => {
    const matchesDesktop = window.matchMedia("(min-width: 1050px)").matches
    setMatchesDesktop(matchesDesktop)
  }


  return (
    <section className={styles.ChoosePlan}>
      <h2>Elige el plan ideal para ti</h2>
      <table className={styles.ChoosePlan__benefits}>
        <thead>
          <tr>
            <th>BENEFICIOS</th>
            <th>BASIC</th>
            <th>EXPERT</th>
          </tr>
        </thead>
        <tbody>
          {
            benefits.slice(1, benefits.length).map((item, index)=>
              <tr key={index}>
                <td>{item}</td>
                <td>
                  <div className="flex justify-center"><CrossIcon/></div>
                </td>
                <td>
                  <div className="flex justify-center"><CheckIcon/></div>
                </td>
              </tr>
            )
          }
        </tbody>
      </table>
      <div className={styles.ChoosePlan__container}>
        {
          matchesDesktop ? <Plan plan={planBasic} benefits={benefits} /> : <></>
        }
        <Plan plan={planExpert} benefits={benefits} />
        {
          matchesDesktop ?
            <Plan plans={[planExpertDuo, planExpertFamily]} benefits={benefits} />
            :
            <>
              <Plan plan={planExpertDuo} benefits={benefits} />
              <Plan plan={planExpertFamily} benefits={benefits} />
            </>
        }
        {/* <Plan plan={planExpertFamily} benefits={benefits}/> */}
      </div>
      <p className="text-neutral-080 text-body-md md:text-body-lg text-center mb-4">Nunca subiremos el precio mientras mantengas tu suscripción activa.</p>
    </section>
  )
}

export default ChoosePlan;