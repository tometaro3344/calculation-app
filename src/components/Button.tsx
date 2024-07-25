import { ReactNode } from 'react'

type Props = {
    children: string
    onClick: ((key: string) => void) | (() => void)
}

const Button = ({children, onClick}: Props) => {
  return (
    <div className='' onClick={()=>onClick(children)}>
        <button>
            {children}
        </button>
    </div>
  )
}

export default Button