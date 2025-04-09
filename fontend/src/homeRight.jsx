import React from 'react'
import homeRightImg from './assets/homeRightImg.png' // <-- include the correct extension

function HomeRight() {
  return (
    <div className='w-full h-full flex flex-col'>
      <img src={homeRightImg} alt="Home right section" className='h-full w-full object-cover' />
    </div>
  )
}

export default HomeRight
