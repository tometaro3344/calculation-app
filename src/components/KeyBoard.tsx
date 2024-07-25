import React from 'react'
import Button from './Button'
import styles from './styles/KeyBoard.module.scss'

type Props = {
    onEqual: ()=>void
    onEnterNumber: (key: string) => void
    onClear: () => void
    onMemory: (key: string) => void
}

const KeyBoard = ({onEqual, onClear, onEnterNumber, onMemory}: Props) => {
    const buttons = ['7', '8', '9', '+', 'MC', '4', '5', '6', '-', 'MR', '1', '2', '3', '*', 'M-', '0', 'CR', '=', '/', 'M+']
  return (
    <div className={styles['keyBoard']}>
        {
            buttons.map((btn)=> {
                if(!Number.isNaN(parseInt(btn)) || '+-*/'.includes(btn)){
                    return <Button key={btn} onClick={onEnterNumber}>{btn}</Button>
                }
                if(btn === '='){
                    return <Button key={btn} onClick={onEqual}>{btn}</Button>
                }
                if(btn === 'CR'){
                    return <Button key={btn} onClick={onClear}>{btn}</Button>
                }
                return <Button key={btn} onClick={onMemory}>{btn}</Button>
            })
        }
    </div>
  )
}

export default KeyBoard