import { Dispatch, SetStateAction } from 'react'
import { PlanInfo } from './Plan'
import styles from './styles/RadioButton.module.scss'

type Props = {
  plan: PlanInfo,
  planSelected: PlanInfo,
  setPlanSelected: Dispatch<SetStateAction<PlanInfo | undefined>>,
}

const RadioButton = ({plan, planSelected, setPlanSelected}: Props) => {
  return (
    <label className={styles.RadioButton}>
      <input 
        type="radio" 
        name="students" 
        checked={plan.id === planSelected.id}
        onChange={() => setPlanSelected(plan)} 
      />
      <div className={styles.selector}>
      </div>
      <span className="text-neutral-080">{plan.students} estudiantes</span>
    </label>
  )
}

export default RadioButton