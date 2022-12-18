import React from 'react'

const Key = ({ keyData: { id, value }, handleInput }) => {
  const spanFunc = () => {
    const span =
      id === 'clear'
        ? 'col-span-2'
        : id === 'zero'
        ? 'col-span-2'
        : 'col-span-1'
    return span
  }
  const clear = spanFunc()
  return (
    <button
      className={`btn ${clear}`}
      id={id}
      onClick={() => handleInput(value)}>
      {value}
    </button>
  )
}
export default Key
