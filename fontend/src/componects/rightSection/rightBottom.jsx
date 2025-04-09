import React, {useState} from 'react'
import ShearConnection from './shearConnection'
import useSelectionStore from '../../store/useSelectionStore';
import MomentConnection from './momentConnection';

function RightBottom() {
  const selectedConnection = useSelectionStore((state) => state.selectedConnection);

  return (
    <div className='w-full h-full bg-white border-2 border-gray-300'>
      {
        selectedConnection === "Shear Connection" &&
        <ShearConnection />
      }
      {
        selectedConnection === "Moment Connection" &&
        <MomentConnection />
      }
    </div>
  )
}

export default RightBottom