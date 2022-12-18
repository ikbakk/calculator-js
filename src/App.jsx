import { useState, useEffect } from 'react'
import Display from './components/Display'
import Keyboard from './components/Keyboard'

function App() {
  const [input, setInput] = useState('0')
  const [output, setOutput] = useState('')
  const [calculatorData, setCalculatorData] = useState('')

  const operators = ['AC', '/', 'x', '+', '-', '=']

  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

  const handleSubmit = () => {
    console.log({ calculatorData })

    const total = eval(calculatorData)
    setInput(total)
    setOutput(`${total} = ${total}`)
    setCalculatorData(`${total}`)
  }

  const handleClear = () => {
    setInput('0')
    setCalculatorData('')
  }

  const handleNumbers = (value) => {
    if (!calculatorData.length) {
      setInput(`${value}`)
      setCalculatorData(`${value}`)
    } else {
      if (value === 0 && (calculatorData === '0' || input === '0')) {
        setCalculatorData(`${calculatorData}`)
      } else {
        const lastChat = calculatorData.charAt(calculatorData.length - 1)
        const isLastChatOperator =
          lastChat === '*' || operators.includes(lastChat)

        setInput(isLastChatOperator ? `${value}` : `${input}${value}`)
        setCalculatorData(`${calculatorData}${value}`)
      }
    }
  }

  const dotOperator = () => {
    const lastChat = calculatorData.charAt(calculatorData.length - 1)
    if (!calculatorData.length) {
      setInput('0.')
      setCalculatorData('0.')
    } else {
      if (lastChat === '*' || operators.includes(lastChat)) {
        setInput('0.')
        setCalculatorData(`${calculatorData} 0.`)
      } else {
        setInput(
          lastChat === '.' || input.includes('.') ? `${input}` : `${input}.`
        )
        const formattedValue =
          lastChat === '.' || input.includes('.')
            ? `${calculatorData}`
            : `${calculatorData}.`
        setCalculatorData(formattedValue)
      }
    }
  }

  const handleOperators = (value) => {
    if (calculatorData.length) {
      setInput(`${value}`)
      const beforeLastChat = calculatorData.charAt(calculatorData.length - 2)

      const beforeLastChatIsOperator =
        operators.includes(beforeLastChat) || beforeLastChat === '*'

      const lastChat = calculatorData.charAt(calculatorData.length - 1)

      const lastChatIsOperator =
        operators.includes(lastChat) || lastChat === '*'

      const validOp = value === 'x' ? '*' : value
      if (
        (lastChatIsOperator && value !== '-') ||
        (beforeLastChatIsOperator && lastChatIsOperator)
      ) {
        if (beforeLastChatIsOperator) {
          const updatedValue = `${calculatorData.substring(
            0,
            calculatorData.length - 2
          )}${value}`
          setCalculatorData(updatedValue)
        } else {
          setCalculatorData(
            `${calculatorData.substring(
              0,
              calculatorData.length - 1
            )}${validOp}`
          )
        }
      } else {
        setCalculatorData(`${calculatorData}${validOp}`)
      }
    }
  }

  const handleInput = (value) => {
    const number = numbers.find((num) => num === value)
    const operator = operators.find((op) => op === value)

    switch (value) {
      case '=':
        handleSubmit()
        break
      case 'AC':
        handleClear()
        break
      case number:
        handleNumbers(value)
        break
      case '.':
        dotOperator(value)
        break
      case operator:
        handleOperators(value)
        break
      default:
        break
    }
  }

  const handleOutput = () => {
    setOutput(calculatorData)
  }

  useEffect(() => {
    handleOutput()
  }, [calculatorData])
  return (
    <div className='p-10 pt-20 flex justify-center'>
      <div className='mockup-phone'>
        <div className='camera'></div>
        <div className='display'>
          <div className='artboard artboard-demo phone-1'>
            <Display input={input} output={output} />
            <Keyboard handleInput={handleInput} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
