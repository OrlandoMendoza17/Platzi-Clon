import SendIcon from '@/components/icons/SendIcon'
import Link from 'next/link'
import styles from '../CourseLinkSearch/CourseLinkSearch.module.scss'

type Props = {
  inputValue: string,
}

const SearchAllButton = ({inputValue}: Props) => {
  return (
    <li className={`${styles.CourseLinkSearch} border-t border-neutral-020 mt-1 pt-1`}>
      <Link href={`/buscar?search=${inputValue}`}>
        <figure className="p-2 bg-[#13161c66] flex justify-center items-center rounded-8 text-minty-080 !w-9 !h-10">
          <SendIcon />
        </figure>
        <span className="grid">
          Ver todo el contenido de
          <small className="text-minty-080">{inputValue}</small>
        </span>
      </Link>
    </li>
  )
}

export default SearchAllButton