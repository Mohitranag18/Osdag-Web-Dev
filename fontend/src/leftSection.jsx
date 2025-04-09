import React from 'react'
import LeftTop from './componects/leftSection/leftTop'
import LeftBottom from './componects/leftSection/leftBottom'

function LeftSection() {
  return (
    <div className='w-136 h-full flex flex-col'>
      <LeftTop />
      <LeftBottom />
    </div>
  )
}

export default LeftSection