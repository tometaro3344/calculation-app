import styles from './styles/Display.module.scss'

type Props = {
    preview: string
    isMemory: boolean
}

const display = ({preview, isMemory}: Props) => {
  return (
    <div className={styles['display-container']}>
      <div className={styles['memory-icon']}>
        {isMemory?"M":""}
      </div>
      <div className={styles['display']}>
          {preview}
      </div>
    </div>
  )
}

export default display