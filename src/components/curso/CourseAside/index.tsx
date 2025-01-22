import Play from '@/components/icons/Play'
import styles from './CourseAside.module.scss'

type Props = {
  classes: CourseClass[]
}

const CourseAside = ({ classes }: Props) => {
  
  let firstClass = classes[0]
  
  if(!firstClass.image){
    firstClass = classes[1]
  }
  
  return (
    <aside className={styles.CourseAside}>
      <a href={firstClass.link as string}>
        <div className={styles.CourseAside__videoPlayer}>
          <img src={firstClass.image as string} alt="" />
          <div className={styles.CourseAside__playButton}>
            <Play />
          </div>
        </div>
        <div className={styles.CourseAside__container}>
          <button>
            <Play />
            Empezar Curso
          </button>
        </div>
      </a>
    </aside>
  )
}

export default CourseAside