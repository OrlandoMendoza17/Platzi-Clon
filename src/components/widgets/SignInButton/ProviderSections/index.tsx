import GoogleIcon from "@/components/icons/GoogleIcon"
import { Dispatch, SetStateAction } from "react"
import stylesSignIn from '../SignInButton.module.scss'
import styles from './ProviderSections.module.scss'
import supabase from "@/supabase"

type Props = {
  setProviderSelected: Dispatch<SetStateAction<boolean>>
}

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || ""

const ProviderSections = ({ setProviderSelected }: Props) => {
  
  const signInWithProvider = async (provider: "google") => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: `${BASE_URL}/home`, // Cambia por tu URL de redirección
        },
      });
  
      if (error) throw error;
      console.log('Redirigiendo al proveedor...', data.url);
    } catch (error) {
      console.error('Error durante el inicio de sesión:', error);
    }
  };
  
  return (
    <div className={styles.ProviderSections} >
      <div className='grid'>
        <button className={styles.ProviderSections__button} onClick={() => signInWithProvider("google")}>
          <GoogleIcon /> Continuar con Google
        </button>
      </div>
      <div className={stylesSignIn.SignInButton__divider}>
        <hr />
        <span className="!m-0">o</span>
        <hr />
      </div>
      <button
        onClick={() => setProviderSelected(false)}
        className={`${stylesSignIn.SignInButton__providerSelectBtn} bg-neutral-020`}
      >
        Con correo y contreseña
      </button>
    </div>
  )
}

export default ProviderSections