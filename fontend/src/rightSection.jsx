import React from 'react'
import RightTop from './componects/rightSection/rightTop'
import RightBottom from './componects/rightSection/rightBottom'

function RightSection() {
  return (
    <div className='w-full h-full flex flex-col'>
      <RightTop />
      <RightBottom />
    </div>
  )
}

export default RightSection