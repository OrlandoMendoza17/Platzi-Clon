import { CSSProperties } from "react";
import PointerIcon from "./PointerIcon";
import styles from "./styles/SchoolItem.module.scss"

export type School = {
  href: string;
  title: string;
  color1: string;
  color2: string;
  image: string;
}

type Props = {
  school: School;
  hiddenSchools: boolean,
}

interface CustomCSSProperties extends CSSProperties {
  '--color'?: string; // Declara tu variable CSS personalizada aquí
  '--color2'?: string; // Declara tu variable CSS personalizada aquí
}

const SchoolItem = ({ hiddenSchools, school: { title, href, image, color1, color2 } }: Props) => {
  
  const style: CustomCSSProperties = {
    '--color': color1,
    '--color2': color2,
  };
  
  return (
    <li className={`${styles.SchoolItem} ${hiddenSchools && styles.SchoolItem__hidden}`} style={style}>
      <a href={href}>
        <figure>
          <img src={image} alt="" />
        </figure>
        <p>
          <span>Escuela de</span>
          <span>{title}</span>
        </p>
        <PointerIcon />
      </a>
    </li>
  )
}

export default SchoolItem;