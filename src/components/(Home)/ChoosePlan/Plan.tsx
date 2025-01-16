"use client"
import { useState } from 'react'
import CheckIcon from './CheckIcon'
import CrossIcon from './CrossIcon'
import styles from './styles/Plan.module.scss'
import InstallmentIcon from './InstallmentIcon'
import { formatMoney } from '@/utils'
import RadioButton from './RadioButton'

export type PlanInfo = {
  id: string;
  title: string;
  type: "monthly" | "yearly";
  category: "Basic" | "Expert";
  students: number;
  pricePerMonth: number;
  pricePerYear: number | null;
  promoBefore: number;
  promoSaving: number;
  link: string;
}

type Props = {
  plan?: PlanInfo,
  plans?: [PlanInfo, PlanInfo],
  benefits: string[],
}

const Plan = ({ plan, plans, benefits }: Props) => {

  const [planSelected, setPlanSelected] = useState(plan ? plan : (plans ? plans[0] : undefined))

  const isMonthly = Boolean(planSelected?.type === "monthly")

  const pricePerYear = planSelected?.pricePerYear

  return (
    planSelected &&
    <article className={`${styles.Plan} ${!isMonthly ? styles["Plan--expert"] : ""}`}>
      <div className={styles.Plan__title}>
        <h3>{planSelected.title}</h3>
        <span className="hidden pricing:block">{isMonthly ? "Mensual" : "Anual"}</span>
        <span className="block pricing:hidden">{planSelected.students} {planSelected.students > 1 ? "estudiantes" : "estudiante"}</span>
      </div>

      <div className="hidden pricing:block">
        {
          plans ?
            <div className={styles.Plan__students}>
              {
                plans.map((plan, index) =>
                  <RadioButton
                    key={index}
                    plan={plan}
                    planSelected={planSelected}
                    setPlanSelected={setPlanSelected}
                  />
                )
              }
            </div>
            :
            <p className={styles.Plan__students}>
              Para <span className="text-neutral-080">{planSelected.students} {planSelected.students > 1 ? "estudiantes" : "estudiante"}</span>
            </p>
        }
      </div>

      <div className="mt-4 pricing:my-4">
        <div className={styles.Plan__price}>
          <figure>
            <img src="https://static.platzi.com/cdn-cgi/image/width=480,quality=85,format=auto/media/flags/US.png" alt="" />
          </figure>
          <p className={styles.priceAmount}>{formatMoney(planSelected.pricePerMonth)}/mes</p>
        </div>

        <p className={`${styles.Plan__details} !hidden pricing:!block`}>
          {
            isMonthly ? "Cobro mensual recurrente" : "Cobro anual recurrente de "
          }
          <span>{isMonthly ? "" : formatMoney(planSelected.pricePerYear ? planSelected.pricePerYear : 0)}</span>
        </p>
        
        <p className={`${styles.Plan__details} !block pricing:!hidden`}>
          {
            isMonthly ? "Suscripción mensual de " : "Suscripción anual de "
          }
          <span>{isMonthly ? "" : formatMoney(planSelected.pricePerYear ? planSelected.pricePerYear : 0)}</span>
        </p>

        {
          !isMonthly &&
          <div className={styles.Plan__saving}>
            <p className="text-neutral-080">Antes <span>{formatMoney(planSelected.promoBefore)}</span></p>
            <hr />
            <p className="text-minty-080">Ahorras <span>{formatMoney(planSelected.promoSaving)}</span></p>
          </div>
        }
      </div>

      <ul className={styles.Plan__benefits}>
        {
          benefits.map((item, index) =>
            <li key={index} className={`${isMonthly ? (index === 0 ? "" : "text-neutral-060") : ""}`}>
              {
                isMonthly ? (
                  index === 0 ? <CheckIcon /> : <CrossIcon />
                )
                  :
                  <CheckIcon />
              }
              {item}
              {/* <CrossIcon /> */}
            </li>
          )
        }
      </ul>

      <div>
        <div className="my-4">
          {
            !isMonthly &&
            <div className={styles.Plan__installments}>
              <InstallmentIcon />
              <p>Paga a 4 cuotas sin intereses<span className="hidden pricing:inline"> de <span>{pricePerYear ? formatMoney(Math.ceil(pricePerYear / 4)) : <></>}</span></span>.</p>
            </div>
          }
        </div>
        <a href={planSelected.link}>
          <button className={`${styles.Plan__subscribe} ${!isMonthly ? "" : styles["Plan__subscribe--secondary"]}`}>
            Suscríbete a {planSelected.title}
          </button>
        </a>
      </div>
    </article>
  )
}

export default Plan