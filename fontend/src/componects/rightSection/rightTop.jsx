import React, { useState } from 'react';
import RightHeadBtn from './rightHeadBtn';
import useSelectionStore from '../../store/useSelectionStore';

function RightTop() {
  const selectedConnection = useSelectionStore((state) => state.selectedConnection);
  const setSelectedConnection = useSelectionStore((state) => state.setSelectedConnection);

  const buttons = [
    "Shear Connection",
    "Moment Connection",
    "Base Plate",
    "Truss Connection",
  ];

  return (
    <div className='w-full h-12 flex justify-center gap-2'>
      {buttons.map((btnText) => (
        <div key={btnText} onClick={() => setSelectedConnection(btnText)}>
          <RightHeadBtn text={btnText} isSelected={selectedConnection === btnText} />
        </div>
      ))}
    </div>
  );
}

export default RightTop;
