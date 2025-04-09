import { useState } from 'react'
import LeftSection from './leftSection'
import RightSection from './rightSection'

function App() {

  return (
    <div className='bg-[#F0F0F0] h-screen flex p-2 gap-2'>
      <LeftSection />
      <RightSection />
    </div>
  )
}

export default App
