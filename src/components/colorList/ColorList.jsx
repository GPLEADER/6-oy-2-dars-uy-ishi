import React from 'react'
import './ColorList.css'

function ColorList() {
  return (
    <div>
      <div className='colors'>Qizil (red) <div className='colorBox' id='red'></div></div>
      <div className='colors'>Yashil (green) <div className='colorBox' id='green'></div></div>
      <div className='colors'>Moviy (blue) <div className='colorBox' id='blue'></div></div>
      <div className='colors'>Sariq (yellow) <div className='colorBox' id='yellow'></div></div>
      <div className='colors'>To'q qizil (maroon) <div className='colorBox' id='maroon'></div></div>
    </div>
  )
}

export default ColorList