import React from 'react';

function LeftButton({ text, isSelected }) {
  return (
    <div
      className={`w-full h-7 flex justify-center items-center rounded-md cursor-pointer ${
        isSelected ? 'bg-[#A03128]' : 'bg-[#925A5B]'
      } border-1 border-white`}
    >
      <p className="text-white m-0">{text}</p>
    </div>
  );
}

export default LeftButton;
