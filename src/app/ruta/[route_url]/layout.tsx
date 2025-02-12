import { Metadata } from 'next';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ["300", "400", "500", "700", "900"],
  style: "normal",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Cursos online para trabajar en tecnología",
  description: "Con los cursos online de Platzi adquieres las habilidades más demandadas para trabajar en tecnología: programación, blockchain, marketing digital, inglés."
}

const CoursesLayout = ({ children }: Readonly<{ children: React.ReactNode; }>) => {
  return (
    <body className={`${roboto.className} bg-night-12 text-white`}>
      {children}
    </body>
  )
}

export default CoursesLayout