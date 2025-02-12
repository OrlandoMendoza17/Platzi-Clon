import { Metadata } from 'next';
import { IBM_Plex_Sans } from 'next/font/google';
import styles from '@/styles/homePage.module.scss'
import LoggedHeader from '@/components/widgets/LoggedHeader';
import { createClient } from '@/supabase/server';
import { redirect } from 'next/navigation';

const ibmPlexSans = IBM_Plex_Sans({
  weight: ["300", "400", "500", "600", "700"],
  style: "normal",
  subsets: ["latin"]
});


export const metadata: Metadata = {
  title: "Cursos online para trabajar en tecnología",
  description: "Con los cursos online de Platzi adquieres las habilidades más demandadas para trabajar en tecnología: programación, blockchain, marketing digital, inglés."
}

const CoursesLayout = async ({ children }: Readonly<{ children: React.ReactNode; }>) => {

  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) {
    redirect("/")
  }

  return (
    <body className={`${ibmPlexSans.className} ${styles.Body} bg-neutral-005 text-white scrollbar`}>
      <LoggedHeader>
        {children}
      </LoggedHeader>
    </body>
  )
}

export default CoursesLayout