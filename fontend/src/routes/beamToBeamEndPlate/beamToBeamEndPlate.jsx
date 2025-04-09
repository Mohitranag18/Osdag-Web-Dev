import React from 'react'
import InputDock from './inputDock'
import OutputDock from './outputDock'
import ViewAndLog from './viewAndLog'

function BeamToBeamEndPlate() {
  return (
    <div className='w-full h-screen flex flex-col bg-[#F0F0F0]'>
        {/* menu */}
        <div className='flex pl-4 gap-4 text-sm bg-gray-300'>
            <p className='hover:bg-blue-400 px-2'>File</p>
            <p className='hover:bg-blue-400 px-2'>Edit</p>
            <p className='hover:bg-blue-400 px-2'>Graphics</p>
            <p className='hover:bg-blue-400 px-2'>Database</p>
            <p className='hover:bg-blue-400 px-2'>Help</p>
        </div>

        {/* main */}
        <div className='px-2 flex justify-between'>
            <InputDock />
            <ViewAndLog />
            <OutputDock />
        </div>
    </div>
  )
}

export default BeamToBeamEndPlate