import React from 'react'
import View3D from './view3D'
import Logs from './logs'
import AxisMenu from './axisMenu'

function ViewAndLog() {
  return (
    <div className='w-[50%] h-full flex flex-col gap-1 px-8'>
        <AxisMenu />
        <View3D />
        <Logs />
    </div>
  )
}

export default ViewAndLog