import React, { useState } from 'react';
import LeftButton from './leftButton';

function LeftTop() {
  const [selected, setSelected] = useState("Connection");

  const buttons = [
    "Connection",
    "Tension Member",
    "Compression Member",
    "Flexural Member",
    "Beam-Column",
    "Plate Girder",
    "Truss",
    "2D Frame",
    "3D Frame",
    "Group Design",
  ];

  return (
    <div className='w-full h-full p-10 pb-8 pt-14 bg-[#91B014] border-6 border-[#a6ca16] border-t-[#61750D] border-l-[#61750D] flex flex-col justify-around'>
      {buttons.map((btnText) => (
        <div key={btnText} onClick={() => setSelected(btnText)}>
          <LeftButton text={btnText} isSelected={selected === btnText} />
        </div>
      ))}
    </div>
  );
}

export default LeftTop;
