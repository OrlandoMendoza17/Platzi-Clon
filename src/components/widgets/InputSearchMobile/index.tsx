import MagnifyingGlass from "@/components/icons/MagnifyingGlass"
import styles from './InputSearchMobile.module.scss'

const InputSearchMobile = () => {
  return (
    <form className={styles.InputSearchMobile}>
      <input type="text" name="search" id="search" />
      <button type="submit">
        <MagnifyingGlass />
      </button>
    </form>
  )
}

export default InputSearchMobile