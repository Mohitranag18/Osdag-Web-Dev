import React, {useState} from 'react'
import finPlateImg from '../../assets/fin_plate_connection.png'
import endPlateImg from '../../assets/end_plate_connection.png'
import cleatAngleImg from '../../assets/cleat_angle_connection.png'
import seatedAngleImg from '../../assets/seated_angle_connection.png'


const options = [
  {
    title: 'Fin Plate',
    value: 'fin-plate',
    img: finPlateImg,
  },
  {
    title: 'Cleat Angle',
    value: 'cleat-angle',
    img: cleatAngleImg,
  },
  {
    title: 'End Plate',
    value: 'end-plate',
    img: endPlateImg,
  },
  {
    title: 'Seated Angle',
    value: 'seated-angle',
    img: seatedAngleImg,
  },
];

function ShearConnection() {
    const [selected, setSelected] = useState('end-plate'); // default selected option

  return (
    <div className='h-full flex flex-col justify-between'>
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
          <button className='bg-[#925A5B] h-fit w-48 rounded-sm p-1 px-3 text-white'>Start</button>
      </div>
    </div>
  )
}

export default ShearConnection