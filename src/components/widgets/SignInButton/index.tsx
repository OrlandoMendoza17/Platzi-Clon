import PlatziLogo from '@/components/icons/PlatziLogo'
import styles from './SignInButton.module.scss'
import stylesHeader from '../../(Home)/LandingHeader/'
import Cross from '@/components/icons/Cross'
import { Dispatch, MouseEventHandler, SetStateAction, useState } from 'react'

type Props = {
  stylesButton: string,
  openedLogIn: boolean,
  setOpenedLogIn: Dispatch<SetStateAction<boolean>>,
}

const SignInButton = ({ stylesButton, openedLogIn, setOpenedLogIn }: Props) => {

  const [providerSelected, setProviderSelected] = useState<boolean>(false)

  const handleClose = () => {
    setOpenedLogIn(false)
    setProviderSelected(false)
  }

  const handleClick: MouseEventHandler<HTMLDivElement | HTMLButtonElement> = ({ target }) => {
    if ((target as HTMLElement).id === "SignInButton") {
      handleClose()
    }
  }

  return (
    <>
      <button type="button" className={stylesButton} onClick={() => setOpenedLogIn(true)}>
        Acceder
      </button>
      {
        openedLogIn &&
        <div id="SignInButton" className={styles.SignInButton} onClick={handleClick}>
          <div className={styles.SignInButton__container}>
            <button
              onClick={handleClick}
              className={styles.SignInButton__closeBtn}
            >
              <Cross />
            </button>
            <figure>
              <PlatziLogo />
            </figure>
            <span>Ingresar o crear una cuenta con:</span>
            {
              !providerSelected &&
              <div>
                <input type="email" name="email" placeholder="Correo electrónico" />
                <button type="submit" className={styles.SignInButton__submitBtn}>
                  Continuar
                </button>
                <div className={styles.SignInButton__divider}>
                  <hr />
                  <span className="!m-0">o</span>
                  <hr />
                </div>
                <button
                  onClick={() => setProviderSelected(true)}
                  className={styles.SignInButton__providerSelectBtn}
                >
                  Con Google, Appleo Facebook
                </button>
              </div>
            }
            {
              providerSelected &&
              <div>
                <div className={styles.SignInButton__divider}>
                  <hr />
                  <span className="!m-0">o</span>
                  <hr />
                </div>
                <button
                  onClick={() => setProviderSelected(false)}
                  className={`${styles.SignInButton__providerSelectBtn} bg-neutral-020`}
                >
                  Con correo y contreseña
                </button>
              </div>
            }
          </div>
          {/* <div className={styles.SignInButton__container}>
            
          </div> */}
        </div>
      }
    </>
  )
}

export default SignInButton