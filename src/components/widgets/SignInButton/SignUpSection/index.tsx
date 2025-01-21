import React, { Dispatch, SetStateAction } from 'react'
import styles from '../SignInButton.module.scss'

type Props = {
  setSignIn: Dispatch<SetStateAction<boolean>>,
  setProviderSelected: Dispatch<SetStateAction<boolean>>,
}

const SignUpSection = ({setSignIn, setProviderSelected}: Props) => {
  return (
    <>
      <form>
        <span>Crea una cuenta con:</span>
        <input type="email" name="email" placeholder="Correo electrónico" />
        <input type="password" name="password" placeholder="Contraseña" />
        <input type="password" name="confirmPassword" placeholder="Confirmar Contraseña" />
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
        onClick={() => setSignIn(true)}
        className="text-body-md text-gray-400 hover:text-white text-center mt-4 cursor-pointer underline">
        ¿Ya tienes cuenta?, inicia sesión una aquí
      </p>
    </>
  )
}

export default SignUpSection