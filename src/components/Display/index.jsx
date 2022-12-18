import React from 'react'

const Display = ({ input, output }) => {
  return (
    <div className='mockup-code mb-3'>
      <pre data-prefix='>'>
        <span className='text-lg'>{output}</span>
      </pre>
      <pre data-prefix='>' className='bg-warning text-warning-content'>
        <span id='display' className='text-2xl'>
          {input}
        </span>
      </pre>
    </div>
  )
}

export default Display
