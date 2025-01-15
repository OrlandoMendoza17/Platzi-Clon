import React from 'react'
import styles from './CourseClass.module.scss'

type Props = {
  classes: CourseClass[],
  courseClass: CourseClass,
}

const CourseClass = ({ classes, courseClass }: Props) => {
  const { title, image, link, duration } = courseClass
  
  const minutes = parseInt(`${duration}`)
  const float = (duration as number) - minutes
  
  const seconds = Math.round(float * 60)
  
  const courseIndex = (classes.findIndex(({title})=> {
    return courseClass.title === title
  }) + 1)
  
  return (
    <li className={styles.CourseClass}>
      <a href={link as string}>
        <figure>
          {
            image &&
            <img src={image as string} alt="" />
          }
        </figure>
        <div>
          <h3>{title}</h3>
          <span>{minutes}:{seconds}</span>
        </div>
      </a>
      <span className={styles.CourseClass__number}>{courseIndex}</span>
    </li>
  )
}

export default CourseClass