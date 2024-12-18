import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "../styles/App.scss";

const ibmPlexSans = IBM_Plex_Sans({
  weight: ["300", "400", "500", "600", "700"],
  style: "normal",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Platzi: Plataforma de aprendizaje profesional online",
  description: "Únete hoy a Platzi, la comunidad más grande de educación en línea. Prepárate en las habilidades más demandadas de la industria digital.",
};

type Props =  Readonly<{ 
  children: React.ReactNode,
}>

export default function RootLayout({ children }: Props) {
  return (
    <html lang="es">
      <body className={`${ibmPlexSans.className} bg-neutral-005 text-white`}>
      {/* <body className={`${ibmPlexSans.className} bg-sky-700`}> */}
        {children}
      </body>
    </html>
  );
}
