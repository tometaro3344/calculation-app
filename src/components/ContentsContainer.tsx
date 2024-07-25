import { ReactNode } from 'react'
import styles from './styles/ContantsContainer.module.scss'

type Props = {
    children?: ReactNode
}

const ContentsContainer = ({children}: Props) => {
  return (
    <div className={styles['container']}>
        {children}
    </div>
  )
}

export default ContentsContainer