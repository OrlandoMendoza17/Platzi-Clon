import styles from "./styles/SchoolItem.module.scss"
import PointerIcon from "./PointerIcon";
import { CSSProperties } from "react";

export type School = {
  href: string;
  title: string;
  color1: string;
  color2: string;
  image: string;
}

type Props = {
  school: School;
}

interface CustomCSSProperties extends CSSProperties {
  '--color'?: string; // Declara tu variable CSS personalizada aquí
  '--color2'?: string; // Declara tu variable CSS personalizada aquí
}

const SchoolItem = ({ school: { title, href, image, color1, color2 } }: Props) => {
  const style: CustomCSSProperties = {
    '--color': color1,
    '--color2': color2,
  };
  
  return (
    <li className={styles.SchoolItem} style={style}>
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