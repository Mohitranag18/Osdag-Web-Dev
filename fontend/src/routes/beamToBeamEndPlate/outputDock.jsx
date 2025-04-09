import React, { useState } from "react";
import useSelectionStore from '../../store/useSelectionStore';
import { useEffect } from "react";


const OutputDock = () => {
  const outputData = useSelectionStore((state) => state.outputData);

  const [criticalBoltDesign, setCriticalBoltDesign] = useState({
    diameter: "",
    propertyClass: "",
    shearDemand: "",
    shearCapacity: "",
    bearingCapacity: "",
    betaBg: "",
    boltCapacity: "",
    tensionDueToMoment: "",
    pryingForce: "",
    tensionDemand: "",
    tensionCapacity: "",
    combinedCapacityIR: "",
  });

  const [detailing, setDetailing] = useState({
    numBolts: "",
    numColumns: "",
    numRows: "",
    pitchDistance: "",
    gaugeDistance: "",
    crossCentreGauge: "",
    endDistance: "",
    edgeDistance: "",
  });

  const [endPlate, setEndPlate] = useState({
    thickness: "",
    height: "",
    width: "",
    momentCapacity: "",
  });

  const [weldWeb, setWeldWeb] = useState({
    size: "",
    totalLength: "",
    stress: "",
    combinedStress: "",
    strength: "",
  });

  const [weldFlange, setWeldFlange] = useState({
    type: "",
  });

  const handleChange = (setFunc, field) => (e) => {
    setFunc((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  useEffect(() => {
    if (!outputData || Object.keys(outputData).length === 0) return;

    // 1. Critical Bolt Design
    setCriticalBoltDesign({
      diameter: outputData.critical_bolt_design?.diameter_mm || "",
      propertyClass: outputData.critical_bolt_design?.property_class || "",
      shearDemand: outputData.critical_bolt_design?.shear_demand_kN || "",
      shearCapacity: outputData.critical_bolt_design?.shear_capacity_kN || "",
      bearingCapacity: outputData.critical_bolt_design?.bearing_capacity_kN || "",
      betaBg: outputData.critical_bolt_design?.beta_bg || "",
      boltCapacity: outputData.critical_bolt_design?.bolt_capacity || "",
      tensionDueToMoment: outputData.critical_bolt_design?.tension_due_to_moment_kN || "",
      pryingForce: outputData.critical_bolt_design?.prying_force_kN || "",
      tensionDemand: outputData.critical_bolt_design?.tension_demand_kN || "",
      tensionCapacity: outputData.critical_bolt_design?.tension_capacity_kN || "",
      combinedCapacityIR: outputData.critical_bolt_design?.combined_capacity_IR || "",
    });

    // 2. Detailing
    setDetailing({
      numBolts: outputData.detailing?.no_of_bolts || "",
      numColumns: outputData.detailing?.no_of_columns || "",
      numRows: outputData.detailing?.no_of_rows || "",
      pitchDistance: outputData.detailing?.pitch_distance_mm || "",
      gaugeDistance: outputData.detailing?.gauge_distance_mm || "",
      crossCentreGauge: outputData.detailing?.cross_centre_gauge_mm || "",
      endDistance: outputData.detailing?.end_distance_mm || "",
      edgeDistance: outputData.detailing?.edge_distance_mm || "",
    });

    // 3. End Plate
    setEndPlate({
      thickness: outputData.end_plate?.thickness_mm || "",
      height: outputData.end_plate?.height_mm || "",
      width: outputData.end_plate?.width_mm || "",
      momentCapacity: outputData.end_plate?.moment_capacity_kNm || "",
    });

    // 4. Weld Web
    setWeldWeb({
      size: outputData.weld_at_web?.size_mm || "",
      totalLength: outputData.weld_at_web?.total_length_mm || "",
      stress: outputData.weld_at_web?.stress_N_per_mm || "",
      combinedStress: outputData.weld_at_web?.combined_stress_N_per_mm2 || "",
      strength: outputData.weld_at_web?.strength_N_per_mm2 || "",
    });

    // 5. Weld Flange
    setWeldFlange({
      type: outputData.weld_at_flange?.type || "",
    });

  }, [outputData]);

  return (
    <div className="max-w-[25%] w-[25%] text-xs">
      <h2 className="mb-2">Output Dock</h2>

      <form className="space-y-4 pl-2">
        <div className="border border-gray-300 p-2 rounded h-120 overflow-y-auto space-y-4">

          {/* Critical Bolt Design */}
          <section>
            <h3 className="font-bold text-gray-700 mb-1">Critical Bolt Design</h3>
            {[
              ["Diameter (mm)", "diameter"],
              ["Property Class", "propertyClass"],
              ["Shear Demand (kN)", "shearDemand"],
              ["Shear Capacity (kN)", "shearCapacity"],
              ["Bearing Capacity (kN)", "bearingCapacity"],
              ["βbg", "betaBg"],
              ["Bolt Capacity", "boltCapacity"],
              ["Tension Due to Moment (kN)", "tensionDueToMoment"],
              ["Prying Force (kN)", "pryingForce"],
              ["Tension Demand (kN)", "tensionDemand"],
              ["Tension Capacity (kN)", "tensionCapacity"],
              ["Combined Capacity, I.R", "combinedCapacityIR"],
            ].map(([label, key]) => (
              <div key={key} className="flex justify-between items-center mb-1">
                <label>{label}</label>
                <input
                  type="text"
                  value={criticalBoltDesign[key]}
                  onChange={handleChange(setCriticalBoltDesign, key)}
                  className="border bg-white border-blue-500 px-2 py-0.5 rounded w-32"
                />
              </div>
            ))}
          </section>

          {/* Detailing */}
          <section>
            <h3 className="font-bold text-gray-700 mb-1">Detailing</h3>
            {[
              ["No. of Bolts", "numBolts"],
              ["No. of Columns", "numColumns"],
              ["No. of Rows", "numRows"],
              ["Pitch Distance (mm)", "pitchDistance"],
              ["Gauge Distance (mm)", "gaugeDistance"],
              ["Cross-centre Gauge (mm)", "crossCentreGauge"],
              ["End Distance (mm)", "endDistance"],
              ["Edge Distance (mm)", "edgeDistance"],
            ].map(([label, key]) => (
              <div key={key} className="flex justify-between items-center mb-1">
                <label>{label}</label>
                <input
                  type="text"
                  value={detailing[key]}
                  onChange={handleChange(setDetailing, key)}
                  className="border bg-white border-blue-500 px-2 py-0.5 rounded w-32"
                />
              </div>
            ))}
          </section>

          {/* End Plate */}
          <section>
            <h3 className="font-bold text-gray-700 mb-1">End Plate</h3>
            {[
              ["Thickness (mm)", "thickness"],
              ["Height (mm)", "height"],
              ["Width (mm)", "width"],
              ["Moment Capacity (kNm)", "momentCapacity"],
            ].map(([label, key]) => (
              <div key={key} className="flex justify-between items-center mb-1">
                <label>{label}</label>
                <input
                  type="text"
                  value={endPlate[key]}
                  onChange={handleChange(setEndPlate, key)}
                  className="border bg-white border-blue-500 px-2 py-0.5 rounded w-32"
                />
              </div>
            ))}
          </section>

          {/* Stiffener Plate */}
          <section>
            <h3 className="font-bold text-gray-700 mb-1">Stiffener Plate</h3>
            {["Dimensions", "Typical Sketch"].map((label, index) => (
              <div key={index} className="flex justify-between items-center mb-1">
                <label>{label}</label>
                <button
                  type="button"
                  className="bg-gray-400 text-white text-xs px-3 py-1 rounded"
                >
                  Details
                </button>
              </div>
            ))}
          </section>

          {/* Weld at Web */}
          <section>
            <h3 className="font-bold text-gray-700 mb-1">Weld at Web</h3>
            {[
              ["Size (mm)", "size"],
              ["Total Length (mm)", "totalLength"],
              ["Stress (N/mm)", "stress"],
              ["Combined Stress (N/mm2)", "combinedStress"],
              ["Strength (N/mm2)", "strength"],
            ].map(([label, key]) => (
              <div key={key} className="flex justify-between items-center mb-1">
                <label>{label}</label>
                <input
                  type="text"
                  value={weldWeb[key]}
                  onChange={handleChange(setWeldWeb, key)}
                  className="border bg-white border-blue-500 px-2 py-0.5 rounded w-32"
                />
              </div>
            ))}
          </section>

          {/* Weld at Flange */}
          <section>
            <h3 className="font-bold text-gray-700 mb-1">Weld at Flange</h3>
            <div className="flex justify-between items-center mb-1">
              <label>Type</label>
              <input
                type="text"
                value={weldFlange.type}
                onChange={handleChange(setWeldFlange, "type")}
                className="border bg-white border-blue-500 px-2 py-0.5 rounded w-32"
              />
            </div>
          </section>
        </div>

        {/* Buttons */}
        <div className="flex flex-col items-center gap-2">
          <button
            type="button"
            className="bg-[#a9645a] text-white px-6 py-2 rounded hover:bg-[#8c5048]"
          >
            Create Design Report
          </button>
          <button
            type="button"
            className="bg-[#a9645a] text-white px-6 py-2 rounded hover:bg-[#8c5048]"
          >
            Save Output
          </button>
        </div>
      </form>
    </div>
  );
};

export default OutputDock;
