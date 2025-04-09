import React, { useState } from 'react';
import axios from 'axios';
import useSelectionStore from '../../store/useSelectionStore';

const API_URL = 'http://localhost:8000/api/beam-to-beam-connection/';

const InputDock = () => {
  const outputData = useSelectionStore((state) => state.outputData);
  const setOutputData = useSelectionStore((state) => state.setOutputData);

  const [inputData, setInputData] = useState({
    connectivity: '',
    endPlateType: '',
    beamSection: '',
    beamMaterial: '',
    bendingMoment: '',
    shearForce: '',
    axialForce: '',
    boltDiameter: '',
    boltType: '',
    boltPropertyClass: '',
    endPlateThickness: '',
    weldType: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData(prev => ({ ...prev, [name]: value }));
  };

  const handleReset = () => {
    setInputData({
      connectivity: '',
      endPlateType: '',
      beamSection: '',
      beamMaterial: '',
      bendingMoment: '',
      shearForce: '',
      axialForce: '',
      boltDiameter: '',
      boltType: '',
      boltPropertyClass: '',
      endPlateThickness: '',
      weldType: '',
    });
  };

  const postBeamConnectionData = async (inputData) => {
    try {
      const response = await axios.post(API_URL, inputData);
      setOutputData(response.data)
      console.log(outputData)
      return response.data;
    } catch (error) {
      console.error('API error:', error);
      throw error;
    }
  };

  const handleSubmit = () => {
    postBeamConnectionData(inputData)
    // console.log("Updated outputData:", outputData);
  };

  return (
    <div className="max-w-[25%] w-[25%] text-xs">
      <h2 className="text-xs mb-2">Input Dock</h2>
      <form className="space-y-2 pl-1">

        <div className="border border-gray-300 p-1 rounded h-120 overflow-y-auto space-y-3">

          {/* Connecting Members */}
          <div>
            <h3 className="font-semibold text-gray-700 mb-1">Connecting Members</h3>
            <div className='flex justify-between items-center mb-1'>
              <label>Connectivity *</label>
              <select name="connectivity" value={inputData.connectivity} onChange={handleChange} className="border bg-white px-1 py-0.5 rounded w-42">
                <option value="">Select</option>
                <option>Coplanar Tension-Compression Flange</option>
                <option>Coplanar Tension Flange</option>
                <option>Coplanar Compression Flange</option>
              </select>
            </div>
            <div className='flex justify-between items-center mb-1'>
              <label>End Plate Type *</label>
              <select name="endPlateType" value={inputData.endPlateType} onChange={handleChange} className="border bg-white px-1 py-0.5 rounded w-42">
                <option value="">Select</option>
                <option>Flushed - Reversible Moment</option>
                <option>Extended - One Way - Irreversible Moment</option>
                <option>Extended Both Ways - Reversible Moment</option>
              </select>
            </div>
            <div className="flex justify-center">
              <img src="/path/to/image.png" alt="Connection Diagram" className="h-16" />
            </div>
          </div>

          {/* Beam Section */}
          <div>
            <h3 className="font-semibold text-gray-700 mb-1">Beam Section</h3>
            <div className='flex justify-between items-center mb-1'>
              <label>Beam Section *</label>
              <select name="beamSection" value={inputData.beamSection} onChange={handleChange} className="border bg-white px-1 py-0.5 rounded w-42">
                <option value="">Select Section</option>
                <option>JB 150</option>
                <option>JB 175</option>
                <option>JB 200</option>
                <option>JB 225</option>
              </select>
            </div>
            <div className='flex justify-between items-center mb-1'>
              <label>Material *</label>
              <select name="beamMaterial" value={inputData.beamMaterial} onChange={handleChange} className="border bg-white px-1 py-0.5 rounded w-42">
                <option value="">Select Material</option>
                <option>E 165 (Fe 290)</option>
                <option>E 165 (Fe 410 W)A</option>
                <option>E 250 (Fe 410 W)B</option>
                <option>E 250 (Fe 410 W)C</option>
                <option>E 250 (Fe 440)</option>
                <option>E 300 (Fe 440)</option>
                <option>E 350 (Fe 490)</option>
                <option>E 410 (Fe 540)</option>
                <option>E 450 (Fe 570)D</option>
                <option>E 450 (Fe 590)E</option>
                <option>Cus_400_500_600_1400</option>
                <option>Custom</option>
              </select>
            </div>
          </div>

          {/* Factored Loads */}
          <div>
            <h3 className="font-semibold text-gray-700 mb-1">Factored Loads</h3>
            <div className='flex justify-between items-center mb-1'>
              <label>Bending Moment (kNm)*</label>
              <input name="bendingMoment" type="text" value={inputData.bendingMoment} onChange={handleChange} className="border bg-white px-1 py-0.5 rounded w-42" />
            </div>
            <div className='flex justify-between items-center mb-1'>
              <label>Shear Force (kN) *</label>
              <input name="shearForce" type="text" value={inputData.shearForce} onChange={handleChange} className="border bg-white px-1 py-0.5 rounded w-42" />
            </div>
            <div className='flex justify-between items-center mb-1'>
              <label>Axial Force</label>
              <input name="axialForce" type="text" value={inputData.axialForce} onChange={handleChange} className="border bg-white px-1 py-0.5 rounded w-42" />
            </div>
          </div>

          {/* Bolt */}
          <div>
            <h3 className="font-semibold text-gray-700 mb-1">Bolt</h3>
            <div className='flex justify-between items-center mb-1'>
              <label>Diameter (mm)</label>
              <select name="boltDiameter" value={inputData.boltDiameter} onChange={handleChange} className="border bg-white px-1 py-0.5 rounded w-42">
                <option>All</option>
                <option>Customized</option>
              </select>
            </div>
            <div className='flex justify-between items-center mb-1'>
              <label>Type *</label>
              <select name="boltType" value={inputData.boltType} onChange={handleChange} className="border bg-white px-1 py-0.5 rounded w-42">
                <option>Bearing Bolt</option>
                <option>Friction Grip Bolt</option>
              </select>
            </div>
            <div className='flex justify-between items-center mb-1'>
              <label>Property Class</label>
              <select name="boltPropertyClass" value={inputData.boltPropertyClass} onChange={handleChange} className="border bg-white px-1 py-0.5 rounded w-42">
                <option>All</option>
                <option>Customized</option>
              </select>
            </div>
          </div>

          {/* End Plate */}
          <div>
            <h3 className="font-semibold text-gray-700 mb-1">End Plate</h3>
            <div className='flex justify-between items-center mb-1'>
              <label>Thickness (mm) *</label>
              <select name="endPlateThickness" value={inputData.endPlateThickness} onChange={handleChange} className="border bg-white px-1 py-0.5 rounded w-42">
                <option>All</option>
                <option>Customized</option>
              </select>
            </div>
          </div>

          {/* Weld */}
          <div>
            <h3 className="font-semibold text-gray-700 mb-1">Weld</h3>
            <div className='flex justify-between items-center mb-1'>
              <label>Type *</label>
              <select name="weldType" value={inputData.weldType} onChange={handleChange} className="border bg-white px-1 py-0.5 rounded w-42">
                <option>Groove Weld</option>
              </select>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-4">
          <button type="button" onClick={handleReset} className="bg-[#a9645a] text-white px-6 py-2 rounded hover:bg-[#8c5048]">Reset</button>
          <button type="button" onClick={handleSubmit} className="bg-[#a9645a] text-white px-6 py-2 rounded hover:bg-[#8c5048]">Design</button>
        </div>
      </form>
    </div>
  );
};

export default InputDock;
