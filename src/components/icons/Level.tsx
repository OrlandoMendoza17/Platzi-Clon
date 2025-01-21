export type CourseLevel = "basic" | "intermidiate" | "advanced"

type Props = {
  courseLevel: CourseLevel,
}

const Level = ({courseLevel}: Props) => {
  
  const levels = {
    basic: <svg width="1em" height="1em" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" fillRule="evenodd" d="M7 14a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1" clipRule="evenodd" /><path fill="#6C7583" fillRule="evenodd" d="M17 4a1 1 0 0 1 1 1v14a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1m-5 5a1 1 0 0 1 1 1v9a1 1 0 1 1-2 0v-9a1 1 0 0 1 1-1" clipRule="evenodd" /></svg>,
    intermidiate: <svg width="1em" height="1em" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" fillRule="evenodd" d="M7 14a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1" clipRule="evenodd" /><path fill="#6C7583" fillRule="evenodd" d="M17 4a1 1 0 0 1 1 1v14a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1" clipRule="evenodd" /><path fill="#fff" fillRule="evenodd" d="M12 9a1 1 0 0 1 1 1v9a1 1 0 1 1-2 0v-9a1 1 0 0 1 1-1" clipRule="evenodd" /></svg>,
    advanced: <svg width="1em" height="1em" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" fillRule="evenodd" d="M7 14a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1M17 4a1 1 0 0 1 1 1v14a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1m-5 5a1 1 0 0 1 1 1v9a1 1 0 1 1-2 0v-9a1 1 0 0 1 1-1" clipRule="evenodd" /></svg>
  }
  
  return (
    levels[courseLevel]
  )
}

export default Level