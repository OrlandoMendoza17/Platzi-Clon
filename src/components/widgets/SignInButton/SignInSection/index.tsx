import { Dispatch, SetStateAction } from 'react'
import styles from '../SignInButton.module.scss'

type Props = {
  setSignIn: Dispatch<SetStateAction<boolean>>,
  setProviderSelected: Dispatch<SetStateAction<boolean>>,
}

const SignInSection = ({ setSignIn, setProviderSelected }: Props) => {
  return (
    <>
      <form>
        <span>Inicia sesión con:</span>
        <input type="email" name="email" placeholder="Correo electrónico" />
        <input type="password" name="password" placeholder="Contraseña" />
        <button type="submit">
          Continuar
        </button>
      </form>
      <div className={styles.SignInButton__divider}>
        <hr />
        <span className="!m-0">o</span>
        <hr />
      </div>
      <button
        onClick={() => setProviderSelected(true)}
        className={styles.SignInButton__providerSelectBtn}
      >
        Iniciar sesión con Google
      </button>
      <p
        onClick={() => setSignIn(false)}
        className="text-body-md text-gray-400 hover:text-white text-center mt-4 cursor-pointer underline">
        ¿No tienes cuenta?, crea una aquí
      </p>
    </>
  )
}

export default SignInSection