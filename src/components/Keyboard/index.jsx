import React from 'react'
import Key from '../Key'
import { calcData } from '../../calculator'

const Keyboard = ({ handleInput }) => (
  <div className='grid grid-cols-4 gap-4'>
    {calcData.map((key) => (
      <Key key={key.id} keyData={key} handleInput={handleInput} />
    ))}
  </div>
)

export default Keyboard
