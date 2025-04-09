import React, { useState } from 'react'
import RightHeadBtn from './rightHeadBtn';
import coverPlateBoltedImg from '../../assets/cover-plate-bolted.png'
import coverPlateWeldedImg from '../../assets/cover-plate-welded.png'
import monentEndPlateImg from '../../assets/moment-end-plate.png'
import { Link } from 'react-router-dom';

const options = [
    {
      title: 'Cover Plate Bolted',
      value: 'cover-plate-bolted',
      img: coverPlateBoltedImg,
    },
    {
      title: 'Cover Plate Welded',
      value: 'cover-plate-welded',
      img: coverPlateWeldedImg,
    },
    {
      title: 'End Plate',
      value: 'end-plate',
      img: monentEndPlateImg,
    },
  ];

function Beam_to_beam_splice() {
    const [selected, setSelected] = useState('end-plate'); // default selected option

  return (
    <div className='w-full h-full flex flex-col justify-between border-t-2 border-gray-300'>
        <div>
            <div className="w-full flex flex-wrap gap-4 pt-4 justify-start">
            {options.map((opt) => (
            <div className='w-[40%] pl-24'>
                <span className="text-md font-semibold mb-3">{opt.title}</span>
                <label
                key={opt.value}
                className={`flex flex-col items-center rounded-md p-4 py-2 cursor-pointer relative`}
                >
                <input
                    type="radio"
                    name="connection"
                    className="absolute top-2 left-2 h-full"
                    checked={selected === opt.value}
                    onChange={() => setSelected(opt.value)}
                />
                <img
                    src={opt.img}
                    alt={opt.title}
                    className="w-58 h-full object-contain"
                />
                </label>
            </div>
            ))}
            </div>
        </div>
        <div className='w-full flex justify-center items-center h-14'>
          <Link to="/beamToBeamEndPlate">
          <button className='bg-[#925A5B] h-fit w-48 rounded-sm p-1 px-3 text-white'>Start</button>
          </Link>
        </div>
    </div>
  )
}

export default Beam_to_beam_splice