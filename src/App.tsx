import { useState } from 'react'
import './App.css'
import Display from './components/Display'
import KeyBoard from './components/KeyBoard'
import ContentsContainer from './components/ContentsContainer'

function App() {
  const [calcFunction, setCalcFunction] = useState<string>('')
  const [memory, setMemory] = useState(0)

  console.log(calcFunction)

  const isCalcable = () => {
    if(!eval(calcFunction)) throw new Error('can not caluclation!!')
  }

  const isDoubleOperator = (key: string) => {
    return ('+-*/'.includes(key) && '+-*/'.includes(calcFunction[calcFunction.length - 1]))
  }

  const isErrorMessage = () => {
    return calcFunction === 'ERROR'
  }
  
  const onEqual = () => {
    if(calcFunction === '') return;
    try {
      isCalcable()
      setCalcFunction(prevCalc => (isFinite(eval(prevCalc)))?eval(prevCalc):'ERROR')
    } catch (error) {
      setCalcFunction('ERROR')
    }
  }

  const onEnterNumber = (key: string) => {
    if(isErrorMessage()) onClear()

    if(!isDoubleOperator(key))setCalcFunction(prevCalc => prevCalc + key)
    else setCalcFunction(prevCalc => prevCalc.slice(0,-1)+key)
    
  }

  const onClear = () => {
    setCalcFunction('')
  }

  const onMemory = (key: string) => {
    if(calcFunction === 'ERROR' || calcFunction === '') return
    try {
      isCalcable()
    } catch (error) {
      setCalcFunction('ERROR')
      return
    }
    switch(key){
      case 'M+':
        const mAddTotal = memory + eval(calcFunction)
        setMemory(mAddTotal)
        setCalcFunction(mAddTotal.toString())
        break
      case 'M-':
        const mSubTotal = memory - eval(calcFunction)
        setMemory(mSubTotal)
        setCalcFunction(mSubTotal.toString())
        break
      case 'MR':
        setCalcFunction(memory.toString())
        break
      case 'MC':
        setMemory(0)
        break
    }
  }

  return (
    <>
    <ContentsContainer>
      <Display preview={calcFunction} isMemory={memory !== 0}/>
      <KeyBoard onClear={onClear} onEnterNumber={onEnterNumber} onEqual={onEqual} onMemory={onMemory} />
    </ContentsContainer>
    </>
  )
}

export default App
