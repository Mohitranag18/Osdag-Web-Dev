import { useState } from 'react'
import LeftSection from './leftSection'
import RightSection from './rightSection'
import useSelectionStore from './store/useSelectionStore'
import HomeRight from './homeRight';



function App() {
  const mainMode = useSelectionStore((state) => state.mainMode);

  return (
    <div className='bg-[#F0F0F0] h-screen flex p-2 gap-2'>
      <LeftSection />
      {
        mainMode === "" &&
        <HomeRight />
      }
      {
        mainMode === "Connection" &&
        <RightSection />
      }
    </div>
  )
}

export default App
