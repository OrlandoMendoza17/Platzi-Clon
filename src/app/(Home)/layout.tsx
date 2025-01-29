import LandingHeader from "@/components/(Home)/LandingHeader";
import type { Metadata } from "next";
import styles from "@/styles/(Home).module.scss"
import { IBM_Plex_Sans } from "next/font/google";
import { createClient } from "@/supabase/server";
import { redirect } from "next/navigation";

const ibmPlexSans = IBM_Plex_Sans({
  weight: ["300", "400", "500", "600", "700"],
  style: "normal",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Platzi: Plataforma de aprendizaje profesional online",
  description: "Únete hoy a Platzi, la comunidad más grande de educación en línea. Prepárate en las habilidades más demandadas de la industria digital.",
};

const HomeLayout = async ({ children }: Readonly<{ children: React.ReactNode; }>) => {
  
  const supabase = await createClient()
  const {data: { user }} = await supabase.auth.getUser()
  
  if(user){
    redirect("/home")
  }
  
  return (
    <body className={`${ibmPlexSans.className} bg-neutral-005 text-white`}>       
      <main className={styles.Home}>
        <LandingHeader />
        {children}
      </main>
    </body>
  );
}

export default HomeLayout;