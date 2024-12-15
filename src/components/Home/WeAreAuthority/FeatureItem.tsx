import { Dispatch, JSX, MouseEventHandler, SetStateAction } from "react";
import styles from './WeAreAuthority.module.scss'

export type Feature = {
  label: string;
  image: string;
  svg: JSX.Element;
}

type Props = {
  feature: Feature,
  imageDisplayed: string,
  setImageDisplayed: Dispatch<SetStateAction<string>>,
}

const FeatureItem = ({ feature, imageDisplayed, setImageDisplayed }: Props) => {

  const handleMouseOver: MouseEventHandler<HTMLLIElement> = () => {
    setImageDisplayed(feature.image)
  }

  return (
    <li
      onMouseOver={handleMouseOver}
      className={`${styles.Feature}  ${imageDisplayed === feature.image ? styles.active : ""}`}
    >
      <div className={styles.Feature__title}>
        {feature.svg} <p>{feature.label}</p>
      </div>
    </li>
  )
}

export default FeatureItem