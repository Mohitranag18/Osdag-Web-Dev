import React from 'react'

function LeftBottom() {
  return (
    <div className='w-full h-12 flex justify-between items-center'>
        <div className='w-full'>
            <select className='w-full border-1 border-black p-1 rounded-sm'>
                <option value="help">Help</option>
                <option value="help">Privacy</option>
                <option value="help">Help</option>
            </select>
        </div>
        <div className='w-48 p-1'>
            <p>Dard Mode</p>
        </div>
    </div>
  )
}

export default LeftBottom