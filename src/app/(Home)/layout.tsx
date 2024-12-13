import Header from "@/components/Home/Header";
import type { Metadata } from "next";
import styles from "../../styles/Home.module.scss"

export const metadata: Metadata = {
  title: "Platzi: Plataforma de aprendizaje profesional online",
  description: "Únete hoy a Platzi, la comunidad más grande de educación en línea. Prepárate en las habilidades más demandadas de la industria digital.",
};

const HomeLayout = ({ children }: Readonly<{ children: React.ReactNode; }>) => {
  return (
    <main className={styles.Home}>
      <Header/>
      {children}
    </main>
  );
}

export default HomeLayout;