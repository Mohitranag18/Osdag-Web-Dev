import React, { useState } from 'react'
import RightHeadBtn from './rightHeadBtn';
import Beam_to_beam_splice from './beam_to_beam_splice';


function MomentConnection() {
    const [selectedMomentConnection, setSelectedMomentConnection] = useState("Beam-to-Beam Splice")

    const buttons = [
        "Beam-to-Beam Splice",
        "Beam-to-Column",
        "Column-to-Column Splice",
        "PEB",
    ];

  return (
    <div className='w-full h-full flex flex-col'>
        <div className='w-full h-12 flex justify-center gap-2'>
            {buttons.map((btnText) => (
                <div key={btnText} onClick={() => setSelectedMomentConnection(btnText)}>
                <RightHeadBtn text={btnText} isSelected={selectedMomentConnection === btnText} />
                </div>
            ))}
        </div>

        {
            selectedMomentConnection === "Beam-to-Beam Splice" &&
            <Beam_to_beam_splice />
        }
    </div>
  )
}

export default MomentConnection