import { Metadata } from 'next';
import { IBM_Plex_Sans, Roboto } from 'next/font/google';
import styles from '@/styles/home.module.scss'

const ibmPlexSans = IBM_Plex_Sans({
  weight: ["300", "400", "500", "600", "700"],
  style: "normal",
  subsets: ["latin"]
});


export const metadata: Metadata = {
  title: "Cursos online para trabajar en tecnología",
  description: "Con los cursos online de Platzi adquieres las habilidades más demandadas para trabajar en tecnología: programación, blockchain, marketing digital, inglés."
}

const CoursesLayout = ({ children }: Readonly<{ children: React.ReactNode; }>) => {
  return (
    <body className={`${ibmPlexSans.className} ${styles.Body} bg-neutral-005 text-white scrollbar`}>
      {children}
    </body>
  )
}

export default CoursesLayout