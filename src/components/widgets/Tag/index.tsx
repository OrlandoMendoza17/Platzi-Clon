import { JSX } from 'react'
import styles from './Tag.module.scss'

type Props = {
  Icon: () => JSX.Element,
  text: string,
}

const Tag = ({ Icon, text }: Props) => {
  return (
    <div className={styles.Tag}>
      <Icon />
      <span>{text}</span>
    </div>
  )
}

export default Tag