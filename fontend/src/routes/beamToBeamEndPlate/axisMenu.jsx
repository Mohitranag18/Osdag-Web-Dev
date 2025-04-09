import React from 'react'

function AxisMenu() {
  return (
    <div className="w-full h-12 flex items-center gap-4 px-2 py-1 text-sm">
        {/* View toggle buttons */}
      <div className="flex gap-1">
        <button className="w-6 h-6 border rounded flex items-center justify-start bg-white overflow-hidden">
          <div className="w-2 h-6 bg-blue-500" />
        </button>
        <button className="w-6 h-6 border rounded flex items-center justify-end bg-white overflow-hidden">
          <div className="w-2 h-6 bg-blue-500" />
        </button>
      </div>

      {/* Axis icons */}
      <div className="flex gap-1">
        <img src="/icons/axis-zxy.png" alt="X axis" className="w-14 h-6" />
        <img src="/icons/axis-yx.png" alt="Y axis" className="w-14 h-6" />
        <img src="/icons/axis-yx.png" alt="Z axis" className="w-14 h-6" />
      </div>

      {/* Checkbox options */}
      <div className="flex items-center gap-3 ml-1">
        <label className="flex items-center gap-1">
          <input type="checkbox" className="w-3 h-3" />
          <span>Model</span>
        </label>
        <label className="flex items-center gap-1">
          <input type="checkbox" className="w-3 h-3" />
          <span>Beam</span>
        </label>
        <label className="flex items-center gap-1">
          <input type="checkbox" className="w-3 h-3" />
          <span className="text-gray-500">End Plate</span>
        </label>
      </div>
    </div>
  )
}

export default AxisMenu