import React from 'react';

function RightHeadBtn({ text, isSelected }) {
  return (
    <div
      className={`w-fit h-12 px-4 flex justify-center items-center rounded-t-sm cursor-pointer ${
        isSelected && 'bg-[#925A5B]'
      }`}
    >
      <p className={`m-0 ${
        isSelected ? 'text-white' : 'text-black'
      }`}>{text}</p>
    </div>
  );
}

export default RightHeadBtn;
