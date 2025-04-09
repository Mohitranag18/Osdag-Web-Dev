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

        <div className="w-52 p-2 flex justify-between items-center space-x-3">
          <span className="text-sm mr-0 font-medium text-gray-900">Dark Mode</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-9 h-5 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:bg-blue-600 transition-all"></div>
            <div className="absolute left-0.5 top-0.5 bg-white w-4 h-4 rounded-full transition-transform peer-checked:translate-x-full"></div>
          </label>
        </div>
    </div>
  )
}

export default LeftBottom