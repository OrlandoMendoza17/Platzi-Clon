import PlatziLogo from '@/components/icons/PlatziLogo'
import styles from './SignInButton.module.scss'
import Cross from '@/components/icons/Cross'
import { Dispatch, MouseEventHandler, SetStateAction, useState } from 'react'
import ProviderSections from './ProviderSections'
import SignInSection from './SignInSection'
import SignUpSection from './SignUpSection'

type Props = {
  stylesButton: string,
  openedLogIn: boolean,
  text: string,
  setOpenedLogIn: Dispatch<SetStateAction<boolean>>,
}

const SignInButton = ({ stylesButton, openedLogIn, setOpenedLogIn, text }: Props) => {

  const [isSignIn, setSignIn] = useState<boolean>(true)

  const [providerSelected, setProviderSelected] = useState<boolean>(false)

  const handleClose = () => {
    setOpenedLogIn(false)
    setProviderSelected(false)
    setSignIn(true)
  }

  const handleClick: MouseEventHandler<HTMLDivElement | HTMLButtonElement> = ({ target }) => {
    if ((target as HTMLElement).id === "SignInButton") {
      handleClose()
    }
  }

  return (
    <>
      <button type="button" className={stylesButton} onClick={() => setOpenedLogIn(true)}>
        {text}
      </button>
      {
        openedLogIn &&
        <div id="SignInButton" className={styles.SignInButton} onClick={handleClick}>
          <div className={styles.SignInButton__container}>
            <button
              onClick={() => handleClose()}
              className={styles.SignInButton__closeBtn}
            >
              <Cross />
            </button>
            <figure>
              <PlatziLogo />
            </figure>
            {
              !providerSelected &&
              <div>
                {
                  isSignIn ?
                    <SignInSection {...{setSignIn, setProviderSelected}}/>
                    :
                    <SignUpSection {...{setSignIn, setProviderSelected}}/>
                }
              </div>
            }
            {
              providerSelected &&
              <ProviderSections
                setProviderSelected={setProviderSelected}
              />
            }
          </div>
        </div>
      }
    </>
  )
}

export default SignInButton