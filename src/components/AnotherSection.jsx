import React, { useState } from 'react'

function AnotherSection() {
    const [current,setCurrent]=useState('react')
    const LetteeElements=current.split("").map(letter => (
        <span key={letter}>{letter}</span>))
  return (
    <div className='flex justify-content-center'>
      {LetteeElements}
    </div>
  )
}

export default AnotherSection
