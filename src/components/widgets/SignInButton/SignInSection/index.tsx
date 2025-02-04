import { ChangeEventHandler, Dispatch, FormEventHandler, SetStateAction, useState } from 'react'
import styles from '../SignInButton.module.scss'
import supabase from '@/supabase'
import { useRouter } from 'next/navigation'
import { createClient } from '@/supabase/client'

type Props = {
  setSignIn: Dispatch<SetStateAction<boolean>>,
  setProviderSelected: Dispatch<SetStateAction<boolean>>,
}

type UserProps = {
  email: string,
  password: string,
}

const SignInSection = ({ setSignIn, setProviderSelected }: Props) => {
  const router = useRouter()
  const [loading, setLoading] = useState<boolean>(false)
  
  const [user, setUser] = useState<UserProps>({
    email: "",
    password: "",
  })

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault()
    setLoading(true)
    const { email, password } = user
    try {
      const supabase = createClient()
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      })
      
      if (data.session) {
        router.push("/home")
      }
      
      if (error) {
        console.log('error', error)
        if(error.message.includes("Invalid login credentials")){
          alert("Credenciales inválidas")
        }
      }
      
      setLoading(false)
      
    } catch (error) {
      setLoading(false)
      console.log('error', error)
    }
  }

  const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    const { name, value } = target
    setUser({
      ...user,
      [name]: value,
    })
  }

  const { email, password } = user

  return (
    <>
      <form onSubmit={handleSubmit}>
        <span>Inicia sesión con:</span>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="Correo electrónico"
          required
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="Contraseña"
          required
        />
        <button type="submit" disabled={loading}>
          {
            loading ? "Cargando..." : "Continuar"
          }
        </button>
      </form>
      <div className={styles.SignInButton__divider}>
        <hr />
        <span className="!m-0">o</span>
        <hr />
      </div>
      {/* <button
        onClick={() => setProviderSelected(true)}
        className={styles.SignInButton__providerSelectBtn}
      >
        Iniciar sesión con Google
      </button> */}
      <p
        onClick={() => setSignIn(false)}
        className="text-body-md text-gray-400 hover:text-white text-center mt-4 cursor-pointer underline">
        ¿No tienes cuenta?, crea una aquí
      </p>
    </>
  )
}

export default SignInSection