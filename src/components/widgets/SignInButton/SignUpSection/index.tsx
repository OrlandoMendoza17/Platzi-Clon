import React, { ChangeEventHandler, Dispatch, FormEventHandler, SetStateAction, useState } from 'react'
import styles from '../SignInButton.module.scss'
import supabase from '@/supabase'

type Props = {
  setSignIn: Dispatch<SetStateAction<boolean>>,
  setProviderSelected: Dispatch<SetStateAction<boolean>>,
}

type UserProps = {
  name: string,
  email: string,
  password: string,
  confirmPassword: string,
}

const SignUpSection = ({ setSignIn, setProviderSelected }: Props) => {

  const [loading, setLoading] = useState<boolean>(false)
  
  const [user, setUser] = useState<UserProps>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault()
    setLoading(true)
    
    const { name, email, password, confirmPassword } = user
    
    if(password === confirmPassword){
      try {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: 'http://localhost:3000/home',
            data: {
              name,
              full_name: name,
            }
          }
        })
        
        if (data) {
          console.log('data', data)
          alert("Se ha enviado un correo de confirmación a la dirección proporcionada")
        }
        
        if (error) {
          console.log('error', error)
        }
        
        setLoading(false)
        
      } catch (error) {
        setLoading(false)
        console.log('error', error)
      }
    }else{
      alert("Las contraseñas deben ser iguales")
      setLoading(false)
    }
  }

  const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    const { name, value } = target
    setUser({
      ...user,
      [name]: value,
    })
  }

  const { name, email, password, confirmPassword } = user

  return (
    <>
      <form onSubmit={handleSubmit}>
        <span>Crea una cuenta con:</span>

        <input
          value={name}
          type="text"
          name="name"
          onChange={handleChange}
          placeholder="Nombre"
          required
        />
        
        <input
          value={email}
          type="email"
          name="email"
          onChange={handleChange}
          placeholder="Correo electrónico"
          required
        />

        <input
          value={password}
          type="password"
          name="password"
          minLength={6}
          onChange={handleChange}
          placeholder="Contraseña"
          required
        />

        <input
          value={confirmPassword}
          type="password"
          name="confirmPassword"
          minLength={6}
          onChange={handleChange}
          placeholder="Confirmar Contraseña"
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